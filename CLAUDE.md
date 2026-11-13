# A² Cosmic Aces — rules for Claude Code

You are building a game from a finished design. The design is the only source of truth.

## Source of truth (highest first)
1. `data/*.json` (exact numbers, names, text)
2. `docs/*.md` (verbatim board text)
3. `reference/screens/*.png` (layout, colors, look)
4. `reference/board-source/*.dc.html` (exact CSS/markup of each screen)
5. `reference/board-text/*.txt`

## Hard rules
- Never invent numbers, names, text, art, features, enemies, bosses or screens. If it is not in the sources, it does not exist.
- Copy text exactly (Ω, ², ×, −, ·, capitalisation).
- Use supplied art only (`art/`). Do not redraw. Render SVG to PNG sprites at 2x for the engine.
- All tunable numbers come from `data/*.json`. No magic numbers in code.
- Decisions and the few remaining open items are in `docs/08_decisions_and_remaining.md`. If something is not in the sources, stop, log it in `docs/09_questions_log.md`, and ask. Do not guess silently.
- Stay in scope: 100 stages, 40 bosses, solo + 2-player co-op, 4 jets, 2 pilots, shop, profiles, achievements. NOT in scope: anything after stage 100, endless/daily modes, online, cloud save.
- If sources conflict, the order above wins; log conflicts. There are no known conflicts left.
- Build in the order in `docs/07_tech_and_build_order.md` (and screens grouped as in reference/board-index.json sections). One step at a time; get it running before the next.
- Run `python tests/data_validation.py` after any data change and before finishing a step.
- Stack is fixed: TypeScript, Phaser 3, Vite, Vitest, Playwright (see `docs/07b_stack_and_testing.md`). Ask the owner before changing engine, adding dependencies that are not needed, or deviating from a board.

## Facts to keep straight
- Canvas 1280x720, scales to fit. Fonts Orbitron + Exo 2. Colors in `data/theme.json`.
- TERMS: SECTOR = block of 10 stages (10 sectors). STAGE = one level, 100 stages. Stage theme = environment (Ember Belt...). Bosses are numbered 1-10, 21-30, 41-50, 61-70 (40). Stages +10 use the Mk II version. Stages 81-100 are pair fights.
- Repeat clear of a stage pays +1 credit total.
