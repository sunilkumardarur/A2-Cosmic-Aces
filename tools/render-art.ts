/**
 * Renders the supplied art to PNG sprites at 2x for the engine.
 *
 * Sources (read only, never edited):
 *  - art/boards/*.svg           supplied role=img art
 *  - reference/board-source/*   exact markup of decorative (aria-hidden) art the boards draw inline,
 *                               used only where art/ has no file (approved by the owner, see 09_questions_log.md)
 *
 * Output: public/assets/sprites/*.png, public/assets/bg/*.png and public/assets/manifest.json
 * Run: npm run art
 */
import { chromium } from '@playwright/test';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const OUT = join(ROOT, 'public', 'assets');
const SCALE = 2; // TechPlan board: "SVG shapes in these boards become sprite sheets (PNG) at 2× size."

type Source =
  { kind: 'art'; file: string } | { kind: 'board'; board: string; contains: string; nth?: number };

interface SpriteSpec {
  key: string;
  source: Source;
  /** Drop the preview background the art sheet draws behind the art (Effects board swatches). */
  stripBackground?: boolean;
  note: string;
}

const SPRITES: SpriteSpec[] = [
  {
    key: 'jet_nova_striker',
    source: { kind: 'art', file: 'Coop_01_ayan-s-nova-striker-flying.svg' },
    note: 'Nova Striker in flight (same markup as the Gameplay board jet)',
  },
  {
    key: 'bullet_nova_striker',
    source: { kind: 'board', board: 'Gameplay', contains: 'width: 4px; height: 40px; background: #2DE2FF' },
    note: 'Twin cyan pulse, one bullet, Gameplay board',
  },
  {
    key: 'enemy_scout_drone',
    source: { kind: 'board', board: 'Gameplay', contains: 'stroke="#FF4D5E" stroke-width="2.5"' },
    note: 'Scout Drone as drawn on the Gameplay board',
  },
  {
    key: 'enemy_bullet_red_orb',
    source: { kind: 'art', file: 'Effects_05_red-orb.svg' },
    stripBackground: true,
    note: 'Effects board: enemy bullet "Red orb"',
  },
  {
    key: 'fx_explosion_small',
    source: { kind: 'art', file: 'Effects_09_small-explosion.svg' },
    stripBackground: true,
    note: 'Effects board: explosion Small',
  },
  {
    key: 'fx_explosion_large',
    source: { kind: 'art', file: 'Effects_11_large-explosion-with-ring.svg' },
    stripBackground: true,
    note: 'Effects board: explosion Large',
  },
  {
    key: 'fx_hit_flash',
    source: { kind: 'art', file: 'Effects_12_hit-flash-on-a-jet.svg' },
    stripBackground: true,
    note: 'Effects board: Hit flash',
  },
  {
    key: 'hud_pilot_ayan',
    source: { kind: 'art', file: 'Gameplay_01_ayan.svg' },
    note: 'Gameplay board HUD portrait',
  },
  {
    key: 'hud_lives_icon',
    source: { kind: 'art', file: 'Gameplay_02_3-lives.svg' },
    note: 'Gameplay board HUD "3 lives" icon row',
  },
  {
    key: 'hud_bomb_star',
    source: { kind: 'board', board: 'Gameplay', contains: 'viewBox="0 0 24 24"' },
    note: 'Gameplay board HUD Nova Bomb star',
  },
  {
    key: 'logo_favicon',
    source: { kind: 'art', file: 'Logo_05_favicon-at-32-pixels.svg' },
    note: 'Logo board: favicon at 32 pixels (browser tab icon)',
  },
];

const read = (p: string): string => readFileSync(join(ROOT, p), 'utf8');
const boardHtml = (board: string): string => read(`reference/board-source/${board}.dc.html`);

/** Cut the element (svg or leaf div) whose markup contains `needle`. */
function cutElement(html: string, needle: string, nth = 0): string {
  let from = 0;
  for (let i = 0; ; i++) {
    const at = html.indexOf(needle, from);
    if (at < 0) throw new Error(`Not found in board: ${needle} (#${nth})`);
    const svgStart = html.lastIndexOf('<svg', at);
    const divStart = html.lastIndexOf('<div', at);
    const start = Math.max(svgStart, divStart);
    const tag = start === svgStart ? 'svg' : 'div';
    const close = `</${tag}>`;
    const end = html.indexOf(close, at) + close.length;
    if (i === nth) return html.slice(start, end);
    from = end;
  }
}

/** Keep the look, drop the board placement (position/left/top...). Optionally drop the swatch background. */
function cleanStyle(markup: string, stripBackground: boolean): string {
  return markup.replace(
    /^<(svg|div)([^>]*?)style="([^"]*)"/,
    (_m, tag: string, attrs: string, style: string) => {
      const kept = style
        .split(';')
        .map((s) => s.trim())
        .filter(Boolean)
        .filter((s) => !/^(position|left|top|right|bottom|flex)\s*:/.test(s))
        .filter((s) => !(stripBackground && /^background\s*:/.test(s)));
      return `<${tag}${attrs}style="${kept.join('; ')}; display: block"`;
    },
  );
}

function px(style: string, prop: string): number {
  const m = new RegExp(`(?:^|;|"|\\s)${prop}:\\s*([\\d.]+)px`).exec(style);
  if (!m) throw new Error(`No ${prop} in style: ${style}`);
  return Number(m[1]);
}

/** Room for glow so it is not clipped: the blur radius of drop-shadow / box-shadow. */
function glowPad(style: string): number {
  const m = /(?:drop-shadow\(0 0 |box-shadow:\s*0 0 )([\d.]+)px/.exec(style);
  return m ? Math.ceil(Number(m[1])) : 0;
}

function spriteMarkup(spec: SpriteSpec): string {
  const raw =
    spec.source.kind === 'art'
      ? read(`art/boards/${spec.source.file}`)
      : cutElement(boardHtml(spec.source.board), spec.source.contains, spec.source.nth);
  return cleanStyle(raw.trim(), spec.stripBackground ?? false);
}

/** Expand the board template (<sc-for> + renderVals) exactly as the board does. */
function expandBoard(html: string): string {
  const script = /<script type="text\/x-dc"[^>]*>([\s\S]*?)<\/script>/.exec(html)?.[1];
  if (!script) throw new Error('board script missing');
  const Component = new Function('DCLogic', `${script}; return Component;`)(Object) as new () => {
    renderVals(): Record<string, Record<string, string | number>[]>;
  };
  const vals = new Component().renderVals();
  return html.replace(
    /<sc-for list="\{\{(\w+)\}\}" as="(\w+)"[^>]*>([\s\S]*?)<\/sc-for>/g,
    (_m, list: string, as: string, inner: string) =>
      (vals[list] ?? [])
        .map((item) =>
          inner.replace(new RegExp(`\\{\\{${as}\\.(\\w+)\\}\\}`, 'g'), (_x, k: string) => String(item[k])),
        )
        .join(''),
  );
}

/**
 * Stage 1 background: Gameplay board backdrop layers (far stars, Ember nebula, planet, speed streaks),
 * with the Stage01 board's Ember Belt tint and streak layer on top. Gameplay objects and HUD are not included.
 */
function stage1Background(): { html: string; width: number; height: number } {
  const gp = expandBoard(boardHtml('Gameplay'));
  const rootStart = gp.indexOf('<div style="width: 1280px; height: 720px');
  const rootTagEnd = gp.indexOf('>', rootStart) + 1;
  const rootTag = gp.slice(rootStart, rootTagEnd);
  const layers = gp.slice(rootTagEnd, gp.indexOf('<svg', rootTagEnd));

  const st = boardHtml('Stage01');
  const tint = cutElement(st, 'radial-gradient(ellipse at 20% 0%');
  const streaks = cutElement(st, 'viewBox="0 0 1280 720"');

  const width = px(rootTag, 'width');
  const height = px(rootTag, 'height');
  return { html: `${rootTag}${layers}${tint}${streaks}</div>`, width, height };
}

async function main(): Promise<void> {
  mkdirSync(join(OUT, 'sprites'), { recursive: true });
  mkdirSync(join(OUT, 'bg'), { recursive: true });
  // Installed Google Chrome: Windows Application Control blocks Playwright's unsigned Chromium build.
  const browser = await chromium.launch({ channel: 'chrome' });
  const page = await browser.newPage({ deviceScaleFactor: SCALE });
  const manifest: {
    scale: number;
    sprites: Record<string, { file: string; width: number; height: number; pad: number; note: string }>;
    backgrounds: Record<string, { file: string; width: number; height: number }>;
  } = { scale: SCALE, sprites: {}, backgrounds: {} };

  for (const spec of SPRITES) {
    const markup = spriteMarkup(spec);
    const style = /style="([^"]*)"/.exec(markup)?.[1] ?? '';
    const width = px(style, 'width');
    const height = px(style, 'height');
    const pad = glowPad(style);
    await page.setContent(
      `<html><body style="margin:0;background:transparent"><div id="c" style="display:inline-block;padding:${pad}px">${markup}</div></body></html>`,
    );
    const file = `sprites/${spec.key}.png`;
    await page.locator('#c').screenshot({ path: join(OUT, file), omitBackground: true });
    manifest.sprites[spec.key] = { file, width, height, pad, note: spec.note };
    console.log(`sprite ${spec.key} ${width}x${height} pad ${pad}`);
  }

  const bg = stage1Background();
  await page.setViewportSize({ width: bg.width, height: bg.height });
  await page.setContent(`<html><body style="margin:0">${bg.html}</body></html>`);
  const bgFile = 'bg/stage_theme_1.png';
  await page.screenshot({ path: join(OUT, bgFile) });
  manifest.backgrounds['stage_theme_1'] = { file: bgFile, width: bg.width, height: bg.height };
  console.log(`background stage_theme_1 ${bg.width}x${bg.height}`);

  await browser.close();
  writeFileSync(join(OUT, 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');
}

await main();
