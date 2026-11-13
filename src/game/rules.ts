/** Pure game rules. All numbers come from src/data (data/*.json). No Phaser here, so Vitest can test it. */
import {
  comboWindowS,
  getEnemyClass,
  hpPerHit,
  minStartHull,
  powerups,
  scoring,
  type DifficultyLevel,
  type JetBalance,
  type Stage,
  type StageThemeItem,
} from '../data';

/** enemy_hp = hits * HP-per-hit * stage enemy_hp_scale * difficulty enemy_hp (balance.json units + difficulty_applies_to). */
export function enemyMaxHp(item: StageThemeItem, stage: Stage, diff: DifficultyLevel): number {
  if (item.hits === null) return Number.POSITIVE_INFINITY; // unbreakable
  return item.hits * hpPerHit() * stage.enemy_hp_scale * diff.enemy_hp;
}

export function enemyBulletSpeed(item: StageThemeItem, stage: Stage, diff: DifficultyLevel): number | null {
  const base = getEnemyClass(item.class).bullet_speed_px_s;
  return base === null ? null : base * stage.enemy_bullet_speed_scale * diff.bullet_speed;
}

/** "difficulty.json starting_hull + jet hull_mod + shop Extra Hull Bar, min 3" (shop arrives in step 3). */
export function startHull(diff: DifficultyLevel, jet: JetBalance, shopExtraHull = 0): number {
  return Math.max(minStartHull(), diff.starting_hull + jet.hull_mod + shopExtraHull);
}

export const shotIntervalS = (jet: JetBalance): number => 1 / jet.shots_per_s;

export const firstDamageLevel = (): number => powerups.damage_boost.levels[0]!.level;
export const maxDamageLevel = (): number =>
  powerups.damage_boost.levels[powerups.damage_boost.levels.length - 1]!.level;

export function damageMult(level: number): number {
  const lv = powerups.damage_boost.levels.find((l) => l.level === level);
  if (!lv) throw new Error(`No damage level ${level}`);
  return lv.mult;
}

export const bulletDamage = (jet: JetBalance, level: number): number =>
  jet.damage_per_bullet * damageMult(level);

/** DamageBoost rule: "Taking a hull hit drops 1 level. It never goes below Level 1." */
export const damageLevelAfterHit = (level: number): number => Math.max(firstDamageLevel(), level - 1);

/** Combo multiplier for a chain of kills (scoring.json combo.steps). */
export function comboMultiplier(chainKills: number): number {
  let mult = scoring.combo.steps[0]!.mult;
  for (const step of scoring.combo.steps) if (chainKills >= step.kills) mult = step.mult;
  return Math.min(mult, scoring.combo.max);
}

/** Points * combo multiplier * difficulty score multiplier. */
export const scoreForKill = (points: number, comboMult: number, diff: DifficultyLevel): number =>
  Math.round(points * comboMult * diff.score);

/**
 * "Each kill within 3 seconds of the last raises the multiplier. Take a hit or wait 3 seconds
 * and it drops back to x1." Times in seconds.
 */
export class ComboTracker {
  chain = 0;
  private lastKillT = Number.NEGATIVE_INFINITY;

  kill(t: number): number {
    this.expire(t);
    this.chain += 1;
    this.lastKillT = t;
    return this.multiplier;
  }

  hit(): void {
    this.chain = 0;
  }

  expire(t: number): void {
    if (t - this.lastKillT > comboWindowS()) this.chain = 0;
  }

  get multiplier(): number {
    return comboMultiplier(this.chain);
  }
}

/** HUD score text: 7 digits, zero padded (Gameplay board "0012450"). */
export const formatScore = (score: number): string => String(Math.floor(score)).padStart(7, '0');
