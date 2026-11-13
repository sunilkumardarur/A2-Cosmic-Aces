/**
 * Gameplay board layout, copied from reference/board-source/Gameplay.dc.html.
 * Boxes are [x, y, width, height] in canvas px, measured from the board markup rendered in Chrome
 * with the board fonts. This is board geometry and CSS, not tuning; tuning lives in data/*.json.
 */
export type Box = readonly [number, number, number, number];

export const FONT_DISPLAY = 'Orbitron';
export const FONT_BODY = '"Exo 2"';

/** Panel look shared by the HUD boxes: background rgba(4,5,12,.72), 1px border. */
export const PANEL = { fill: 0x04050c, fillAlpha: 0.72, borderWidth: 1 } as const;
/** Empty pip/bar track: rgba(255,255,255,.15). */
export const TRACK = { color: 0xffffff, alpha: 0.15 } as const;

export const PILOT_PANEL = {
  box: [24, 20, 297.1, 95] as Box,
  border: { color: 'cyan', alpha: 0.35 },
  portrait: [35, 41.5, 52, 52] as Box,
  title: { x: 99, y: 31, size: 13, spacing: 2 },
  labelX: 99,
  labelSize: 11,
  rows: { hull: 53, focus: 72, dmg: 91 },
  pip: { x0: 146, step: 29, w: 26, h: 8, dy: 2.5 },
  focusBar: { x: 146, w: 142, h: 8, dy: 2.5 },
  pipCount: 5,
} as const;

export const STAGE_BAR = {
  title: { cx: 640, y: 20, size: 14, spacing: 4 },
  bar: [440, 45, 400, 6] as Box,
  bossDot: [826, 39, 22, 22] as Box,
  bossDotBorder: { width: 2, color: 0x04050c },
  subtitle: { cx: 640, y: 59, size: 11, spacing: 2 },
} as const;

export const SCORE_PANEL = {
  box: [1074.3, 20, 181.7, 99] as Box,
  border: { color: 'pink', alpha: 0.35 },
  label: { right: 1241, y: 31, size: 11, spacing: 3 },
  score: { right: 1241, y: 50, size: 26, spacing: 2 },
  combo: { x: 1089.3, y: 90, size: 13 },
  lives: [1175, 88, 66, 20] as Box,
} as const;

export const POWERUP_PANEL = {
  box: [24, 638, 271.7, 62] as Box,
  border: { color: 'orange', alpha: 0.45 },
  badge: { cx: 59, cy: 669, r: 19, borderWidth: 2, size: 16 },
  name: { x: 91, y: 656.5, size: 12, spacing: 2 },
  bar: [91, 675.5, 140, 6] as Box,
  time: { x: 243, y: 659, size: 16 },
} as const;

export const BOMB_PANEL = {
  box: [1053.7, 656, 202.3, 44] as Box,
  border: { color: 'pink', alpha: 0.45 },
  label: { x: 1068.7, y: 671.5, size: 11, spacing: 2 },
  starsX: 1157.7,
  starStep: 32,
  starY: 667,
  starSize: 22,
  count: { x: 1221.7, y: 669.5, size: 14 },
} as const;

export const HINT = { cx: 640, y: 676, size: 12, spacing: 2, color: '#8A95B3' } as const;

/** Gameplay board play-field geometry. */
export const PLAY = {
  /** Jet drawn at left 590, top 470, 100 x 120: centre (640, 530). */
  jetStart: { x: 640, y: 530 },
  /** Twin pulses at x 616 and 660 (4 px wide): 44 px apart, centred on the jet. */
  bulletSpacing: 44,
  /** Pulses start at the jet nose (top 470 => 60 px above centre). */
  muzzleDy: -60,
  /** Three Scout Drones at left 540/640/740, tops 120/90/120: 100 px apart, middle one 30 px higher. */
  formationSpacingX: 100,
  formationStepY: 30,
  /** Enemy shots are 10 px dots on the Gameplay board. */
  enemyShotPx: 10,
  /** art/boards/Effects_05_red-orb.svg: core circle r 9 in a 50-wide viewBox. */
  redOrbCoreFraction: 18 / 50,
} as const;

/** Effects board: "Each explosion plays 6 frames in 0.4 s". */
export const EXPLOSION_S = 0.4;
