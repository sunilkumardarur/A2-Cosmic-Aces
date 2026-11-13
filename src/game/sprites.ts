/** Sprite sizes from public/assets/manifest.json (written by tools/render-art.ts). */
export interface SpriteInfo {
  file: string;
  width: number;
  height: number;
  pad: number;
}
export interface AssetManifest {
  scale: number;
  sprites: Record<string, SpriteInfo>;
  backgrounds: Record<string, { file: string; width: number; height: number }>;
}

let manifest: AssetManifest | null = null;
export const setManifest = (m: AssetManifest): void => {
  manifest = m;
};
export function sprite(key: string): SpriteInfo {
  const s = manifest?.sprites[key];
  if (!s) throw new Error(`Sprite ${key} not in manifest (run npm run art)`);
  return s;
}
/** PNGs are rendered at 2x; draw at board size. */
export const spriteScale = (): number => 1 / (manifest?.scale ?? 1);
