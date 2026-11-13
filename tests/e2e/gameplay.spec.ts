/**
 * Build step 1 screen + play tests (07b testing rules 2 and 4).
 * Uses the ?debug hooks (window.__A2__), available only in dev builds.
 */
import { expect, test, type Page } from '@playwright/test';
import { readFileSync } from 'node:fs';

interface A2State {
  t: number;
  x: number;
  y: number;
  hull: number;
  hullMax: number;
  alive: boolean;
  score: number;
  kills: number;
  hitsTaken: number;
  damageLevel: number;
  bullets: number;
  enemies: { x: number; y: number; hp: number; name: string }[];
  stage: number;
  jet: string;
  god: boolean;
  ff: number;
}

const BOARD_TEXT = readFileSync('reference/board-text/Gameplay.txt', 'utf8')
  .split(/\r?\n/)
  .map((l) => l.trim())
  .filter(Boolean);

let consoleErrors: string[] = [];

test.beforeEach(async ({ page }) => {
  consoleErrors = [];
  page.on('console', (m) => {
    if (m.type() === 'error') consoleErrors.push(m.text());
  });
  page.on('pageerror', (e) => consoleErrors.push(e.message));
});

test.afterEach(() => {
  expect(consoleErrors, 'no console errors').toEqual([]);
});

async function open(page: Page, query: string): Promise<void> {
  await page.goto(`/${query}`);
  await page.waitForFunction(() => Boolean((window as unknown as { __A2__?: unknown }).__A2__), null, {
    timeout: 15_000,
  });
}
const state = (page: Page): Promise<A2State> =>
  page.evaluate(() => (window as unknown as { __A2__: { state(): A2State } }).__A2__.state());
const call = (page: Page, fn: string, ...args: number[]): Promise<void> =>
  page.evaluate(
    ([f, a]) => {
      const api = (window as unknown as { __A2__: Record<string, (...x: number[]) => void> }).__A2__;
      api[f as string]!(...(a as number[]));
    },
    [fn, args] as const,
  );

test('canvas is 1280x720 and scales to fit the window', async ({ page }) => {
  await open(page, '?debug&spawn=0');
  const box = await page.locator('canvas').boundingBox();
  expect(box).toMatchObject({ width: 1280, height: 720 });
  expect(await page.locator('canvas').evaluate((c: HTMLCanvasElement) => [c.width, c.height])).toEqual([
    1280, 720,
  ]);

  await page.setViewportSize({ width: 1000, height: 800 });
  await expect.poll(async () => (await page.locator('canvas').boundingBox())?.width).toBeCloseTo(1000, 0);
  const small = (await page.locator('canvas').boundingBox())!;
  expect(small.height).toBeCloseTo(562.5, 0);
});

test('Nova Striker moves with arrows and with WASD', async ({ page }) => {
  await open(page, '?debug&spawn=0');
  const s0 = await state(page);
  expect(s0.jet).toBe('nova_striker');

  await page.keyboard.down('ArrowLeft');
  await page.waitForTimeout(400);
  await page.keyboard.up('ArrowLeft');
  const s1 = await state(page);
  expect(s1.x).toBeLessThan(s0.x - 50);
  // speed = balance.json nova_striker move_px_s (420), within frame timing slack
  expect((s0.x - s1.x) / (s1.t - s0.t)).toBeLessThanOrEqual(421);

  await page.keyboard.down('KeyW');
  await page.waitForTimeout(300);
  await page.keyboard.up('KeyW');
  const s2 = await state(page);
  expect(s2.y).toBeLessThan(s1.y - 40);
  expect(s2.x).toBeCloseTo(s1.x, 0);
});

test('firing is automatic', async ({ page }) => {
  await open(page, '?debug&spawn=0');
  await page.waitForTimeout(300);
  expect((await state(page)).bullets).toBeGreaterThan(0);
});

test('a Scout Drone is hit, dies and scores 100 x 1.2 (Normal)', async ({ page }) => {
  await open(page, '?debug&spawn=0');
  const s0 = await state(page);
  await call(page, 'spawnEnemyAt', s0.x, 120);
  await expect.poll(async () => (await state(page)).kills, { timeout: 5000 }).toBe(1);
  const s1 = await state(page);
  expect(s1.enemies).toHaveLength(0);
  expect(s1.score).toBe(120);
});

test('Scout Drone waves spawn from the stage 1 wave times', async ({ page }) => {
  await open(page, '?debug&ff=4&god=1');
  await expect
    .poll(async () => (await state(page)).enemies.length + (await state(page)).kills, { timeout: 5000 })
    .toBeGreaterThan(0);
  const s = await state(page);
  expect(s.t).toBeGreaterThanOrEqual(4);
  for (const e of s.enemies) expect(e.name).toBe('SCOUT DRONE');
});

test('the player takes hits (1.5 s invulnerable after each) and dies at 0 hull', async ({ page }) => {
  await open(page, '?debug&spawn=0&ff=3');
  const s0 = await state(page);
  expect(s0.hull).toBe(5);

  // two shots in a row: the second lands inside the invulnerable time
  await call(page, 'fireShotAt', s0.x, s0.y - 40);
  await call(page, 'fireShotAt', s0.x, s0.y - 70);
  await expect.poll(async () => (await state(page)).hitsTaken).toBe(1);
  await page.waitForTimeout(300);
  expect((await state(page)).hull).toBe(4);

  for (let hull = 3; hull >= 0; hull--) {
    await page.waitForTimeout(700); // > 1.5 s of game time at ff=3
    const s = await state(page);
    await call(page, 'fireShotAt', s.x, s.y - 40);
    await expect.poll(async () => (await state(page)).hull).toBe(hull);
  }
  const dead = await state(page);
  expect(dead.alive).toBe(false);
  expect(dead.hull).toBe(0);
});

test('god mode ignores hits', async ({ page }) => {
  await open(page, '?debug&spawn=0&god=1');
  const s0 = await state(page);
  await call(page, 'fireShotAt', s0.x, s0.y - 40);
  await page.waitForTimeout(500);
  const s1 = await state(page);
  expect(s1.god).toBe(true);
  expect(s1.hull).toBe(5);
  expect(s1.alive).toBe(true);
});

test('HUD text matches reference/board-text/Gameplay.txt exactly', async ({ page }) => {
  await open(page, '?debug&pose=gameplay&spawn=0');
  const texts = await page.evaluate(() =>
    (window as unknown as { __A2__: { hudTexts(): string[] } }).__A2__.hudTexts(),
  );
  for (const t of texts) expect(BOARD_TEXT, `"${t}" is board text`).toContain(t);
  for (const line of BOARD_TEXT.filter((l) => l !== 'S'))
    expect(texts, `board line "${line}" is on screen`).toContain(line);
});

/**
 * Fraction of pixels in a region with no board pixel within `shift` px whose colour is within `tol`
 * on every channel (tolerates sub-pixel placement and anti-aliasing).
 */
async function regionDiff(
  page: Page,
  actualPng: Buffer,
  boardPng: Buffer,
  regions: Record<string, [number, number, number, number]>,
  tol: number,
  shift: number,
): Promise<Record<string, number>> {
  return page.evaluate(
    async ({ a, b, regions, tol, shift }) => {
      const load = async (src: string) => {
        const img = new Image();
        img.src = src;
        await img.decode();
        const c = document.createElement('canvas');
        c.width = 1280;
        c.height = 720;
        const ctx = c.getContext('2d')!;
        ctx.drawImage(img, 0, 0, 1280, 720);
        return ctx;
      };
      const [ca, cb] = await Promise.all([load(a), load(b)]);
      const out: Record<string, number> = {};
      const close = (a: Uint8ClampedArray, i: number, b: Uint8ClampedArray, j: number) =>
        Math.abs(a[i]! - b[j]!) <= tol &&
        Math.abs(a[i + 1]! - b[j + 1]!) <= tol &&
        Math.abs(a[i + 2]! - b[j + 2]!) <= tol;
      for (const [name, [x, y, w, h]] of Object.entries(regions)) {
        const da = ca.getImageData(x, y, w, h).data;
        // board region with a margin, so a pixel may match the board up to `shift` px away
        const bw = w + 2 * shift;
        const bh = h + 2 * shift;
        const db = cb.getImageData(x - shift, y - shift, bw, bh).data;
        let bad = 0;
        for (let py = 0; py < h; py++) {
          for (let px = 0; px < w; px++) {
            const i = (py * w + px) * 4;
            let ok = false;
            for (let oy = -shift; oy <= shift && !ok; oy++)
              for (let ox = -shift; ox <= shift && !ok; ox++)
                ok = close(da, i, db, ((py + shift + oy) * bw + (px + shift + ox)) * 4);
            if (!ok) bad++;
          }
        }
        out[name] = bad / (w * h);
      }
      return out;
    },
    {
      a: `data:image/png;base64,${actualPng.toString('base64')}`,
      b: `data:image/png;base64,${boardPng.toString('base64')}`,
      regions,
      tol,
      shift,
    },
  );
}

test('HUD matches the Gameplay board screenshot (pose with board sample values)', async ({ page }) => {
  await open(page, '?debug&pose=gameplay&spawn=0');
  await page.waitForTimeout(500);
  const shot = await page.locator('canvas').screenshot();
  const board = readFileSync('reference/screens/Gameplay.png');
  // Non-text HUD parts, boxes from the board markup (src/ui/gameplayLayout.ts).
  // Text is not pixel-compared: reference/screens/Gameplay.png was captured with a fallback font instead of
  // Orbitron / Exo 2 (logged in docs/09_questions_log.md). Text is checked exactly by the board-text test.
  const regions: Record<string, [number, number, number, number]> = {
    portrait: [35, 41, 52, 53],
    hullPips: [146, 55, 142, 9],
    focusBar: [146, 74, 142, 9],
    dmgPips: [146, 93, 142, 9],
    stageProgress: [440, 45, 384, 6],
    bossDot: [826, 39, 22, 22],
    lives: [1175, 88, 66, 20],
    bombStars: [1157, 667, 54, 22],
    powerupBar: [91, 675, 140, 7],
  };
  // Shift 4 px: with the PNG's fallback font the pilot panel rows sit up to 4 px higher than the board CSS
  // places them with Orbitron / Exo 2 (DMG row: 90 vs 94).
  const diff = await regionDiff(page, shot, board, regions, 48, 4);
  console.log('HUD pixel mismatch by region:', diff);
  // Small tolerance for anti-aliasing and the background showing through translucent tracks.
  for (const [name, frac] of Object.entries(diff)) expect(frac, name).toBeLessThan(0.05);
});
