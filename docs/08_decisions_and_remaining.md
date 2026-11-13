# Decisions made for the build, and what is still open

## Decided (all numbers in data/balance.json, data/rules_decided.json, data/waves.json, data/save_schema.json)
1. Boss 70 Galaxor: FOUR phases (BossTier4 board text corrected). Phases: T1 2 (boss 4 = 3), T2/T3 3, T4 4.
2. Save format: stage-based, 100 stages (data/save_schema.json). Profiles: 4 per device; each profile has 3 save slots + 1 autosave. Profiles and TechPlan boards now say the same.
3. Jet numbers: speed, fire rate, damage, hull modifier, hitbox per jet (balance.json jets). Damage vs bosses scales by tier (balance.json).
4. Drop rates, drop weights, coin, pickup speeds, magnet ranges, special/bomb numbers (balance.json).
5. Wave timing for all 100 stages (waves.json).
6. Mini-boss stats for all stages (HP, score 2,000, no credits, 2 attacks, drops one Damage orb) (stage_themes.json, stages.json).
7. Boss attack numbers per tier: volley size, interval, bullet speed, phase thresholds (balance.json boss_attack_defaults, phase_thresholds_hp_percent). Attack NAME and TEXT in bosses.json decide the shape.
8. Unlock rules, achievements mapping to stages, credits per star, solo keys, Exit, controls view, co-op profile flow, music per stage, naming (rules_decided.json).
10. Sector structure: 10 sectors x 10 stages (data/sectors.json, boards SectorMap + Sector01-10). Sector names chosen for the build; owner may rename.
9. Difficulty multipliers apply to enemies, mini-bosses and bosses.

## Still open (do not invent; log in 09_questions_log.md)
- Audio files do not exist (list only: data/audio.json). Decide: generate, buy or compose.
- No animation frames for art (SVG stills only). Engine tweens/transforms only.
- Exact attack geometry (spread angles, spiral speed) is not designed. Choose within balance.json boss_attack_defaults and the attack text, and note it in the questions log.
- Numbers in balance.json are first-pass. Tune after playtesting; change the JSON, not code.
- Anything after stage 100 is out of scope.
