/**
 * Gameplay (build step 1): fly, auto-fire, one enemy type, hit and die.
 * Board: reference/screens/Gameplay.png. Every number comes from src/data or the board layout file.
 */
import Phaser from 'phaser';
import {
  balance,
  getBoss,
  getDifficulty,
  getEnemyClass,
  getJetBalance,
  getJetInfo,
  getPilot,
  getStage,
  getStageTheme,
  getStageWaves,
  baseBombs,
  laneX,
  settings,
  theme,
  type DifficultyLevel,
  type JetBalance,
  type Stage,
  type StageThemeItem,
} from '../data';
import {
  ComboTracker,
  bulletDamage,
  damageLevelAfterHit,
  enemyBulletSpeed,
  enemyMaxHp,
  firstDamageLevel,
  scoreForKill,
  shotIntervalS,
  startHull,
} from '../game/rules';
import { formationOffsets, stepOneEnemy, stepOneWave } from '../game/spawner';
import { sprite, spriteScale } from '../game/sprites';
import { GAMEPLAY_BOARD_POSE, type DebugOptions } from '../systems/debug';
import { MoveInput } from '../systems/input';
import { Hud, powerupHud, type HudState } from '../ui/Hud';
import { EXPLOSION_S, PLAY } from '../ui/gameplayLayout';
import { GAMEPLAY_TEXT } from '../ui/strings';

interface Bullet {
  img: Phaser.GameObjects.Image;
  x: number;
  y: number;
}
interface Enemy {
  img: Phaser.GameObjects.Image;
  item: StageThemeItem;
  x: number;
  y: number;
  x0: number;
  vx: number;
  vy: number;
  hp: number;
  radius: number;
  nextShotT: number;
}
interface EnemyShot {
  img: Phaser.GameObjects.Image;
  x: number;
  y: number;
  vy: number;
}

/** Pilot for solo play until the Profiles/Hangar screens exist (step 3). The Gameplay board shows Ayan. */
const SOLO_PILOT = 'ayan';

export class GameplayScene extends Phaser.Scene {
  private dbg!: DebugOptions;
  private stage!: Stage;
  private diff!: DifficultyLevel;
  private jet!: JetBalance;
  private jetId!: string;
  private enemyItem!: StageThemeItem;
  private hud!: Hud;
  private input2!: MoveInput;

  private t = 0;
  private player!: Phaser.GameObjects.Image;
  private flash!: Phaser.GameObjects.Image;
  private px = 0;
  private py = 0;
  private hull = 0;
  private hullMax = 0;
  private alive = true;
  private invulnUntil = 0;
  private damageLevel = 1;
  private fireCooldown = 0;
  private score = 0;
  private combo = new ComboTracker();
  private bombs = 0;
  private kills = 0;
  private hitsTaken = 0;
  private waveN = 0;
  private frozen = false;

  private bullets: Bullet[] = [];
  private enemies: Enemy[] = [];
  private shots: EnemyShot[] = [];

  constructor() {
    super('Gameplay');
  }

  create(): void {
    this.dbg = this.registry.get('debug') as DebugOptions;
    this.stage = getStage(this.dbg.stage);
    this.diff = getDifficulty(settings.difficulty_default);
    this.jetId = this.dbg.jet;
    this.jet = getJetBalance(this.jetId);
    this.enemyItem = stepOneEnemy(this.stage).item;
    this.resetRun();

    const { width, height } = theme.canvas;
    this.add.image(0, 0, `stage_theme_${this.stage.theme_ref}`).setOrigin(0).setDisplaySize(width, height);

    const s = spriteScale();
    this.player = this.add.image(this.px, this.py, `jet_${this.jetId}`).setScale(s).setDepth(10);
    this.flash = this.add
      .image(this.px, this.py, 'fx_hit_flash')
      .setDisplaySize(sprite(`jet_${this.jetId}`).width, sprite(`jet_${this.jetId}`).height)
      .setDepth(11)
      .setAlpha(0);

    this.input2 = new MoveInput(this);
    this.hud = new Hud(this);
    this.input.keyboard!.on('keydown-R', () => {
      if (!this.alive) this.scene.restart();
    });

    if (this.dbg.pose === 'gameplay') this.frozen = true;
    this.exposeDebug();
    this.refreshHud();
  }

  private resetRun(): void {
    this.t = 0;
    this.px = PLAY.jetStart.x;
    this.py = PLAY.jetStart.y;
    this.hullMax = startHull(this.diff, this.jet);
    this.hull = this.hullMax;
    this.alive = true;
    this.invulnUntil = 0;
    this.damageLevel = firstDamageLevel();
    this.fireCooldown = 0;
    this.score = 0;
    this.combo = new ComboTracker();
    this.bombs = baseBombs();
    this.kills = 0;
    this.hitsTaken = 0;
    this.waveN = 0;
    this.frozen = false;
    this.bullets = [];
    this.enemies = [];
    this.shots = [];
  }

  override update(_time: number, deltaMs: number): void {
    if (this.frozen) return;
    const dt = (deltaMs / 1000) * this.dbg.ff;
    this.t += dt;
    this.combo.expire(this.t);

    if (this.alive) {
      this.movePlayer(dt);
      this.autoFire(dt);
    }
    if (!this.dbg.noSpawn) this.spawnWaves();
    this.moveBullets(dt);
    this.moveEnemies(dt);
    this.moveShots(dt);
    this.collide();
    this.flash.setPosition(this.px, this.py);
    this.refreshHud();
  }

  // ---------- player ----------
  private movePlayer(dt: number): void {
    const v = this.input2.vector();
    const info = sprite(`jet_${this.jetId}`);
    const { width, height } = theme.canvas;
    this.px = Phaser.Math.Clamp(
      this.px + v.x * this.jet.move_px_s * dt,
      info.width / 2,
      width - info.width / 2,
    );
    this.py = Phaser.Math.Clamp(
      this.py + v.y * this.jet.move_px_s * dt,
      info.height / 2,
      height - info.height / 2,
    );
    this.player.setPosition(this.px, this.py);
  }

  /** Firing is automatic (Gameplay board). bullets_per_shot side by side, board spacing. */
  private autoFire(dt: number): void {
    this.fireCooldown -= dt;
    while (this.fireCooldown <= 0) {
      this.fireCooldown += shotIntervalS(this.jet);
      const n = this.jet.bullets_per_shot;
      for (let i = 0; i < n; i++) {
        const x = this.px + (i - (n - 1) / 2) * PLAY.bulletSpacing;
        const y = this.py + PLAY.muzzleDy;
        const img = this.add.image(x, y, `bullet_${this.jetId}`).setScale(spriteScale()).setDepth(9);
        this.bullets.push({ img, x, y });
      }
    }
  }

  private moveBullets(dt: number): void {
    const half = sprite(`bullet_${this.jetId}`).height / 2;
    this.bullets = this.bullets.filter((b) => {
      b.y -= balance.player.bullet_speed_px_s * dt;
      b.img.setPosition(b.x, b.y);
      if (b.y + half < 0) {
        b.img.destroy();
        return false;
      }
      return true;
    });
  }

  private hitPlayer(): void {
    if (!this.alive || this.dbg.god || this.t < this.invulnUntil) return;
    this.hull -= 1;
    this.hitsTaken += 1;
    this.damageLevel = damageLevelAfterHit(this.damageLevel);
    this.combo.hit();
    this.invulnUntil = this.t + balance.player.invulnerable_after_hit_s;
    this.flash.setAlpha(1);
    this.tweens.add({
      targets: this.flash,
      alpha: 0,
      duration: (balance.player.invulnerable_after_hit_s * 1000) / this.dbg.ff,
    });
    if (this.hull <= 0) this.killPlayer();
  }

  private killPlayer(): void {
    this.hull = 0;
    this.alive = false;
    this.player.setVisible(false);
    this.flash.setAlpha(0);
    this.explode(this.px, this.py, 'fx_explosion_large', sprite(`jet_${this.jetId}`).width);
  }

  // ---------- enemies ----------
  private spawnWaves(): void {
    for (;;) {
      const next = stepOneWave(this.stage, this.waveN);
      if (this.t < next.t) return;
      this.waveN += 1;
      const offsets = formationOffsets(
        next.spawn.formation,
        next.spawn.count,
        PLAY.formationSpacingX,
        PLAY.formationStepY,
      );
      const info = sprite(`enemy_${this.enemyKey()}`);
      const topMost = Math.max(...offsets.map((o) => o.y));
      for (const o of offsets) this.spawnEnemy(laneX(next.spawn.lane) + o.x, o.y - topMost - info.height / 2);
    }
  }

  private enemyKey(): string {
    return this.enemyItem.name.toLowerCase().replace(/\s+/g, '_');
  }

  private spawnEnemy(x: number, y: number): void {
    const cls = getEnemyClass(this.enemyItem.class);
    const info = sprite(`enemy_${this.enemyKey()}`);
    const diag = cls.speed_px_s / Math.SQRT2;
    const img = this.add.image(x, y, `enemy_${this.enemyKey()}`).setScale(spriteScale()).setDepth(8);
    this.enemies.push({
      img,
      item: this.enemyItem,
      x,
      y,
      x0: x,
      vx: diag,
      vy: diag,
      hp: enemyMaxHp(this.enemyItem, this.stage, this.diff),
      radius: info.width / 2,
      nextShotT: this.t + (cls.fire_interval_s ?? Number.POSITIVE_INFINITY),
    });
  }

  /** "Flies in zig-zag ... and fires single red shots." Zig-zag swing = half the board formation spacing. */
  private moveEnemies(dt: number): void {
    const swing = PLAY.formationSpacingX / 2;
    const cls = getEnemyClass(this.enemyItem.class);
    const shotSpeed = enemyBulletSpeed(this.enemyItem, this.stage, this.diff);
    this.enemies = this.enemies.filter((e) => {
      e.x += e.vx * dt;
      e.y += e.vy * dt;
      if (Math.abs(e.x - e.x0) >= swing) {
        e.x = e.x0 + Math.sign(e.x - e.x0) * swing;
        e.vx = -e.vx;
      }
      e.img.setPosition(e.x, e.y);
      if (shotSpeed !== null && cls.fire_interval_s !== null && this.t >= e.nextShotT) {
        e.nextShotT += cls.fire_interval_s;
        if (e.y > 0) this.spawnShot(e.x, e.y + e.radius, shotSpeed);
      }
      if (e.y - e.radius > theme.canvas.height) {
        e.img.destroy();
        return false;
      }
      return true;
    });
  }

  private spawnShot(x: number, y: number, vy: number): void {
    const orb = sprite('enemy_bullet_red_orb');
    // Effects board red orb drawn so its core (r 9 of 50) matches the Gameplay board's 10 px shot.
    const core = orb.width * PLAY.redOrbCoreFraction;
    const img = this.add
      .image(x, y, 'enemy_bullet_red_orb')
      .setDisplaySize((orb.width * PLAY.enemyShotPx) / core, (orb.height * PLAY.enemyShotPx) / core)
      .setDepth(9);
    this.shots.push({ img, x, y, vy });
  }

  private moveShots(dt: number): void {
    this.shots = this.shots.filter((s) => {
      s.y += s.vy * dt;
      s.img.setPosition(s.x, s.y);
      if (s.y > theme.canvas.height + PLAY.enemyShotPx) {
        s.img.destroy();
        return false;
      }
      return true;
    });
  }

  // ---------- collisions ----------
  private collide(): void {
    const b = sprite(`bullet_${this.jetId}`);
    const dmg = bulletDamage(this.jet, this.damageLevel);
    for (const e of this.enemies) {
      for (const bullet of this.bullets) {
        if (bullet.img.active && circleRect(e.x, e.y, e.radius, bullet.x, bullet.y, b.width, b.height)) {
          bullet.img.destroy();
          e.hp -= dmg;
        }
      }
    }
    this.bullets = this.bullets.filter((x) => x.img.active);
    this.enemies = this.enemies.filter((e) => {
      if (e.hp > 0) return true;
      this.killEnemy(e);
      return false;
    });

    if (!this.alive) return;
    const r = this.jet.hitbox_radius_px;
    for (const s of this.shots) {
      if (Math.hypot(s.x - this.px, s.y - this.py) <= r + PLAY.enemyShotPx / 2) {
        s.img.destroy();
        this.hitPlayer();
      }
    }
    this.shots = this.shots.filter((s) => s.img.active);
    for (const e of this.enemies) {
      if (Math.hypot(e.x - this.px, e.y - this.py) <= r + e.radius) this.hitPlayer();
    }
  }

  private killEnemy(e: Enemy): void {
    const mult = this.combo.kill(this.t);
    this.score += scoreForKill(e.item.points, mult, this.diff);
    this.kills += 1;
    e.img.destroy();
    this.explode(e.x, e.y, 'fx_explosion_small', e.radius * 2);
  }

  private explode(x: number, y: number, key: string, size: number): void {
    const img = this.add.image(x, y, key).setDisplaySize(size, size).setDepth(12);
    this.tweens.add({
      targets: img,
      alpha: 0,
      duration: (EXPLOSION_S * 1000) / this.dbg.ff,
      onComplete: () => img.destroy(),
    });
  }

  // ---------- HUD ----------
  private hudState(): HudState {
    const theme1 = getStageTheme(this.stage.theme_ref);
    const boss = getBoss(this.stage.boss_ids[0]!);
    const waves = getStageWaves(this.stage.stage);
    const base: HudState = {
      pilotLine: GAMEPLAY_TEXT.pilot(getPilot(SOLO_PILOT).name, getJetInfo(this.jetId).name),
      hull: this.hull,
      hullMax: this.hullMax,
      focus: this.t / balance.special.base_fill_seconds,
      damageLevel: this.damageLevel,
      stageLine: GAMEPLAY_TEXT.stage(this.stage.stage, theme1.name),
      stageColor: theme1.color,
      bossLine: GAMEPLAY_TEXT.bossAhead(boss.name),
      progress: this.t / waves.boss_after_s,
      score: this.score,
      comboMult: this.combo.multiplier,
      lives: this.diff.continues,
      powerup: null,
      bombs: this.bombs,
      hint: GAMEPLAY_TEXT.hint,
    };
    if (this.dbg.pose !== 'gameplay') return base;
    const P = GAMEPLAY_BOARD_POSE;
    const c = new ComboTracker();
    for (let i = 0; i < P.comboChain; i++) c.kill(0);
    return {
      ...base,
      hull: P.hull,
      focus: P.focus,
      damageLevel: P.damageLevel,
      progress: P.progress,
      score: P.score,
      comboMult: c.multiplier,
      lives: P.lives,
      powerup: powerupHud(P.powerup, P.powerupLeftS),
      bombs: P.bombs,
    };
  }

  private refreshHud(): void {
    this.hud.update(this.hudState());
  }

  // ---------- debug hooks (only with ?debug) ----------
  private exposeDebug(): void {
    if (!this.dbg.enabled) return;
    (window as unknown as { __A2__: unknown }).__A2__ = {
      state: () => ({
        t: this.t,
        x: this.px,
        y: this.py,
        hull: this.hull,
        hullMax: this.hullMax,
        alive: this.alive,
        score: this.score,
        kills: this.kills,
        hitsTaken: this.hitsTaken,
        damageLevel: this.damageLevel,
        comboMult: this.combo.multiplier,
        bullets: this.bullets.length,
        enemies: this.enemies.map((e) => ({ x: e.x, y: e.y, hp: e.hp, name: e.item.name })),
        shots: this.shots.length,
        stage: this.stage.stage,
        jet: this.jetId,
        god: this.dbg.god,
        ff: this.dbg.ff,
      }),
      hudTexts: () => this.hud.visibleTexts(),
      spawnEnemyAt: (x: number, y: number) => this.spawnEnemy(x, y),
      fireShotAt: (x: number, y: number) =>
        this.spawnShot(x, y, enemyBulletSpeed(this.enemyItem, this.stage, this.diff) ?? 0),
    };
  }
}

/** Circle vs axis-aligned rect centred at (rx, ry). */
function circleRect(
  cx: number,
  cy: number,
  r: number,
  rx: number,
  ry: number,
  w: number,
  h: number,
): boolean {
  const nx = Phaser.Math.Clamp(cx, rx - w / 2, rx + w / 2);
  const ny = Phaser.Math.Clamp(cy, ry - h / 2, ry + h / 2);
  return (cx - nx) ** 2 + (cy - ny) ** 2 <= r * r;
}
