# Build plan — step by step

Use ONE step at a time. Paste the step's prompt into Claude Code. Do not start the next step until the current one passes its gate and you have looked at it running.

## How every step works (applies to all)
- Source of truth order: data/*.json > docs/*.md > reference/screens/*.png > reference/board-source/*.dc.html > reference/board-text/*.txt (see CLAUDE.md).
- Never invent. Missing info -> log in docs/09_questions_log.md and ask.
- Read numbers only through the typed loaders in `src/data/`. No magic numbers.
- Screens are built to the boards: layout, colors, text exactly as in reference/. Each screen = one Phaser scene.
- Every step ends with: `npm run check` green, `npm run e2e` green, the game runs with `npm run dev` with no console errors, a short report (built / questions logged / next step), and a git commit named `step-N: <name>`.
- Regression gate: before finishing step N, re-run the Playwright tests of ALL earlier steps. A step that breaks an earlier step is not done.
- Integration rule: new features plug into the systems that already exist (data loaders, save system, scene manager, input layer, audio layer, event bus). Do not create parallel copies. If an earlier system must change, change it and update its tests.
- Use the `?debug` flag (set stage, jet, god mode, fast-forward, spawn boss) to reach anything quickly. Debug is off in production builds.

## Standard prompt header (put at the top of every step prompt)
```
Read CLAUDE.md, README.md, docs/07_tech_and_build_order.md, docs/07b_stack_and_testing.md, docs/08_decisions_and_remaining.md and docs/11_build_plan.md. Follow the rules in CLAUDE.md and the "How every step works" section of docs/11_build_plan.md. Do ONLY the step below. Do not start the next step.
```

---

## STEP 1 — Fly, shoot, one enemy, hit and die  (prompt already given)
Scope: project setup (docs/07b), Nova Striker moves and auto-fires, one stage-1 enemy, player hit/death, Gameplay HUD frame, ?debug flag, art pipeline script (SVG -> PNG 2x).
Boards: Gameplay, Stage01. Data: jets.json, balance.json (jets), stage_themes.json (stage 1), theme.json.
Done when: unit tests for data loaders + jet stats, e2e screenshot of gameplay vs reference/screens/Gameplay.png, `npm run check` green.

---

## STEP 2 — Stage 1 complete (engine core)
Prompt:
```
[header]
STEP 2: Stage 1 complete. Build the stage engine and finish stage 1 end to end.
Boards: Stage01, Gameplay, PowerUps, DamageBoost, Warnings, BossIntro, BossDefeat, MiniBosses, Pause, GameOver, SectorClear (Stage Clear), Effects, Tutorial.
Data: waves.json (stage 1), stage_themes.json (stage 1), stages.json, balance.json, powerups.json, scoring.json, bosses.json (boss 1 Rockmaw), difficulty.json, pilots.json (specials).
Build:
1. Wave engine that plays waves.json (formations, lanes, timing, mini-boss event, boss after last wave).
2. All four stage-1 items with their classes: Molten Asteroid (splits in 2), Spike Mine, Scout Drone, Fire Comet (warning line).
3. Mini-boss Cinder Crab and boss Rockmaw (2 phases at the phase threshold from balance.json, weak point, attacks named in bosses.json, boss HP bar from the Warnings board).
4. All 9 power-ups with drops per balance.json (weights, Lucky Orb not yet) and Damage Boost levels 1-5.
5. Scoring, combo (x1..x8), stars (1/2/3 rules from scoring.json), pickups, bomb, hull, shield, continues from difficulty.json.
6. Ayan Focus Shot and Aarav Shield Burst specials and the special bar.
7. Tutorial hints (stage 1 only), Pause, Game Over, Boss Intro, Boss Defeat sequence, Stage Clear screen with score/stars/credits shown (credits are display only for now).
8. Effects from the Effects board (explosions, hit flashes, screen shake toggle).
Tests: unit tests for wave timing, damage/HP maths, combo, stars, drop weights (sum 100), Damage Boost multipliers, special bar fill; Playwright: scripted run clears stage 1 with ?debug fast-forward and reaches Stage Clear; screenshots of Pause, Game Over, Boss Intro, Stage Clear vs reference.
Done when: stage 1 is fully playable from start to Stage Clear and Game Over, all screens above match the boards.
```

---

## STEP 3 — Menus, flow, profiles and saving
```
[header]
STEP 3: Menu shell, profiles and saving. Connect every screen into one flow.
Boards: Main, ModeSelect, Profiles, ProfileCode, Hangar, Specials, SectorMap, Sector01 (and Sector02-10 as data-driven copies of the same scene), Story, Loading, Load, Settings, Credits, Confirms, Achievements (display only), Logo.
Data: sectors.json, stages.json, profiles.json, save_schema.json, settings.json, rules_decided.json, jets.json, pilots.json, screen_flow.json, audio.json (names only).
Build:
1. Scene manager and screen flow exactly as data/screen_flow.json and docs/01_menus_and_flow.md: Home -> Mode -> Hangar -> Sector Map -> Sector (10 stages) -> Story/Loading -> Play -> Stage Clear / Game Over.
2. Profile system: up to 4 profiles per device, create/rename/delete with the Confirms dialogs, profile stats shown as on the Profiles board.
3. Save system per data/save_schema.json: 3 slots + 1 autosave per profile in localStorage, Load screen, Export/Import code (ProfileCode board), overwrite confirmation.
4. Hangar: 4 jets and 2 pilots, locked jets shown as on the board, jet/pilot passed into gameplay.
5. SectorMap and Sector01-10 boards generated from data (stage cards, stars, locked/next/cleared, first-clear credits, boss art from art/bosses). Unlock rules from rules_decided.json. Only stage 1 is playable for now; other stages show as coming next but stay locked by the rules.
6. Settings with all toggles and sliders from settings.json, saved per device; Credits; Story; Loading.
7. Stage Clear and Game Over now write progress to the save (stars, cleared, stage_unlocked, best score).
Tests: unit tests for save/load round trip, 4-profile limit, slot/autosave rules, export/import code, unlock rules; Playwright: full path Home -> Mode -> Hangar -> Sector Map -> Sector 1 -> stage 1 -> clear -> back to Sector 1 shows stage 1 cleared with stars; screenshots of every menu screen vs reference/screens.
Done when: you can start the game, create a profile, play stage 1, quit, reload and continue.
```

---

## STEP 4 — Credits, shop, achievements, difficulty
```
[header]
STEP 4: Economy.
Boards: Shop, ShopTiers, Progression, CreditsEcon, Achievements, SectorClear (Stage Clear), Profiles.
Data: credits.json, shop.json, achievements.json, scoring.json, difficulty.json, rules_decided.json, balance.json.
Build:
1. Credits earned on Stage Clear exactly per credits.json: first clear pays clear + stars (round(10m)/round(20m)/round(30m) for newly earned stars) + boss + coin; repeat clear pays +1 total and nothing else. Difficulty multipliers on first clears only.
2. Shop with all 8 powers x 3 tiers (tier unlock order, replace not stack, prices from shop.json). Purchases saved per profile. Every shop power applies in gameplay as defined in shop.json and balance.json (Shield hits, Damage Head Start, Bomb Stock, Pickup Magnet, Wingman drones, Lucky Orb drop multiplier, Extra Hull, Special Charge).
3. Achievements: all 12 trigger per rules_decided.json mapping, pay credits once, shown on the Achievements screen with high scores.
4. Difficulty setting (easy/normal/hard) applying multipliers from difficulty.json to enemies, bosses, bullets, drops, score and starting hull.
5. Wingman drones, Magnet and Lucky Orb behaviour in gameplay.
Tests: unit tests: credits per stage = stages.json, repeat = +1, total of all 100 stages = 25,300, shop total = 15,500, tier rules, achievements pay once, difficulty multipliers; Playwright: buy a power in the shop and see its effect in stage 1; replay stage 1 pays +1.
Done when: the economy matches CreditsEcon, Progression and ShopTiers boards exactly.
```

---

## STEP 5 — Sector 1 (stages 2–10) and bosses 2–10
```
[header]
STEP 5: Stages 2-10 and bosses 2-10.
Boards: Stage02-Stage10, BossTier1, BossOverview, BossIntro, BossDefeat, MiniBosses, Warnings, Sector01.
Data: stage_themes.json (stages 2-10), waves.json, bosses.json (bosses 2-10), stages.json, balance.json (enemy_classes, boss_attack_defaults, phase thresholds), art/bosses.
Build:
1. A data-driven enemy/hazard/obstacle system by class and the item text in stage_themes.json (zig-zag groups, spore pops, eel, leech pod slow, turrets, laser gate on/off, kamikaze lock-on, gravity well, rift crystal shards, ice, storm, gears, mirror, tide, comet run). Each item's behaviour comes from its description text; if the text is not enough, log a question.
2. Stage backgrounds: parallax layers and the stage motif/palette from each Stage board.
3. Mini-bosses for stages 2-10 (HP, score, two attacks from stage_themes.json / balance.json).
4. Bosses 2-10 (Zyra, Dreadnought, Kaal, Glacius, Voltra, Tikka, Spectra, Maelo, Blazar): HP, phases, attacks named in bosses.json (shape from the name/text, numbers from balance.json), weak point rules, boss art from art/bosses.
5. Stage select now allows stages 1-10 by the unlock rule.
Tests: unit tests for each boss's HP/phases/phase thresholds; Playwright: ?debug jump to each stage 2-10, fast-forward to the boss, kill it, reach Stage Clear; screenshots of each stage vs its Stage## board.
Done when: all of Sector 1 can be played in order and each stage matches its board.
```

---

## STEP 6 — Tier 2, 3, 4 stages and bosses (sectors 3, 5, 7)
```
[header]
STEP 6: Stages 21-30, 41-50, 61-70 and bosses 21-30, 41-50, 61-70.
Boards: Stage21-Stage30, Stage41-Stage50, Stage61-Stage70, BossTier2, BossTier3, BossTier4, Sector03, Sector05, Sector07.
Do it in three passes (Tier 2, then 3, then 4), each ending with npm run check and a commit. Same method as step 5.
Tier 2 needs: shield plates, webs, gravity wells, cloak/teleport, magnet pull/push, toxic pools, rainbow beam order, time slow/rewind, turret fortress, scythe arcs.
Tier 3 needs: multi-head hydra, meteors, light/dark switch, drone swarms, lava rise, tail laser, freeze that blocks Special, random attack picker, bouncing shockwave rings, boss copying moves of earlier bosses.
Tier 4 needs: gravity pull, revive-once phoenix, split screen, modules that repair, decoy copies, ink clouds, screen-wide lightning with warning lines, bouncing shards, control flip, 4-phase final boss Galaxor.
Log any attack whose text is not enough to build. Do not invent behaviour.
Tests: same as step 5 for every boss; unit tests for HP/phases per bosses.json (phases = 2/3/3/4 by tier, boss 4 = 3).
Done when: stages 1-10, 21-30, 41-50, 61-70 are all playable and match their boards.
```

---

## STEP 7 — Mk II stages and pair fights (stages 11–20, 31–40, 51–60, 71–80, 81–100)
```
[header]
STEP 7: Mk II bosses and pair fights.
Boards: BossTier1-4 (Mk II cards), BossDual, PairFight, Sector02, 04, 06, 08, 09, 10, StageMap data in stages.json.
Data: bosses.json (mk2_rules, mk2_change, mk3_pair_rules), stages.json, stage_themes.json, balance.json, art/bosses (mk2 SVGs).
Build:
1. Mk II: 1.5x HP, +20% bullet speed, the extra attack from mk2_change, gold trim art. Stages +10 reuse the stage theme (theme_ref).
2. Pair fights for stages 81-100: boss pair per stages.json, Mk II HP each, +40% bullet speed, shared pair attack, enrage rule (other boss +30% speed for 10 s), bullet cap 120, the PairFight HUD from the PairFight board, extra boss_damage_scale for pairs from stages.json.
3. All 100 stages selectable by unlock rules; Sector Map shows all 10 sectors.
4. Credits per stage use stages.json for every stage.
Tests: unit tests for Mk II and pair maths and mapping (81 = bosses 1+21 ... 100 = 50+70); Playwright: ?debug jump to stage 11, 85 and 100, fast-forward, win; credits paid per stages.json.
Done when: all 100 stages are playable and the full economy still totals 25,300 credits.
```

---

## STEP 8 — Two-player co-op and A² Burst
```
[header]
STEP 8: Co-op.
Boards: ModeSelect, Coop, CoopGameOver, Specials (A² Burst), Controls (keyboard), Profiles, Hangar.
Data: pilots.json (special_rules.a2_burst), rules_decided.json (coop), controls.json, balance.json.
Build: two players on one keyboard (WASD + arrows), each with own profile, jet, pilot, hull, Damage level, shop powers, credits and first-clear status; A² Burst (both Special within 1 s, meter fills when both shoot, both alive, 2 s giant beam, bosses lose 15%); revive; Co-op game over; Player 2 profile pick flow; manual-fire setting applies to both. Enemy HP/bullet scaling for 2 players only if the boards/data say so (otherwise log a question).
Tests: unit tests for A² Burst timing/meter, per-profile credits in co-op; Playwright: co-op run of stage 1 and 2-player game over.
Done when: co-op works on every stage and the solo game is unchanged (regression).
```

---

## STEP 9 — Gamepad, touch and input polish
```
[header]
STEP 9: Input.
Boards: Controls, Gamepad, Touch, Settings, Confirms.
Data: controls.json, settings.json.
Build: gamepad (one or two pads, Xbox/PlayStation/Switch prompts that auto-switch to the last device used, disconnect pause with "Reconnect controller", menu navigation); touch layout (floating stick, SP and bomb buttons, pause, left-hand swap, S/M/L sizes, vibration, landscape-only rotate prompt, solo only); "VIEW & REMAP CONTROLS" opens the read-only controls view per rules_decided.json.
Tests: unit tests for input mapping; Playwright with emulated touch device and gamepad mocks.
Done when: whole game is playable with keyboard, gamepad and touch, and button hints follow the last device used.
```

---

## STEP 10 — Audio
Before this step: decide the audio source (generate, buy, compose). Claude Code cannot make real music files. If none yet, build everything with silent placeholders and a swappable file map.
```
[header]
STEP 10: Audio.
Boards: Audio, MusicMap, Effects.
Data: audio.json, settings.json, rules_decided.json (music_for_stages).
Build: audio manager with music, effects and voice channels and sliders; music per screen per the MusicMap board (crossfade 0.5 s, ducking, pause muffle, boss theme layers, game-over and clear stings); every effect in audio.json wired to its game event; pilot voice lines at most once per 20 s with subtitles toggle; audio starts on first key/click. Use files from public/audio/ named per audio.json; if a file is missing, play nothing and list it in docs/09_questions_log.md.
Tests: unit tests for ducking/crossfade logic and the voice-line cooldown; Playwright checks that missing files do not crash.
Done when: every audio hook exists and works with real files dropped into public/audio/.
```

---

## STEP 11 — Balance, QA, release build
```
[header]
STEP 11: Balance, polish and release.
Build/do:
1. Bot playtests: add a scripted "auto-pilot" test that plays every stage on normal at the typical power from data/power_curve.json and reports clear rate and boss fight time; compare with balance.json fight_time_check. List problems, do not silently change numbers; propose changes to data/balance.json and ask me.
2. Performance: 60 fps with bullet cap 120 on pair stages; memory check over 10 stages.
3. Accessibility toggles from Settings work (flash, shake, colorblind bullets, subtitles).
4. Screenshot regression of ALL screens vs reference/screens.
5. Production build (`npm run build`), a static folder I can host, README run instructions. Optional later: Electron (PC) and Capacitor (phone).
6. Final checklist: every item in docs/08_decisions_and_remaining.md and docs/09_questions_log.md answered or reported.
Done when: `npm run check` and `npm run e2e` are green, the full game can be played from Home to stage 100, and I have a hosted-ready build.
```

---

## Quick regression list (run at the end of EVERY step)
1. New profile -> play stage 1 -> Stage Clear -> credits +100 -> replay pays +1.
2. Save, reload, Load slot, autosave restores.
3. Shop purchase persists and applies.
4. All earlier ?debug jumps still work.
5. No console errors, `npm run check` green, `npm run e2e` green.
