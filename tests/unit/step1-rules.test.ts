/** Build step 1 rules: enemy HP, hull, damage, combo, score, spawner, debug flag. */
import { describe, expect, it } from 'vitest';
import {
  baseBombs,
  balance,
  comboWindowS,
  getDifficulty,
  getJetBalance,
  getStage,
  getStageTheme,
  hpPerHit,
  laneX,
  minStartHull,
} from '../../src/data';
import {
  ComboTracker,
  bulletDamage,
  comboMultiplier,
  damageLevelAfterHit,
  enemyBulletSpeed,
  enemyMaxHp,
  firstDamageLevel,
  formatScore,
  scoreForKill,
  shotIntervalS,
  startHull,
} from '../../src/game/rules';
import { formationOffsets, stepOneEnemy, stepOneWave } from '../../src/game/spawner';
import { parseDebug } from '../../src/systems/debug';

const stage1 = getStage(1);
const normal = getDifficulty('normal');
const nova = getJetBalance('nova_striker');

describe('numbers read from data sentences', () => {
  it('1 hit = 10 HP, min start hull 3, combo window 3 s', () => {
    expect(hpPerHit()).toBe(10);
    expect(minStartHull()).toBe(3);
    expect(comboWindowS()).toBe(3);
  });
  it('lanes are 20/50/80% of 1280', () => {
    expect([laneX('left'), laneX('center'), laneX('right')]).toEqual([256, 640, 1024]);
  });
  it('base bombs = Bomb Stock tier 1 minus one = 1', () => {
    expect(baseBombs()).toBe(1);
  });
});

describe('Scout Drone (stage 1)', () => {
  const drone = stepOneEnemy(stage1).item;
  it('is the stage 1 enemy for step 1', () => {
    expect(drone.name).toBe('SCOUT DRONE');
    expect(drone.class).toBe('ENEMY_FLIGHT');
    expect(drone.hits).toBe(2);
    expect(drone.points).toBe(100);
  });
  it('HP = 2 hits x 10 x stage scale x difficulty', () => {
    expect(enemyMaxHp(drone, stage1, normal)).toBe(20);
    expect(enemyMaxHp(drone, stage1, getDifficulty('easy'))).toBeCloseTo(14);
    expect(enemyMaxHp(drone, stage1, getDifficulty('hard'))).toBeCloseTo(28);
  });
  it('dies to one Nova Striker volley (2 bullets x 10)', () => {
    expect(enemyMaxHp(drone, stage1, normal)).toBe(
      nova.bullets_per_shot * bulletDamage(nova, firstDamageLevel()),
    );
  });
  it('shot speed = ENEMY_FLIGHT 280 x stage scale x difficulty', () => {
    expect(enemyBulletSpeed(drone, stage1, normal)).toBe(280);
    expect(enemyBulletSpeed(drone, stage1, getDifficulty('easy'))).toBeCloseTo(224);
  });
  it('a kill scores points x combo x difficulty score', () => {
    expect(scoreForKill(drone.points, 1, normal)).toBe(120);
    expect(scoreForKill(drone.points, 4, getDifficulty('hard'))).toBe(600);
  });
  it('unbreakable items have infinite HP', () => {
    const comet = getStageTheme(1).items.find((i) => i.name === 'FIRE COMET')!;
    expect(enemyMaxHp(comet, stage1, normal)).toBe(Number.POSITIVE_INFINITY);
  });
});

describe('player', () => {
  it('start hull = difficulty starting_hull + jet hull_mod, min 3', () => {
    expect(startHull(normal, nova)).toBe(5);
    expect(startHull(normal, getJetBalance('phantom_x'))).toBe(4);
    expect(startHull(getDifficulty('easy'), getJetBalance('titan_bulwark'))).toBe(7);
    expect(startHull(getDifficulty('hard'), getJetBalance('phantom_x'))).toBe(3);
    expect(startHull(getDifficulty('hard'), { ...nova, hull_mod: -5 })).toBe(3);
  });
  it('fires 6 shots per second', () => {
    expect(shotIntervalS(nova)).toBeCloseTo(1 / 6);
  });
  it('damage levels: +25% per level, a hit drops one, never below 1', () => {
    expect(bulletDamage(nova, 1)).toBe(10);
    expect(bulletDamage(nova, 3)).toBe(15);
    expect(bulletDamage(nova, 5)).toBe(20);
    expect(damageLevelAfterHit(3)).toBe(2);
    expect(damageLevelAfterHit(1)).toBe(1);
  });
  it('invulnerable 1.5 s after a hit', () => {
    expect(balance.player.invulnerable_after_hit_s).toBe(1.5);
  });
});

describe('combo', () => {
  it('steps x1, x2 at 5, x4 at 10, x6 at 20, x8 at 35', () => {
    expect([0, 4, 5, 9, 10, 19, 20, 34, 35, 99].map(comboMultiplier)).toEqual([1, 1, 2, 2, 4, 4, 6, 6, 8, 8]);
  });
  it('drops to x1 after 3 seconds without a kill, or on a hit', () => {
    const c = new ComboTracker();
    for (let i = 0; i < 10; i++) c.kill(i * 0.5);
    expect(c.multiplier).toBe(4);
    c.expire(4.5 + 2.9);
    expect(c.multiplier).toBe(4);
    c.expire(4.5 + 3.1);
    expect(c.multiplier).toBe(1);
    for (let i = 0; i < 5; i++) c.kill(10 + i);
    expect(c.multiplier).toBe(2);
    c.hit();
    expect(c.multiplier).toBe(1);
  });
});

describe('HUD', () => {
  it('score is 7 digits', () => {
    expect(formatScore(12450)).toBe('0012450');
    expect(formatScore(0)).toBe('0000000');
  });
});

describe('step 1 spawner', () => {
  it('uses the stage 1 Scout Drone waves, from 4 s, every 6 s', () => {
    const w = [0, 1, 2].map((n) => stepOneWave(stage1, n));
    expect(w.map((x) => x.t)).toEqual([4, 10, 16]);
    expect(w.map((x) => x.spawn.item_index)).toEqual([2, 2, 2]);
    expect(w.map((x) => x.spawn.wave)).toEqual([3, 7, 3]);
  });
  it('V of 3 matches the Gameplay board drones (100 px apart, middle 30 px higher)', () => {
    expect(formationOffsets('v', 3, 100, 30)).toEqual([
      { x: -100, y: 30 },
      { x: 0, y: 0 },
      { x: 100, y: 30 },
    ]);
  });
  it('every formation makes count members', () => {
    for (const f of ['line', 'v', 'column', 'zigzag', 'pair'])
      expect(formationOffsets(f, 4, 100, 30)).toHaveLength(4);
  });
});

describe('?debug flag', () => {
  it('is off in production and without the flag', () => {
    expect(parseDebug('?debug&god=1', true).enabled).toBe(false);
    expect(parseDebug('', false)).toMatchObject({
      enabled: false,
      god: false,
      ff: 1,
      stage: 1,
      jet: 'nova_striker',
    });
  });
  it('reads stage, jet, god and fast-forward', () => {
    expect(parseDebug('?debug&stage=1&jet=nova_striker&god=1&ff=4', false)).toMatchObject({
      enabled: true,
      stage: 1,
      jet: 'nova_striker',
      god: true,
      ff: 4,
    });
  });
  it('falls back for stages and jets not built yet, and bad ff', () => {
    expect(parseDebug('?debug&stage=41&jet=phantom_x&ff=-2', false)).toMatchObject({
      stage: 1,
      jet: 'nova_striker',
      ff: 1,
    });
    expect(parseDebug('?debug&stage=999&jet=nope', false)).toMatchObject({ stage: 1, jet: 'nova_striker' });
  });
});
