/** Gameplay HUD, built to reference/board-source/Gameplay.dc.html. Sits on top and never scrolls. */
import Phaser from 'phaser';
import { theme, powerups } from '../data';
import { formatScore } from '../game/rules';
import {
  BOMB_PANEL,
  FONT_BODY,
  FONT_DISPLAY,
  HINT,
  PANEL,
  PILOT_PANEL,
  POWERUP_PANEL,
  SCORE_PANEL,
  STAGE_BAR,
  TRACK,
  type Box,
} from './gameplayLayout';

export const color = (key: string): string => {
  const c = theme.colors[key];
  if (!c) throw new Error(`theme.json has no color ${key}`);
  return c;
};
export const hex = (css: string): number => Number.parseInt(css.replace('#', ''), 16);

export interface HudState {
  pilotLine: string; // "AYAN · NOVA STRIKER"
  hull: number;
  hullMax: number;
  focus: number; // 0..1
  damageLevel: number;
  stageLine: string; // "STAGE 1 · EMBER BELT"
  stageColor: string;
  bossLine: string; // "BOSS AHEAD · ROCKMAW"
  progress: number; // 0..1
  score: number;
  comboMult: number;
  lives: number;
  powerup: { tag: string; name: string; left: number; total: number } | null;
  bombs: number;
  hint: string;
}

const DEPTH = 1000;

export class Hud {
  private g: Phaser.GameObjects.Graphics;
  private texts: Record<string, Phaser.GameObjects.Text> = {};
  private lives: Phaser.GameObjects.Image;
  private bombStars: Phaser.GameObjects.Image[] = [];
  private powerupObjs: Phaser.GameObjects.GameObject[] = [];
  private state: HudState | null = null;

  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
    this.g = scene.add.graphics().setDepth(DEPTH);
    const P = PILOT_PANEL;
    scene.add
      .image(P.portrait[0], P.portrait[1], 'hud_pilot_ayan')
      .setOrigin(0)
      .setDisplaySize(P.portrait[2], P.portrait[3])
      .setDepth(DEPTH + 1);

    const muted = color('textMuted');
    this.text(
      'pilot',
      P.title.x,
      P.title.y,
      '',
      FONT_DISPLAY,
      P.title.size,
      color('cyan'),
      '700',
      P.title.spacing,
    );
    this.text('hullLabel', P.labelX, P.rows.hull, 'HULL', FONT_BODY, P.labelSize, muted);
    this.text('focusLabel', P.labelX, P.rows.focus, 'FOCUS', FONT_BODY, P.labelSize, muted);
    this.text('dmgLabel', P.labelX, P.rows.dmg, 'DMG', FONT_BODY, P.labelSize, muted);

    const S = STAGE_BAR;
    this.text(
      'stage',
      S.title.cx,
      S.title.y,
      '',
      FONT_DISPLAY,
      S.title.size,
      '#FFFFFF',
      '700',
      S.title.spacing,
    ).setOrigin(0.5, 0);
    this.text(
      'boss',
      S.subtitle.cx,
      S.subtitle.y,
      '',
      FONT_BODY,
      S.subtitle.size,
      muted,
      '400',
      S.subtitle.spacing,
    ).setOrigin(0.5, 0);

    const C = SCORE_PANEL;
    this.text(
      'scoreLabel',
      C.label.right,
      C.label.y,
      'SCORE',
      FONT_BODY,
      C.label.size,
      muted,
      '400',
      C.label.spacing,
    ).setOrigin(1, 0);
    this.text(
      'score',
      C.score.right,
      C.score.y,
      '',
      FONT_DISPLAY,
      C.score.size,
      '#FFFFFF',
      '900',
      C.score.spacing,
    ).setOrigin(1, 0);
    this.text('combo', C.combo.x, C.combo.y, '', FONT_DISPLAY, C.combo.size, color('yellow'), '700');
    this.lives = scene.add
      .image(C.lives[0], C.lives[1], 'hud_lives_icon')
      .setOrigin(0)
      .setDisplaySize(C.lives[2], C.lives[3])
      .setDepth(DEPTH + 1);

    const B = BOMB_PANEL;
    this.text(
      'bombLabel',
      B.label.x,
      B.label.y,
      'NOVA BOMB',
      FONT_BODY,
      B.label.size,
      muted,
      '400',
      B.label.spacing,
    );
    this.text('bombCount', B.count.x, B.count.y, '', FONT_DISPLAY, B.count.size, '#FFFFFF', '700');

    this.text('hint', HINT.cx, HINT.y, '', FONT_BODY, HINT.size, HINT.color, '400', HINT.spacing).setOrigin(
      0.5,
      0,
    );

    const U = POWERUP_PANEL;
    this.powerupObjs.push(
      this.text('puTag', U.badge.cx, U.badge.cy, '', FONT_DISPLAY, U.badge.size, '#FFFFFF', '900').setOrigin(
        0.5,
      ),
      this.text(
        'puName',
        U.name.x,
        U.name.y,
        '',
        FONT_DISPLAY,
        U.name.size,
        color('orange'),
        '700',
        U.name.spacing,
      ),
      this.text('puTime', U.time.x, U.time.y, '', FONT_DISPLAY, U.time.size, '#FFFFFF', '700'),
    );
  }

  private text(
    key: string,
    x: number,
    y: number,
    value: string,
    family: string,
    size: number,
    fill: string,
    weight = '400',
    spacing = 0,
  ): Phaser.GameObjects.Text {
    const t = this.scene.add
      .text(x, y, value, { fontFamily: family, fontSize: `${size}px`, fontStyle: weight, color: fill })
      .setLetterSpacing(spacing)
      .setDepth(DEPTH + 1);
    this.texts[key] = t;
    return t;
  }

  /** All HUD strings currently visible (Playwright checks them against reference/board-text/Gameplay.txt). */
  visibleTexts(): string[] {
    return Object.values(this.texts)
      .filter((t) => t.visible && t.text !== '')
      .map((t) => t.text);
  }

  update(s: HudState): void {
    this.state = s;
    this.texts.pilot!.setText(s.pilotLine);
    this.texts.stage!.setText(s.stageLine).setColor(s.stageColor);
    this.texts.boss!.setText(s.bossLine);
    this.texts.score!.setText(formatScore(s.score));
    this.texts.combo!.setText(`×${s.comboMult} COMBO`);
    this.texts.bombCount!.setText(`×${s.bombs}`);
    this.texts.hint!.setText(s.hint);
    this.lives
      .setVisible(s.lives > 0)
      .setCrop(0, 0, (this.lives.width * Math.min(s.lives, 3)) / 3, this.lives.height);
    this.syncBombStars(s.bombs);
    const pu = s.powerup;
    for (const o of this.powerupObjs) (o as Phaser.GameObjects.Text).setVisible(pu !== null);
    if (pu) {
      this.texts.puTag!.setText(pu.tag);
      this.texts.puName!.setText(pu.name);
      this.texts.puTime!.setText(`${String(Math.ceil(pu.left)).padStart(2, '0')}s`);
    }
    this.draw();
  }

  private syncBombStars(n: number): void {
    const B = BOMB_PANEL;
    while (this.bombStars.length < n) {
      const i = this.bombStars.length;
      this.bombStars.push(
        this.scene.add
          .image(B.starsX + i * B.starStep, B.starY, 'hud_bomb_star')
          .setOrigin(0)
          .setDisplaySize(B.starSize, B.starSize)
          .setDepth(DEPTH + 1),
      );
    }
    this.bombStars.forEach((img, i) => img.setVisible(i < n));
  }

  private panel(box: Box, border: { color: string; alpha: number }): void {
    const [x, y, w, h] = box;
    this.g.fillStyle(PANEL.fill, PANEL.fillAlpha).fillRect(x, y, w, h);
    this.g
      .lineStyle(PANEL.borderWidth, hex(color(border.color)), border.alpha)
      .strokeRect(x + 0.5, y + 0.5, w - 1, h - 1);
  }

  /** Filled rect snapped to whole pixels, as the browser lays out the board. */
  private rect(x: number, y: number, w: number, h: number, fill: number, alpha = 1): void {
    const x0 = Math.round(x);
    const y0 = Math.round(y);
    this.g.fillStyle(fill, alpha).fillRect(x0, y0, Math.round(x + w) - x0, Math.round(y + h) - y0);
  }

  private track(x: number, y: number, w: number, h: number): void {
    this.rect(x, y, w, h, TRACK.color, TRACK.alpha);
  }

  private draw(): void {
    const s = this.state;
    if (!s) return;
    const g = this.g.clear();

    const P = PILOT_PANEL;
    this.panel(P.box, P.border);
    const pips = (row: number, count: number, lit: number, fill: number) => {
      for (let i = 0; i < count; i++) {
        const x = P.pip.x0 + i * P.pip.step;
        if (i < lit) this.rect(x, row + P.pip.dy, P.pip.w, P.pip.h, fill);
        else this.track(x, row + P.pip.dy, P.pip.w, P.pip.h);
      }
    };
    // One pip per hull bar (board: 5 on Normal). Easy's 6th pip is a logged question.
    pips(P.rows.hull, s.hullMax, s.hull, hex(color('green')));
    this.track(P.focusBar.x, P.rows.focus + P.focusBar.dy, P.focusBar.w, P.focusBar.h);
    this.rect(
      P.focusBar.x,
      P.rows.focus + P.focusBar.dy,
      P.focusBar.w * Phaser.Math.Clamp(s.focus, 0, 1),
      P.focusBar.h,
      hex(color('cyan')),
    );
    // DamageBoost: "DMG: five pips under the Focus bar. Pips take the level color."
    pips(P.rows.dmg, P.pipCount, s.damageLevel, hex(damageLevelColor(s.damageLevel)));

    const S = STAGE_BAR;
    const [bx, by, bw, bh] = S.bar;
    this.track(bx, by, bw, bh);
    this.rect(bx, by, bw * Phaser.Math.Clamp(s.progress, 0, 1), bh, hex(s.stageColor));
    const [dx, dy, dw] = S.bossDot;
    const r = dw / 2;
    g.fillStyle(S.bossDotBorder.color, 1).fillCircle(dx + r, dy + r, r);
    g.fillStyle(hex(color('red')), 1).fillCircle(dx + r, dy + r, r - S.bossDotBorder.width);

    this.panel(SCORE_PANEL.box, SCORE_PANEL.border);
    this.panel(BOMB_PANEL.box, BOMB_PANEL.border);

    if (s.powerup) {
      const U = POWERUP_PANEL;
      this.panel(U.box, U.border);
      g.lineStyle(U.badge.borderWidth, hex(color('orange')), 1).strokeCircle(
        U.badge.cx,
        U.badge.cy,
        U.badge.r - 1,
      );
      const [ux, uy, uw, uh] = U.bar;
      this.track(ux, uy, uw, uh);
      this.rect(ux, uy, uw * (s.powerup.left / s.powerup.total), uh, hex(color('orange')));
    }
  }
}

export function damageLevelColor(level: number): string {
  const lv = powerups.damage_boost.levels.find((l) => l.level === level);
  if (!lv) throw new Error(`No damage level ${level}`);
  return lv.color;
}

/** Power-up HUD entry from powerups.json. */
export function powerupHud(id: string, left: number): HudState['powerup'] {
  const p = powerups.items.find((i) => i.id === id);
  if (!p?.duration_s) return null;
  return { tag: p.tag ?? '', name: p.name, left, total: p.duration_s };
}
