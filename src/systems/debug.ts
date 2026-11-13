/**
 * ?debug URL flag (07b testing rule 4): sets stage, jet, god mode and fast-forward.
 * Off in production builds. Example: /?debug&stage=1&jet=nova_striker&god=1&ff=4
 * Extra for screen tests: pose=gameplay puts the HUD into the Gameplay board's sample state.
 */
import { balance, stages } from '../data';

export interface DebugOptions {
  enabled: boolean;
  stage: number;
  jet: string;
  god: boolean;
  /** Game-time multiplier. */
  ff: number;
  pose: 'gameplay' | null;
  /** Do not spawn enemies (screen tests). */
  noSpawn: boolean;
}

export const DEFAULTS = { stage: 1, jet: 'nova_striker' } as const;

/** Stages with content in this build step. */
export const BUILT_STAGES: readonly number[] = [1];
/** Jets with a rendered sprite in this build step. */
export const BUILT_JETS: readonly string[] = ['nova_striker'];

export function parseDebug(search: string, production: boolean): DebugOptions {
  const off: DebugOptions = { enabled: false, ...DEFAULTS, god: false, ff: 1, pose: null, noSpawn: false };
  const q = new URLSearchParams(search);
  if (production || !q.has('debug')) return off;

  const stageN = Number(q.get('stage') ?? DEFAULTS.stage);
  const stageOk = stages.stages.some((s) => s.stage === stageN) && BUILT_STAGES.includes(stageN);
  const jet = q.get('jet') ?? DEFAULTS.jet;
  const jetOk = jet in balance.jets && BUILT_JETS.includes(jet);
  const ff = Number(q.get('ff') ?? 1);
  return {
    enabled: true,
    stage: stageOk ? stageN : DEFAULTS.stage,
    jet: jetOk ? jet : DEFAULTS.jet,
    god: q.get('god') === '1',
    ff: Number.isFinite(ff) && ff > 0 ? ff : 1,
    pose: q.get('pose') === 'gameplay' ? 'gameplay' : null,
    noSpawn: q.get('spawn') === '0',
  };
}

/** Sample values printed on the Gameplay board (reference/board-text/Gameplay.txt + board CSS widths). */
export const GAMEPLAY_BOARD_POSE = {
  score: 12450,
  comboChain: 10, // ×4 COMBO (scoring.json: x4 at 10 kills)
  hull: 3,
  focus: 0.72,
  damageLevel: 3,
  progress: 0.58,
  powerup: 'spread_shot',
  powerupLeftS: 8,
  bombs: 2,
  lives: 3,
} as const;
