/**
 * The single place that reads data/*.json. Every game number comes through here.
 * Each file is assigned to a typed interface, so `tsc` fails if the JSON and the types drift apart.
 */
import balanceJson from '../../data/balance.json';
import jetsJson from '../../data/jets.json';
import stageThemesJson from '../../data/stage_themes.json';
import stagesJson from '../../data/stages.json';
import wavesJson from '../../data/waves.json';
import bossesJson from '../../data/bosses.json';
import difficultyJson from '../../data/difficulty.json';
import scoringJson from '../../data/scoring.json';
import themeJson from '../../data/theme.json';
import pilotsJson from '../../data/pilots.json';
import powerupsJson from '../../data/powerups.json';
import shopJson from '../../data/shop.json';
import settingsJson from '../../data/settings.json';
import creditsJson from '../../data/credits.json';
import profilesJson from '../../data/profiles.json';
import type {
  Balance,
  Boss,
  BossesFile,
  DifficultyFile,
  DifficultyLevel,
  EnemyClassBalance,
  EnemyClassId,
  JetBalance,
  JetInfo,
  JetsFile,
  Pilot,
  PilotsFile,
  PowerupItem,
  PowerupsFile,
  ScoringFile,
  SettingsFile,
  ShopItem,
  ShopFile,
  CreditsFile,
  ProfilesFile,
  Stage,
  StagesFile,
  StageTheme,
  StageThemesFile,
  StageWaves,
  ThemeFile,
  WaveEntry,
  WaveSpawn,
  WavesFile,
} from './types';

export * from './types';

export const balance: Balance = balanceJson;
export const jets: JetsFile = jetsJson;
export const stageThemes: StageThemesFile = stageThemesJson;
export const stages: StagesFile = stagesJson;
export const waves: WavesFile = wavesJson;
export const bosses: BossesFile = bossesJson;
export const difficulty: DifficultyFile = difficultyJson;
export const scoring: ScoringFile = scoringJson;
export const theme: ThemeFile = themeJson;
export const pilots: PilotsFile = pilotsJson;
export const powerups: PowerupsFile = powerupsJson;
export const shopItems: ShopItem[] = shopJson.items;
export const settings: SettingsFile = settingsJson;
export const shop: ShopFile = shopJson;
export const credits: CreditsFile = creditsJson;
export const profiles: ProfilesFile = profilesJson;

function must<T>(value: T | undefined, what: string): T {
  if (value === undefined) throw new Error(`Data missing: ${what}`);
  return value;
}

/**
 * Some decided numbers live only inside a sentence in the data (e.g. "min 3", "within 3 seconds").
 * Read them from that sentence so the number stays in data/, and fail loudly if the wording changes.
 * Logged in docs/09_questions_log.md (ask: give these their own numeric fields).
 */
export function numberFromText(text: string, pattern: RegExp, what: string): number {
  const m = pattern.exec(text);
  if (!m?.[1]) throw new Error(`Data text changed, cannot read ${what} from: "${text}"`);
  return Number(m[1]);
}

export const getJetBalance = (id: string): JetBalance => must(balance.jets[id], `balance.jets.${id}`);
export const getJetInfo = (id: string): JetInfo =>
  must(
    jets.jets.find((j) => j.id === id),
    `jets ${id}`,
  );
export const getStage = (n: number): Stage =>
  must(
    stages.stages.find((s) => s.stage === n),
    `stage ${n}`,
  );
export const getStageTheme = (ref: number): StageTheme => must(stageThemes.stage_themes[String(ref)], `theme ${ref}`);
export const getStageWaves = (n: number): StageWaves => must(waves.stages[String(n)], `waves ${n}`);
export const getBoss = (id: number): Boss =>
  must(
    bosses.bosses.find((b) => b.id === id),
    `boss ${id}`,
  );
export const getDifficulty = (id: string): DifficultyLevel =>
  must(
    difficulty.levels.find((d) => d.id === id),
    `difficulty ${id}`,
  );
export const getPilot = (id: string): Pilot =>
  must(
    pilots.pilots.find((p) => p.id === id),
    `pilot ${id}`,
  );
export const getPowerup = (id: string): PowerupItem =>
  must(
    powerups.items.find((p) => p.id === id),
    `powerup ${id}`,
  );
export const getEnemyClass = (cls: string): EnemyClassBalance =>
  must(balance.enemy_classes[cls as EnemyClassId], `enemy class ${cls}`);

export const isWaveSpawn = (w: WaveEntry): w is WaveSpawn => 'wave' in w;

/** balance.units: "A 'hit' on a board = 10 HP at Damage Lv1". */
export const hpPerHit = (): number => numberFromText(balance.units, /=\s*(\d+)\s*HP/, 'HP per hit');

/** balance.player.hull_start_by_difficulty: "... min 3". */
export const minStartHull = (): number =>
  numberFromText(balance.player.hull_start_by_difficulty, /min\s+(\d+)/, 'minimum start hull');

/** scoring.combo.rule: "Each kill within 3 seconds of the last raises the multiplier ...". */
export const comboWindowS = (): number => numberFromText(scoring.combo.rule, /within\s+(\d+)\s+seconds/, 'combo window');

/** waves._rules: "Spawn x lane: left=20%, center=50%, right=80% of 1280 px". */
export function laneX(lane: string): number {
  const pct = numberFromText(waves._rules, new RegExp(`${lane}=(\\d+)%`), `lane ${lane}`);
  return (pct / 100) * theme.canvas.width;
}

/** Shop Bomb Stock tier 1 says "Start with 2 bombs"; the base before any tier is one less (logged question). */
export function baseBombs(): number {
  const item = must(
    shopItems.find((s) => s.id === 'bomb_stock'),
    'shop bomb_stock',
  );
  const tier1 = must(item.tiers[0], 'bomb_stock tier 1');
  return numberFromText(tier1.effect, /Start with (\d+) bombs/, 'bomb stock tier 1') - 1;
}
