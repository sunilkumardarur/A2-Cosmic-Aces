/** Keyboard movement. rules_decided.json keys_solo: "Solo accepts both WASD and arrows for move". */
import Phaser from 'phaser';

export class MoveInput {
  private keys: Record<'up' | 'down' | 'left' | 'right', Phaser.Input.Keyboard.Key[]>;

  constructor(scene: Phaser.Scene) {
    const kb = scene.input.keyboard!;
    const K = Phaser.Input.Keyboard.KeyCodes;
    const k = (code: number) => kb.addKey(code, true, false);
    this.keys = {
      up: [k(K.W), k(K.UP)],
      down: [k(K.S), k(K.DOWN)],
      left: [k(K.A), k(K.LEFT)],
      right: [k(K.D), k(K.RIGHT)],
    };
  }

  /** Unit-length direction (diagonals are not faster). */
  vector(): { x: number; y: number } {
    const on = (d: keyof typeof this.keys) => this.keys[d].some((key) => key.isDown);
    const x = (on('right') ? 1 : 0) - (on('left') ? 1 : 0);
    const y = (on('down') ? 1 : 0) - (on('up') ? 1 : 0);
    const len = Math.hypot(x, y) || 1;
    return { x: x / len, y: y / len };
  }
}
