/** Game config: canvas 1280 x 720 (theme.json), scales to fit. Fonts Orbitron + Exo 2 hosted locally. */
import Phaser from 'phaser';
import '@fontsource/orbitron/500.css';
import '@fontsource/orbitron/700.css';
import '@fontsource/orbitron/900.css';
import '@fontsource/exo-2/400.css';
import '@fontsource/exo-2/500.css';
import '@fontsource/exo-2/600.css';
import '@fontsource/exo-2/700.css';
import { theme } from './data';
import { setManifest, type AssetManifest } from './game/sprites';
import { parseDebug } from './systems/debug';
import { BootScene } from './scenes/BootScene';
import { GameplayScene } from './scenes/GameplayScene';

async function start(): Promise<void> {
  document.body.style.background = theme.colors.background!;
  const fontsUsed = ['500 16px Orbitron', '700 16px Orbitron', '900 16px Orbitron', '400 16px "Exo 2"'];
  await Promise.all(fontsUsed.map((f) => document.fonts.load(f)));

  const manifest = (await (await fetch('assets/manifest.json')).json()) as AssetManifest;
  setManifest(manifest);
  const debug = parseDebug(window.location.search, import.meta.env.PROD);

  const game = new Phaser.Game({
    type: Phaser.AUTO,
    parent: 'game',
    width: theme.canvas.width,
    height: theme.canvas.height,
    backgroundColor: theme.colors.background,
    scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
    scene: [BootScene, GameplayScene],
    callbacks: {
      preBoot: (g) => {
        g.registry.set('manifest', manifest);
        g.registry.set('debug', debug);
      },
    },
  });
  if (debug.enabled) (window as unknown as { __A2_GAME__: Phaser.Game }).__A2_GAME__ = game;
}

void start();
