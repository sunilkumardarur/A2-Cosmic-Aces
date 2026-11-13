/** Data rules with numbers (07b testing rule 1). Read through the single loader in src/data. */
import { describe, expect, it } from 'vitest';
import {
  balance,
  bosses,
  credits,
  difficulty,
  getDifficulty,
  getStage,
  numberFromText,
  profiles,
  shop,
  stages,
} from '../../src/data';

describe('credits', () => {
  it('first clears of all 100 stages pay 25,300', () => {
    const total = stages.stages.reduce((a, s) => a + s.first_clear_credits.total, 0);
    expect(total).toBe(25300);
    expect(credits.all_100_stages_total).toBe(25300);
  });

  it('each stage pays clear + stars + boss by the block multiplier formula', () => {
    for (const s of stages.stages) {
      const m = credits.block_multipliers[Math.floor((s.stage - 1) / 10)]!;
      const c = s.first_clear_credits;
      expect(c.clear).toBe(Math.round(30 * m));
      expect(c.stars_max).toBe(Math.round(30 * m));
      expect(c.boss).toBe(Math.round(40 * m));
      expect(c.total).toBe(c.clear + c.stars_max + c.boss);
      expect(c.star_credits).toEqual([Math.round(10 * m), Math.round(20 * m), Math.round(30 * m)]);
    }
  });

  it('repeat clear pays +1 total on every stage', () => {
    expect(credits.repeat_clear).toBe(1);
    for (const s of stages.stages) expect(s.repeat_clear_credits).toBe(1);
  });

  it('difficulty first-clear multipliers match difficulty.json', () => {
    for (const d of difficulty.levels)
      expect(credits.difficulty_first_clear_multiplier[d.id]).toBe(d.credits_first_clear);
    expect(credits.difficulty_first_clear_multiplier).toEqual({ easy: 0.5, normal: 1.0, hard: 1.5 });
  });
});

describe('shop', () => {
  it('buying everything costs 15,500', () => {
    expect(shop.items.reduce((a, i) => a + i.total, 0)).toBe(15500);
    expect(shop.total_cost_all).toBe(15500);
    expect(credits.shop_max).toBe(15500);
    for (const i of shop.items) expect(i.tiers.reduce((a, t) => a + t.price, 0)).toBe(i.total);
  });
});

describe('bosses', () => {
  it('has 40 bosses numbered 1-10, 21-30, 41-50, 61-70', () => {
    const want = [1, 21, 41, 61].flatMap((a) => Array.from({ length: 10 }, (_, i) => a + i));
    expect(bosses.bosses.map((b) => b.id)).toEqual(want);
  });

  it('Mk II HP = Mk I HP x mk2 hp_mult (1.5)', () => {
    expect(bosses.mk2_rules.hp_mult).toBe(1.5);
    for (const b of bosses.bosses) expect(b.hp_mk2).toBe(b.hp_mk1 * bosses.mk2_rules.hp_mult);
  });

  it('tier 1 HP follows tier_hp T1 (Rockmaw 1,200)', () => {
    const t1 = bosses.bosses.filter((b) => b.tier === 1).map((b) => b.hp_mk1);
    expect(t1).toEqual(bosses.tier_hp.T1);
    expect(bosses.bosses[0]!.hp_mk1).toBe(1200);
  });
});

describe('stages', () => {
  it('stages 81-100 are pair fights of boss k and k+20', () => {
    for (const s of stages.stages.filter((x) => x.stage > 80)) {
      const k = s.stage <= 90 ? s.stage - 80 : 40 + s.stage - 90;
      expect(s.boss_ids).toEqual([k, k + 20]);
    }
  });

  it('stages +10 use the Mk II version', () => {
    for (const s of stages.stages.filter((x) => x.stage <= 80)) {
      const second = Math.floor((s.stage - 1) / 10) % 2 === 1;
      expect(s.boss_version).toBe(second ? 'mk2' : 'mk1');
    }
  });

  it('stage n unlocks from stage n-1; stage 1 is always open', () => {
    expect(getStage(1).stage_unlocked_by).toBeNull();
    for (const s of stages.stages.slice(1)) expect(s.stage_unlocked_by).toBe(s.stage - 1);
  });
});

describe('difficulty', () => {
  it('multipliers per level', () => {
    expect(getDifficulty('easy')).toMatchObject({
      enemy_hp: 0.7,
      bullet_speed: 0.8,
      score: 1.0,
      starting_hull: 6,
    });
    expect(getDifficulty('normal')).toMatchObject({
      enemy_hp: 1.0,
      bullet_speed: 1.0,
      score: 1.2,
      starting_hull: 5,
    });
    expect(getDifficulty('hard')).toMatchObject({
      enemy_hp: 1.4,
      bullet_speed: 1.25,
      score: 1.5,
      starting_hull: 4,
    });
  });
});

describe('profiles', () => {
  it('4 profiles per device, 3 slots + 1 autosave each', () => {
    expect(profiles.max_profiles_per_device).toBe(4);
    expect(numberFromText(profiles.save_slots_per_profile, /(\d+) slots/, 'slots')).toBe(3);
    expect(profiles.save_slots_per_profile).toContain('+ 1 autosave');
  });
});

describe('jets (balance.json)', () => {
  it('base_dps = bullets_per_shot x shots_per_s x damage_per_bullet', () => {
    for (const j of Object.values(balance.jets))
      expect(j.base_dps).toBeCloseTo(j.bullets_per_shot * j.shots_per_s * j.damage_per_bullet, 6);
  });

  it('Nova Striker numbers', () => {
    expect(balance.jets.nova_striker).toMatchObject({
      bullets_per_shot: 2,
      shots_per_s: 6.0,
      damage_per_bullet: 10,
      move_px_s: 420,
      hull_mod: 0,
      hitbox_radius_px: 14,
    });
  });
});
