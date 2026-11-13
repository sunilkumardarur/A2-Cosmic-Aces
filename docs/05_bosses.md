# Bosses (all 40), mini-bosses, pair fights

All bosses in one place. Bosses 1-10, 21-30, 41-50, 61-70. Mk II = stage +10. Pair stages 81-100. Data: bosses.json, balance.json, art/bosses.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: BossOverview  (reference/screens/BossOverview.png)

```
BOSS PLAN · STAGES 1–100
40 different bosses over 100 stages. Mk II repeats cover stages 11–80, then pair fights finish the game.
STAGES
BOSSES
VERSION
BOSS HP
PHASES
1–10
Bosses 1–10
Mk I
1,200–8,000
2–3
11–20
Bosses 1–10
Mk II
1,800–12,000
2–3
21–30
Bosses 21–30
Mk I
9,000–15,750
3
31–40
Bosses 21–30
Mk II
13,500–23,625
3
41–50
Bosses 41–50
Mk I
17,000–26,000
3
51–60
Bosses 41–50
Mk II
25,500–39,000
3
61–70
Bosses 61–70
Mk I
28,000–41,500
4
71–80
Bosses 61–70
Mk II
42,000–62,250
4
81–90
Pairs 1+21 … 10+30
Mk III
15,300–35,625 total
2 bosses
91–100
Pairs 41+61 … 50+70
Mk III
67,500–101,250 total
2 bosses
TIERS
Each set of 10 is stronger than the last and looks and fights differently. Tier 1 is bosses 1–10, Tier 2 is 21–30, Tier 3 is 41–50, Tier 4 is 61–70.
MK II (REPEAT STAGES)
Same boss, 1.5× health, 20% faster bullets, one new attack and gold armour on its art.
MK III (STAGES 81–100)
Two bosses at once with Mk II health, 40% faster bullets and a shared pair attack.
BOSS HP
Real hit points. Stages 81–90 have less total health than 71–80 but two bosses attack together, so they are harder to dodge.
PHASES
Tier 1: 2 (boss 4 has 3), Tiers 2 and 3: 3, Tier 4: 4. Phase changes follow the Warnings board.
```

---
## Board: BossTier1  (reference/screens/BossTier1.png)

```
BOSSES 1 · STAGES 1–20
Ten different bosses. Large art is Mk I, small gold art is Mk II (same boss, stronger). Stages: white first fight, gold Mk II, pink pair fight.
TIER 1
BOSS 1
MK II
STAGES 1 · 11 · 81
Rockmaw
Rams down the screen and spits rock chunks in fans.
MK II · Rock rain from above, faster ram.
HP 1,200 → 1,800
BOSS 2
MK II
STAGES 2 · 12 · 82
Hive Queen Zyra
Spawns drones in waves and fires acid arcs.
MK II · Drones come back once after dying.
HP 2,000 → 3,000
BOSS 3
MK II
STAGES 3 · 13 · 83
Dreadnought Ω-9
Armored hull with missile barrages and laser gates.
MK II · Adds a sweeping laser wall.
HP 3,200 → 4,800
BOSS 4
MK II
STAGES 4 · 14 · 84
Void Emperor Kaal
Pulls bullets inward and makes shadow clones.
MK II · Two clones fire at once.
HP 5,000 → 7,500
BOSS 5
MK II
STAGES 5 · 15 · 85
Frost Colossus Glacius
Ice fields slow your jet. Icicle volleys.
MK II · Fields cover half the screen.
HP 5,500 → 8,250
BOSS 6
MK II
STAGES 6 · 16 · 86
Storm Serpent Voltra
Lightning chains jump between warning orbs.
MK II · Chains bounce off the screen edges.
HP 6,000 → 9,000
BOSS 7
MK II
STAGES 7 · 17 · 87
Clockwork Titan Tikka
Spinning gear blades. Bullets come in a rhythm.
MK II · Rhythm changes mid-attack.
HP 6,500 → 9,750
BOSS 8
MK II
STAGES 8 · 18 · 88
Mirror Mantis Spectra
Reflects your shots and copies your last move.
MK II · Reflects at wider angles.
HP 7,000 → 10,500
BOSS 9
MK II
STAGES 9 · 19 · 89
Tidal Kraken Maelo
Tentacles sweep in from the sides. Bubble bullets.
MK II · Adds a whirlpool that pulls you in.
HP 7,500 → 11,250
BOSS 10
MK II
STAGES 10 · 20 · 90
Comet King Blazar
Dashes across the screen leaving fire trails.
MK II · Double dash. Trails last longer.
HP 8,000 → 12,000
```

---
## Board: BossTier2  (reference/screens/BossTier2.png)

```
BOSSES 2 · STAGES 21–40
Ten different bosses. Large art is Mk I, small gold art is Mk II (same boss, stronger). Stages: white first fight, gold Mk II, pink pair fight.
TIER 2
BOSS 21
MK II
STAGES 21 · 31 · 81
Sentinel Prime Aegis
Rotating shield plates. Only the back is open.
MK II · Plates break off and fly at you.
HP 9,000 → 13,500
BOSS 22
MK II
STAGES 22 · 32 · 82
Plasma Weaver Arachna
Laser webs close in like a grid.
MK II · Web moves and closes faster.
HP 9,750 → 14,625
BOSS 23
MK II
STAGES 23 · 33 · 83
Gravity Golem Massa
Gravity wells pull bullets and your jet.
MK II · Wells last longer and can stack.
HP 10,500 → 15,750
BOSS 24
MK II
STAGES 24 · 34 · 84
Phantom Admiral Noctis
Cloaks, teleports and strikes from behind.
MK II · Leaves decoys that explode.
HP 11,250 → 16,875
BOSS 25
MK II
STAGES 25 · 35 · 85
Magnet Lord Ferrox
Pulls you toward him and flings metal scrap.
MK II · Pull flips to push without warning.
HP 12,000 → 18,000
BOSS 26
MK II
STAGES 26 · 36 · 86
Sludge Leviathan Bog
Leaves toxic pools that stay on screen.
MK II · Pools split into small slimes.
HP 12,750 → 19,125
BOSS 27
MK II
STAGES 27 · 37 · 87
Prism Dragon Chroma
Rainbow beams fire in a fixed colour order.
MK II · Random order, wider beams.
HP 13,500 → 20,250
BOSS 28
MK II
STAGES 28 · 38 · 88
Time Warden Chronos
Slows your bullets and rewinds his own.
MK II · Rewinds your jet once per phase.
HP 14,250 → 21,375
BOSS 29
MK II
STAGES 29 · 39 · 89
Siege Fortress Bastion
Six turrets to break, then the core opens.
MK II · Turrets repair unless broken together.
HP 15,000 → 22,500
BOSS 30
MK II
STAGES 30 · 40 · 90
Star Reaper Falx
Huge scythe arcs sweep across the screen.
MK II · Arcs leave star bullets behind.
HP 15,750 → 23,625
```

---
## Board: BossTier3  (reference/screens/BossTier3.png)

```
BOSSES 3 · STAGES 41–60
Ten different bosses. Large art is Mk I, small gold art is Mk II (same boss, stronger). Stages: white first fight, gold Mk II, pink pair fight.
TIER 3
BOSS 41
MK II
STAGES 41 · 51 · 91
Hydra Core Hydrax
Three heads, each with its own attack.
MK II · Heads grow back once, faster.
HP 17,000 → 25,500
BOSS 42
MK II
STAGES 42 · 52 · 92
Meteor Queen Rubia
Marked spots get hit by falling meteors.
MK II · Meteors split into three.
HP 18,000 → 27,000
BOSS 43
MK II
STAGES 43 · 53 · 93
Eclipse Wraith Umbra
Switches light and dark. Only hurt in light.
MK II · Switches faster. Bullets match the phase.
HP 19,000 → 28,500
BOSS 44
MK II
STAGES 44 · 54 · 94
Drone Mother Legion
Hundreds of tiny drones fly in formations.
MK II · Formations chase the pilot.
HP 20,000 → 30,000
BOSS 45
MK II
STAGES 45 · 55 · 95
Lava Colossus Magmor
Lava rises from below. Eruption columns.
MK II · Lava fills half the screen.
HP 21,000 → 31,500
BOSS 46
MK II
STAGES 46 · 56 · 96
Cyber Scorpion Stingra
Tail laser sweeps. Claws snap across lanes.
MK II · Tail fires twice per sweep.
HP 22,000 → 33,000
BOSS 47
MK II
STAGES 47 · 57 · 97
Frozen Empress Glacira
Freeze beams block your Special for 3 seconds.
MK II · Also blocks your bombs.
HP 23,000 → 34,500
BOSS 48
MK II
STAGES 48 · 58 · 98
Chaos Jester Wildcard
Picks a random attack every few seconds.
MK II · Chains two attacks together.
HP 24,000 → 36,000
BOSS 49
MK II
STAGES 49 · 59 · 99
Neutron Behemoth Atlas
Rolls across the screen with shockwave rings.
MK II · Rings bounce back from the walls.
HP 25,000 → 37,500
BOSS 50
MK II
STAGES 50 · 60 · 100
Nebula Overlord Zorak
Uses a move from three earlier bosses.
MK II · Uses moves from five earlier bosses.
HP 26,000 → 39,000
```

---
## Board: BossTier4  (reference/screens/BossTier4.png)

```
BOSSES 4 · STAGES 61–80
Ten different bosses. Large art is Mk I, small gold art is Mk II (same boss, stronger). Stages: white first fight, gold Mk II, pink pair fight.
TIER 4
BOSS 61
MK II
STAGES 61 · 71 · 91
Black Hole Sovereign Singula
Drags the arena inward. Bullet rings orbit.
MK II · Ring spin reverses.
HP 28,000 → 42,000
BOSS 62
MK II
STAGES 62 · 72 · 92
Supernova Phoenix Solara
Bursts into flames and rises once from defeat.
MK II · Rises twice.
HP 29,500 → 44,250
BOSS 63
MK II
STAGES 63 · 73 · 93
Dimension Splitter Riftor
Splits the screen in two. Portals link the halves.
MK II · Portals move and swap sides.
HP 31,000 → 46,500
BOSS 64
MK II
STAGES 64 · 74 · 94
Mecha Leviathan Ω-Prime
Modules fire missiles, lasers and mines together.
MK II · Modules repair each other.
HP 32,500 → 48,750
BOSS 65
MK II
STAGES 65 · 75 · 95
Quantum Mage Qubit
Makes three copies. Only one is real.
MK II · Five copies that swap places.
HP 34,000 → 51,000
BOSS 66
MK II
STAGES 66 · 76 · 96
Void Kraken Abyssa
Tentacles from every edge. Ink clouds hide targets.
MK II · Ink clouds linger longer.
HP 35,500 → 53,250
BOSS 67
MK II
STAGES 67 · 77 · 97
Thunder God Tempest
Screen-wide lightning after a red warning line.
MK II · Shorter warning, lines come in pairs.
HP 37,000 → 55,500
BOSS 68
MK II
STAGES 68 · 78 · 98
Crystal Titan Geode
Shards bounce between walls and split on hit.
MK II · Shards return after bouncing.
HP 38,500 → 57,750
BOSS 69
MK II
STAGES 69 · 79 · 99
Mind Eater Cortex
Flips your controls for 2 seconds at a time.
MK II · Flips mid-dodge for 3 seconds.
HP 40,000 → 60,000
BOSS 70
MK II
STAGES 70 · 80 · 100
Cosmic Emperor Galaxor
Four phases using every kind of attack.
MK II · Faster pattern mixing and shorter pauses between phases.
HP 41,500 → 62,250
```

---
## Board: BossDual  (reference/screens/BossDual.png)

```
STAGES 81–100 · PAIR LIST
Stage 81 = boss 1 + 21. Stage 91 = boss 41 + 61. All 40 bosses are used. See the Pair Fight screen for how it looks.
STAGES 81–90 · TIER 1 + TIER 2
TOTAL BOSS HP
81
Rockmaw · boss 1
Sentinel Prime Aegis · boss 21
15,300
82
Hive Queen Zyra · boss 2
Plasma Weaver Arachna · boss 22
17,625
83
Dreadnought Ω-9 · boss 3
Gravity Golem Massa · boss 23
20,550
84
Void Emperor Kaal · boss 4
Phantom Admiral Noctis · boss 24
24,375
85
Frost Colossus Glacius · boss 5
Magnet Lord Ferrox · boss 25
26,250
86
Storm Serpent Voltra · boss 6
Sludge Leviathan Bog · boss 26
28,125
87
Clockwork Titan Tikka · boss 7
Prism Dragon Chroma · boss 27
30,000
88
Mirror Mantis Spectra · boss 8
Time Warden Chronos · boss 28
31,875
89
Tidal Kraken Maelo · boss 9
Siege Fortress Bastion · boss 29
33,750
90
Comet King Blazar · boss 10
Star Reaper Falx · boss 30
35,625
STAGES 91–100 · TIER 3 + TIER 4
TOTAL BOSS HP
91
Hydra Core Hydrax · boss 41
Black Hole Sovereign Singula · boss 61
67,500
92
Meteor Queen Rubia · boss 42
Supernova Phoenix Solara · boss 62
71,250
93
Eclipse Wraith Umbra · boss 43
Dimension Splitter Riftor · boss 63
75,000
94
Drone Mother Legion · boss 44
Mecha Leviathan Ω-Prime · boss 64
78,750
95
Lava Colossus Magmor · boss 45
Quantum Mage Qubit · boss 65
82,500
96
Cyber Scorpion Stingra · boss 46
Void Kraken Abyssa · boss 66
86,250
97
Frozen Empress Glacira · boss 47
Thunder God Tempest · boss 67
90,000
98
Chaos Jester Wildcard · boss 48
Crystal Titan Geode · boss 68
93,750
99
Neutron Behemoth Atlas · boss 49
Mind Eater Cortex · boss 69
97,500
100
Nebula Overlord Zorak · boss 50
Cosmic Emperor Galaxor · boss 70
101,250
Mk III · Each boss keeps its Mk II health, gets 40% faster bullets and shares a pair attack.
Together · Both enter at once with two health bars. Clear needs both down.
Enrage · When one falls, the other gets 30% faster for 10 seconds.
Fair play · Bullets on screen are capped so pairs stay dodgeable.
```

---
## Board: PairFight  (reference/screens/PairFight.png)

```
Rockmaw
BOSS 1
Sentinel Prime Aegis
BOSS 21
STAGE 81 · PAIR FIGHT · BOTH MUST FALL
ENRAGE · When one boss falls, the other flashes red and fires 30% faster for 10 seconds.
PAIR ATTACK · Every 20 seconds both bosses fire one shared pattern that fills the screen. A red warning shows 1.5 seconds before.
Bullets on screen are capped at 120 so the screen stays readable.
```

---
## Board: MiniBosses  (reference/screens/MiniBosses.png)

```
STAGE FLOW & MINI-BOSSES
Every stage runs the same shape: waves, a mid-stage mini-boss, more waves, then the boss.
WAVE 1
WAVE 2
MINI-BOSS
WAVE 3
WAVE 4
BOSS
Start · pickups appear from Wave 1
Mini-boss drops a guaranteed power-up + checkpoint
Boss warning banner
STAGE 1 · EMBER BELT
CINDER CRAB
HP 400 · REWARD 2,000
Slams its claws to send a shockwave along the screen. Dodge in the gap, then shoot its eyes.
STAGE 2 · VENOM NEBULA
SPORE MOTHER
HP 600 · REWARD 2,000
Lets out a ring of 6 acid spores that drift toward you. Pop them early, then hit the pink eye.
STAGE 3 · IRON FLEET
RAIL CRUISER
HP 900 · REWARD 2,000
Sweeps across the top. A red line shows where its rail beam will fire a second later.
STAGE 4 · VOID RIFT
RIFT WARDEN
HP 1,200 · REWARD 2,000
Jumps between two portals and fires from the one you are not watching. Shoot it as it steps out.
```

---
## Board: BossIntro  (reference/screens/BossIntro.png)

```
WARNING
STAGE 2 BOSS
HIVE QUEEN ZYRA
Mother of every swarm. Shoot her crown eye right after she spawns larvae.
BOSS HULL
2,000 / 2,000
```

---
## Board: BossDefeat  (reference/screens/BossDefeat.png)

```
BOSS DEFEAT SEQUENCE
Shown with Rockmaw. Every boss uses the same five beats in its own colors. Total: about 4 seconds, then Stage Clear.
1 · FINAL HIT
0.0 s
Last shot lands. Boss flashes pure white, the game freezes for 0.15 s, and the music cuts.
2 · SHUDDER
0.15 – 1.2 s
Slow motion at 30%. Boss shakes, cracks glow, smoke pours out. All enemy bullets vanish.
3 · CHAIN BLASTS
1.2 – 2.4 s
Small explosions pop across the body one after another, each with a tiny screen shake and a boom.
4 · MEGA BLAST
2.4 – 3.0 s
One huge white-gold blast, a pink shockwave ring, full-screen flash and a big shake. Time returns to normal.
+5,000
BOSS DOWN!
S
5 · DEBRIS & LOOT
3.0 – 4.0 s
Fragments fall away, the score pops up, and 3 pickups drop. Magnet pulls them in, then Stage Clear starts.
Sound: hit crack → low rumble → boom stack → silence → fanfare
Camera: shake grows each beat, biggest at beat 4
Accessibility: white flashes can be turned off in Settings
```

---
## Board: Warnings  (reference/screens/Warnings.png)

```
MENU
WARNINGS & BOSS HEALTH
Every danger state has a look and a sound. Flashes are soft and turn off with the Flash Effects setting.
HULL
HULL LOW
LOW HULL
With 1 hull bar left: pip blinks twice a second, red edge glow pulses, alarm loops. Music drops 30%.
0.2 s flash
1 s blink
normal
HIT FEEDBACK
Jet flashes white, red edge frame, then 1 second of blinking. No hits count while blinking.
!
LASER LINE
2 seconds
INCOMING HAZARD
A gold arrow and a red lane show where a laser, wall or ram will arrive 2 seconds before it does.
ROCKMAW
PHASE 1 / 3
66%
33%
Glows gold when a weak point is open
BOSS HEALTH BAR
Full-width bar with 2 phase notches at 66% and 33%. Phase count is on the right.
PHASE 2
BOSS PHASE CHANGE
Boss flashes white, a shockwave ring clears all bullets, PHASE banner for 1.5 seconds. Players are safe meanwhile.
3 hits left
2 hits left
1 hit left
broken
SHIELD STATES
Ring colour drops from blue to gold to red as hits are used. At 1 hit left it blinks. Breaking it plays a glass shatter.
```
