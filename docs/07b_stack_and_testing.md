# Stack, project layout, commands, testing, definition of done

## Stack (decided - do not change without asking the owner)
- Language: TypeScript (strict mode)
- Engine: Phaser 3
- Build/dev server: Vite
- Unit tests: Vitest (data, math, rules, save/load, stage and boss logic, no browser)
- End-to-end tests: Playwright (loads the game in Chromium, walks screens, plays scripted runs, screenshots)
- Lint/format: ESLint + Prettier
- Data: the JSON files in data/ are loaded at runtime and typed with TypeScript interfaces generated from them or written to match them
- Saves: localStorage per data/save_schema.json
- Later (not now): Electron for PC, Capacitor for phones
- Use the latest stable version of each tool; pin exact versions in package.json and commit the lock file. Add no other dependency without asking.
- Python is used only for tests/data_validation.py.

## Project layout (create this)
```
/ (this folder)
  CLAUDE.md  README.md  docs/  data/  art/  reference/  tests/   <- already here, do not edit reference/ or art/
  package.json  tsconfig.json  vite.config.ts  playwright.config.ts
  src/
    main.ts            game config, 1280x720, scale to fit
    scenes/            one Phaser scene per screen (Main, Mode, Profiles, Hangar, SectorMap, SectorStages, Story, Loading, Gameplay, Pause, GameOver, StageClear, Shop, Achievements, Settings, Load, Credits ...)
    game/              entities, weapons, bosses, waves, drops, scoring, damage boost, specials
    data/              typed loaders for data/*.json (single place that reads them)
    systems/           save/profile, credits/shop, unlocks, input (keyboard, gamepad, touch), audio
    ui/                shared UI parts (buttons, HUD, dialogs) built to the boards
  public/assets/       sprites rendered from art/ (script in tools/)
  tools/               build scripts (SVG -> PNG at 2x, data type generation)
  tests/unit/  tests/e2e/  tests/data_validation.py
```

## Commands (scripts in package.json)
- `npm run dev` start dev server
- `npm run build` production build
- `npm run test` Vitest
- `npm run e2e` Playwright
- `npm run lint`
- `npm run check` = lint + typecheck + test + python tests/data_validation.py

## Testing rules
1. Every rule in data/ that has a number gets a unit test: credits per stage (25,300 total), shop total (15,500), boss HP and Mk II HP, pair mapping, unlock rules, repeat clear = +1, difficulty multipliers, save/load round trip, profile limits (4 profiles, 3 slots + autosave).
2. Each screen has a Playwright test that opens it and compares a screenshot with reference/screens/<Board>.png. Allow a small pixel tolerance; text must match reference/board-text exactly.
3. Gameplay test: scripted input clears stage 1, shows Stage Clear, credits +100 once, replay pays +1.
4. Add a debug URL flag (?debug) that sets stage, jet, god mode and fast-forward so tests and the owner can reach any stage and boss quickly. Off in production.
5. Run `npm run check` before finishing every build step. Do not finish a step with failing tests.

## Definition of done per step
- Runs with `npm run dev` with no console errors
- `npm run check` passes
- Matches the boards for the screens in that step
- Anything not in the sources is logged in docs/09_questions_log.md, not invented
