# Questions log

Claude Code: append here when something is missing. Format: date, question, placeholder used.

## Build step 1 (2026-11-12)

### Decided by the owner during step 1
- 2026-11-12 · Scout Drone, player bullet and HUD bomb star have no file in art/. **Owner: use the exact markup from reference/board-source/Gameplay.dc.html** (read only). tools/render-art.ts cuts it out and renders it to PNG at 2x. Enemy shot uses art/boards/Effects_05_red-orb.svg.
- 2026-11-12 · ESLint needs `typescript-eslint` to read TypeScript. **Owner: approved** (dev dependency, pinned).

### Conflicts found
- 2026-11-12 · **Fonts in reference/screens/Gameplay.png.** The PNG was captured before the web fonts loaded: its text uses a fallback sans, not Orbitron / Exo 2. theme.json, CLAUDE.md and the board CSS all say Orbitron + Exo 2, so the game uses those. Because of this, the PNG's text is narrower and the pilot panel rows sit up to 4 px higher. The Playwright screen test compares only the non-text HUD parts, with a 4 px shift tolerance, and checks HUD text exactly against reference/board-text/Gameplay.txt. **Question:** can the board PNGs be re-captured with the fonts loaded?

### Open questions (placeholder in use)
1. 2026-11-12 · **Numbers that only exist inside a sentence in data.** The loader reads them from the text and throws an error if the wording changes: HP per hit = 10 (`balance.units`), minimum start hull = 3 (`balance.player.hull_start_by_difficulty`), combo window = 3 s (`scoring.combo.rule`), lane x = 20/50/80% (`waves._rules`). **Question:** add numeric fields for these? Placeholder: read from the text.
2. 2026-11-12 · **Starting Nova Bombs.** No base count is given. Shop Bomb Stock tier 1 says "Start with 2 bombs", so the HUD shows 1 (tier 1 minus one). Bombs can't be used in step 1. **Question:** is the base 1?
3. 2026-11-12 · **The "3 lives" icons in the score panel.** No lives rule exists in data. Placeholder: the icons show the difficulty's `continues` (3 on Normal, which matches the board and the GameOver board's "Continues left"). **Question:** do the icons mean continues?
4. 2026-11-12 · **Hull pips on Easy.** The board draws 5 hull pips (Normal = 5). Easy starts with 6 hull, and Titan on Easy with 7. Placeholder: one pip per hull bar, so the row grows past the board panel. **Question:** how should hull above 5 look?
5. 2026-11-12 · **Scout Drone flight.** "Flies in zig-zag groups of 3 and fires single red shots." The zig-zag shape isn't designed. Placeholder: moves at 45° at the ENEMY_FLIGHT speed (170 px/s), turning back every 50 px sideways (half the board's 100 px drone spacing). Shots go straight down (as the board shows), the first one after one fire interval (2.0 s), and only while the drone is on screen.
6. 2026-11-12 · **Formation spacing.** waves.json names the formations (line, v, column, zigzag, pair) but gives no spacing. Placeholder: the Gameplay board's drone group, 100 px apart with the V's middle drone 30 px higher. Column, zigzag and pair stack 100 px apart vertically.
7. 2026-11-12 · **Flying into an enemy.** Not specified. Placeholder: touching an enemy is a hit on the player (−1 hull, then the usual invulnerability). The enemy is not hurt.
8. 2026-11-12 · **Step 1 spawner (temporary).** Step 1 has one enemy type, so instead of the full wave script it repeats the stage 1 Scout Drone waves (waves 3 and 7) from 4 s, one every `wave_interval_s` (6 s). Step 2 replaces this with the real waves.json script.
9. 2026-11-12 · **Player death in step 1.** The GameOver screen comes in step 3. For now the jet explodes (large explosion), enemies keep flying, and **R** restarts (the key comes from the Pause board's "R — restart"). No text is shown.
10. 2026-11-12 · **Power-up panel.** The board shows a sample SPREAD SHOT 08s. Power-ups arrive in step 2, so the panel is hidden while none is active. `?debug&pose=gameplay` shows it with the board's sample values.
11. 2026-11-12 · **FOCUS bar.** Placeholder: fills over time by `special.base_fill_seconds` (40 s). Shift does nothing until specials are built. **Question:** does the special fill over time, from kills, or both?
12. 2026-11-12 · **Stage 1 background.** Built from the Gameplay board's backdrop (far stars, Ember nebula, planet, speed streaks) plus the Stage01 board's Ember tint and diagonal streak layer, rendered to one 2x PNG. It's static: parallax scroll speeds (theme.json lists 4 layers) are not in data. **Questions:** what are the scroll speeds? And should the diagonal Stage01 streaks stay? They may read like Fire Comet warning lines.
13. 2026-11-12 · **Hitboxes other than the jet's.** The player uses `hitbox_radius_px` (14). For the rest, placeholders come from the art: Scout Drone radius 27 px (54 px sprite), enemy shot radius 5 px (the board's 10 px dot; the Effects red orb is scaled so its core is 10 px), and the player bullet is the 4×40 board pulse.
14. 2026-11-12 · **Explosions and hit flash.** No animation frames are supplied (08 open item). The Effects board says 6 frames in 0.4 s plus 6 sparks. Placeholder: the Small/Large explosion still fades out over 0.4 s, with no sparks. Hit flash: the Effects "Hit flash" art over the jet, fading during the 1.5 s invulnerability.
15. 2026-11-12 · **Solo pilot and difficulty before menus exist.** Ayan (as on the Gameplay board) and `settings.difficulty_default` (normal).
16. 2026-11-12 · **package.json already listed `electron` and `@capacitor/*`.** 07b says those come later. They're left in place, not used. **Question:** remove them for now?
17. 2026-11-12 · **Tooling notes, no decision needed.** npm's latest `phaser` is 4.x, so it's pinned to 3.90.0 per the stack. Windows Application Control blocks Playwright's own Chromium on this PC, so Playwright and tools/render-art.ts use the installed Google Chrome (`channel: 'chrome'`).
