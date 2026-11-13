/** Board text, copied exactly from reference/board-text/Gameplay.txt. */
export const GAMEPLAY_TEXT = {
  hint: 'ARROWS / WASD MOVE · FIRING IS AUTOMATIC · SHIFT SPECIAL · B BOMB · ESC PAUSE',
  stage: (n: number, themeName: string) => `STAGE ${n} · ${themeName}`,
  bossAhead: (bossName: string) => `BOSS AHEAD · ${bossName.toUpperCase()}`,
  pilot: (pilotName: string, jetName: string) => `${pilotName} · ${jetName}`,
} as const;
