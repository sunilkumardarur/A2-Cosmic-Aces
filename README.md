# A² Cosmic Aces — design handoff

Open this folder in VS Code and start Claude Code here. Claude Code reads `CLAUDE.md` first.

- `CLAUDE.md` rules for the builder
- `docs/` spec per topic (start with 07 build order, 08 decisions)
- `data/` exact game data (JSON): bosses, stages, sectors, waves, balance, shop, credits, jets, pilots, powerups, save_schema, rules_decided and more
- `art/` SVG art (40 bosses x Mk I/II, all other role=img art from boards)
- `reference/screens/` screenshots of all boards; `reference/board-source/` source of each screen; `reference/board-text/` text per board
- `tests/data_validation.py` checks the data files
- Design canvas: https://claude.ai/artifact/2nLBV7KWZ9v1uUVryqot6h

First prompt to give Claude Code:
"Read CLAUDE.md, README.md, docs/07_tech_and_build_order.md and docs/07b_stack_and_testing.md. Do build step 1 only. Set up the project exactly as in docs/07b_stack_and_testing.md. Follow the rules. Ask me about anything missing."
