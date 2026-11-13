/**
 * Step 1 spawner (temporary until step 2 adds the full stage wave script).
 * Uses only the stage's waves (waves.json) whose item is the one enemy type of step 1, in order,
 * starting at the first wave time and repeating every wave_interval_s. Logged in 09_questions_log.md.
 */
import {
  getStageTheme,
  getStageWaves,
  isWaveSpawn,
  type Stage,
  type StageThemeItem,
  type WaveSpawn,
} from '../data';

/** The one enemy type of step 1: the stage theme's first item of class ENEMY_FLIGHT or ENEMY (stage 1: SCOUT DRONE). */
export function stepOneEnemy(stage: Stage): { item: StageThemeItem; index: number } {
  const theme = getStageTheme(stage.theme_ref);
  const index = theme.items.findIndex((i) => i.class === 'ENEMY_FLIGHT' || i.class === 'ENEMY');
  if (index < 0) throw new Error(`Stage ${stage.stage} has no enemy item`);
  return { item: theme.items[index]!, index };
}

export interface ScheduledWave {
  t: number;
  spawn: WaveSpawn;
}

/** Wave n (0-based) of the step 1 loop. */
export function stepOneWave(stage: Stage, n: number): ScheduledWave {
  const w = getStageWaves(stage.stage);
  const { index } = stepOneEnemy(stage);
  const spawns = w.waves.filter(isWaveSpawn);
  const mine = spawns.filter((s) => s.item_index === index);
  if (mine.length === 0) throw new Error(`No waves for item ${index} in stage ${stage.stage}`);
  const first = spawns[0]!.t_s;
  return { t: first + n * w.wave_interval_s, spawn: mine[n % mine.length]! };
}

/**
 * Offsets of each member from the wave anchor, per waves.json _rules:
 * line = row of count, v = V shape, column = stacked, zigzag = alternating x, pair = 2 side by side.
 * Spacing comes from the Gameplay board drone group (dx 100, dy 30). Column/zigzag stack by dx.
 */
export function formationOffsets(
  formation: string,
  count: number,
  dx: number,
  dy: number,
): { x: number; y: number }[] {
  const out: { x: number; y: number }[] = [];
  const mid = (count - 1) / 2;
  for (let i = 0; i < count; i++) {
    switch (formation) {
      case 'v':
        out.push({ x: (i - mid) * dx, y: Math.abs(i - mid) * dy });
        break;
      case 'column':
        out.push({ x: 0, y: -i * dx });
        break;
      case 'zigzag':
        out.push({ x: (i % 2 === 0 ? -0.5 : 0.5) * dx, y: -i * dx });
        break;
      case 'pair':
        out.push({ x: ((i % 2) - 0.5) * dx, y: -Math.floor(i / 2) * dx });
        break;
      default: // line
        out.push({ x: (i - mid) * dx, y: 0 });
    }
  }
  return out;
}
