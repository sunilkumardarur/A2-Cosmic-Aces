/** Types written to match data/*.json. The loader assigns each JSON file to these, so tsc checks them. */

export type EnemyClassId = 'ENEMY' | 'ENEMY_FLIGHT' | 'HAZARD' | 'OBSTACLE';

export interface JetBalance {
  bullets_per_shot: number;
  shots_per_s: number;
  damage_per_bullet: number;
  move_px_s: number;
  hull_mod: number;
  start_shield_hits: number;
  hitbox_radius_px: number;
  base_dps: number;
}

export interface EnemyClassBalance {
  speed_px_s: number;
  fire_interval_s: number | null;
  bullet_speed_px_s: number | null;
}

export interface Balance {
  units: string;
  jets: Record<string, JetBalance>;
  player: {
    hull_start_by_difficulty: string;
    invulnerable_after_hit_s: number;
    bullet_speed_px_s: number;
    pickup_fall_px_s: number;
  };
  special: { base_fill_seconds: number; fill_seconds_by_shop_tier: Record<string, number> };
  enemy_classes: Record<EnemyClassId, EnemyClassBalance>;
  enemy_hp_scale_by_block: number[];
  enemy_bullet_speed_scale_by_block: number[];
}

export interface JetInfo {
  id: string;
  name: string;
  role: string;
  color: string;
  weapon: string;
  bullet: string;
  unlock: string;
}
export interface JetsFile {
  jets: JetInfo[];
}

export interface StageThemeItem {
  name: string;
  kind: string;
  hits_or_note?: string;
  text: string;
  class: string;
  hits: number | null;
  points: number;
  unbreakable: boolean;
}
export interface StageTheme {
  stage: number;
  name: string;
  difficulty_label?: string;
  color: string;
  description: string;
  items: StageThemeItem[];
}
export interface StageThemesFile {
  stage_themes: Record<string, StageTheme>;
}

export interface Stage {
  stage: number;
  block: number;
  boss_ids: number[];
  boss_version: string;
  first_clear_credits: { clear: number; stars_max: number; boss: number; total: number; star_credits: number[] };
  repeat_clear_credits: number;
  stage_unlocked_by: number | null;
  theme_ref: number;
  sector: number;
  enemy_hp_scale: number;
  enemy_bullet_speed_scale: number;
}
export interface StagesFile {
  stages: Stage[];
}

export interface WaveSpawn {
  wave: number;
  t_s: number;
  item_index: number;
  count: number;
  formation: string;
  lane: string;
}
export interface WaveEvent {
  event: string;
  t_s: number;
}
export type WaveEntry = WaveSpawn | WaveEvent;
export interface StageWaves {
  waves: WaveEntry[];
  boss_after_s: number;
  waves_count: number;
  wave_interval_s: number;
  coin_wave: number;
}
export interface WavesFile {
  _rules: string;
  stages: Record<string, StageWaves>;
}

export interface Boss {
  id: number;
  name: string;
  tier: number;
  hp_mk1: number;
  hp_mk2: number;
  phases: number;
}
export interface BossesFile {
  mk2_rules: { hp_mult: number; bullet_speed_mult: number };
  tier_hp: { T1: number[] };
  bosses: Boss[];
}

export interface DifficultyLevel {
  id: string;
  enemy_hp: number;
  bullet_speed: number;
  powerup_drops: number;
  score: number;
  continues: number;
  starting_hull: number;
  credits_first_clear: number;
}
export interface DifficultyFile {
  levels: DifficultyLevel[];
}

export interface ComboStep {
  mult: number;
  kills: number;
}
export interface ScoringFile {
  combo: { rule: string; steps: ComboStep[]; max: number };
}

export interface ThemeFile {
  canvas: { width: number; height: number };
  colors: Record<string, string>;
}

export interface Pilot {
  id: string;
  name: string;
  color: string;
}
export interface PilotsFile {
  pilots: Pilot[];
}

export interface PowerupItem {
  id: string;
  name: string;
  tag: string | null;
  type: string;
  duration_s?: number;
}
export interface DamageLevel {
  level: number;
  mult: number;
  color: string;
}
export interface PowerupsFile {
  items: PowerupItem[];
  damage_boost: { levels: DamageLevel[] };
}

export interface ShopTier {
  tier: number;
  price: number;
  effect: string;
}
export interface ShopItem {
  id: string;
  name: string;
  tiers: ShopTier[];
}

export interface SettingsFile {
  difficulty_default: string;
}

export interface ShopFile {
  total_cost_all: number;
  items: (ShopItem & { total: number })[];
}

export interface CreditsFile {
  block_multipliers: number[];
  repeat_clear: number;
  difficulty_first_clear_multiplier: Record<string, number>;
  all_100_stages_total: number;
  shop_max: number;
}

export interface ProfilesFile {
  max_profiles_per_device: number;
  save_slots_per_profile: string;
}
