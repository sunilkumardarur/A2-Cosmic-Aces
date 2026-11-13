import Phaser from 'phaser';
import type { AssetManifest } from '../game/sprites';

/** Loads the sprites and backgrounds listed in public/assets/manifest.json. */
export class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload(): void {
    const manifest = this.registry.get('manifest') as AssetManifest;
    this.load.setPath('assets/');
    for (const [key, s] of Object.entries(manifest.sprites)) this.load.image(key, s.file);
    for (const [key, b] of Object.entries(manifest.backgrounds)) this.load.image(key, b.file);
  }

  create(): void {
    this.scene.start('Gameplay');
  }
}
