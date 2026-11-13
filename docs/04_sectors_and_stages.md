# Sectors and stages

SECTOR = 10 stages (10 sectors, 100 stages). Pick a sector on SectorMap, then a stage on its SectorNN board. Stage detail boards (theme, enemies, mini-boss, boss) are listed in order: stages 1-10, 21-30, 41-50, 61-70. Other stages reuse them (see data/stages.json theme_ref). Data: sectors.json, stages.json, stage_themes.json, waves.json, balance.json.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: SectorMap  (reference/screens/SectorMap.png)

```
‹ HANGAR
SELECT SECTOR
10 sectors, 10 stages each. Pick a sector to see its stages. A sector opens when you clear stage 10 of the sector before it.
SECTOR 1
PLAYING
DAWN FRONTIER
STAGES 1–10
Tier 1 · Mk I
5 / 10 cleared
★ 18 / 30
1,000 first-clear credits
SECTOR 2
LOCKED
RED FRONTIER
STAGES 11–20
Tier 1 · Mk II
0 / 10 cleared
★ 0 / 30
1,200 first-clear credits
SECTOR 3
LOCKED
STEEL EXPANSE
STAGES 21–30
Tier 2 · Mk I
0 / 10 cleared
★ 0 / 30
1,500 first-clear credits
SECTOR 4
LOCKED
IRON EXPANSE
STAGES 31–40
Tier 2 · Mk II
0 / 10 cleared
★ 0 / 30
1,800 first-clear credits
SECTOR 5
LOCKED
SHADOW DEEP
STAGES 41–50
Tier 3 · Mk I
0 / 10 cleared
★ 0 / 30
2,200 first-clear credits
SECTOR 6
LOCKED
NIGHT DEEP
STAGES 51–60
Tier 3 · Mk II
0 / 10 cleared
★ 0 / 30
2,600 first-clear credits
SECTOR 7
LOCKED
OMEGA REACH
STAGES 61–70
Tier 4 · Mk I
0 / 10 cleared
★ 0 / 30
3,000 first-clear credits
SECTOR 8
LOCKED
FINAL REACH
STAGES 71–80
Tier 4 · Mk II
0 / 10 cleared
★ 0 / 30
3,500 first-clear credits
SECTOR 9
LOCKED
TWIN GATE
STAGES 81–90
Pair fights
0 / 10 cleared
★ 0 / 30
4,000 first-clear credits
SECTOR 10
LOCKED
CROWN GATE
STAGES 91–100
Pair fights
0 / 10 cleared
★ 0 / 30
4,500 first-clear credits
Sectors 1–8 · Tier 1 to Tier 4, each tier once as Mk I and once as Mk II
Sectors 9–10 · pair fights, two bosses together
All 100 stages · 25,300 credits on first clears
```

---
## Board: Sector01  (reference/screens/Sector01.png)

```
‹ SECTORS
SECTOR 1 · DAWN FRONTIER
Meet the first ten bosses. Stages 1–10 · Tier 1 · Mk I. Pick a stage to play it.
STAGE 1
CLEARED
EMBER BELT
Rockmaw
MK I
HP 1,200
+100
STAGE 2
CLEARED
VENOM NEBULA
Hive Queen Zyra
MK I
HP 2,000
+100
STAGE 3
CLEARED
IRON FLEET
Dreadnought Ω-9
MK I
HP 3,200
+100
STAGE 4
CLEARED
VOID RIFT
Void Emperor Kaal
MK I
HP 5,000
+100
STAGE 5
CLEARED
FROST REACH
Frost Colossus Glacius
MK I
HP 5,500
+100
STAGE 6
NEXT
STORM VEIL
Storm Serpent Voltra
MK I
HP 6,000
+100
STAGE 7
LOCKED
GEAR YARD
Clockwork Titan Tikka
MK I
HP 6,500
+100
STAGE 8
LOCKED
MIRROR MAZE
Mirror Mantis Spectra
MK I
HP 7,000
+100
STAGE 9
LOCKED
TIDE GATE
Tidal Kraken Maelo
MK I
HP 7,500
+100
STAGE 10
LOCKED
COMET RUN
Comet King Blazar
MK I
HP 8,000
+100
Each stage ends with its own boss.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector02  (reference/screens/Sector02.png)

```
‹ SECTORS
SECTOR 2 · RED FRONTIER
The same ten bosses return, stronger. Stages 11–20 · Tier 1 · Mk II. Pick a stage to play it.
STAGE 11
LOCKED
EMBER BELT
Rockmaw
MK II
HP 1,800
+120
STAGE 12
LOCKED
VENOM NEBULA
Hive Queen Zyra
MK II
HP 3,000
+120
STAGE 13
LOCKED
IRON FLEET
Dreadnought Ω-9
MK II
HP 4,800
+120
STAGE 14
LOCKED
VOID RIFT
Void Emperor Kaal
MK II
HP 7,500
+120
STAGE 15
LOCKED
FROST REACH
Frost Colossus Glacius
MK II
HP 8,250
+120
STAGE 16
LOCKED
STORM VEIL
Storm Serpent Voltra
MK II
HP 9,000
+120
STAGE 17
LOCKED
GEAR YARD
Clockwork Titan Tikka
MK II
HP 9,750
+120
STAGE 18
LOCKED
MIRROR MAZE
Mirror Mantis Spectra
MK II
HP 10,500
+120
STAGE 19
LOCKED
TIDE GATE
Tidal Kraken Maelo
MK II
HP 11,250
+120
STAGE 20
LOCKED
COMET RUN
Comet King Blazar
MK II
HP 12,000
+120
Mk II bosses: 1.5× health, bullets 20% faster, one extra attack, gold trim.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector03  (reference/screens/Sector03.png)

```
‹ SECTORS
SECTOR 3 · STEEL EXPANSE
Ten new bosses with new ways to fight. Stages 21–30 · Tier 2 · Mk I. Pick a stage to play it.
STAGE 21
LOCKED
AEGIS STATION
Sentinel Prime Aegis
MK I
HP 9,000
+150
STAGE 22
LOCKED
SILK NEBULA
Plasma Weaver Arachna
MK I
HP 9,750
+150
STAGE 23
LOCKED
HEAVY ORBIT
Gravity Golem Massa
MK I
HP 10,500
+150
STAGE 24
LOCKED
GHOST FLEET GRAVEYARD
Phantom Admiral Noctis
MK I
HP 11,250
+150
STAGE 25
LOCKED
SCRAPYARD BELT
Magnet Lord Ferrox
MK I
HP 12,000
+150
STAGE 26
LOCKED
TOXIC SWAMP MOON
Sludge Leviathan Bog
MK I
HP 12,750
+150
STAGE 27
LOCKED
RAINBOW REEF
Prism Dragon Chroma
MK I
HP 13,500
+150
STAGE 28
LOCKED
CLOCK TOWER VOID
Time Warden Chronos
MK I
HP 14,250
+150
STAGE 29
LOCKED
SIEGE LINE
Siege Fortress Bastion
MK I
HP 15,000
+150
STAGE 30
LOCKED
STARFALL FIELDS
Star Reaper Falx
MK I
HP 15,750
+150
Each stage ends with its own boss.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector04  (reference/screens/Sector04.png)

```
‹ SECTORS
SECTOR 4 · IRON EXPANSE
The Tier 2 bosses return, stronger. Stages 31–40 · Tier 2 · Mk II. Pick a stage to play it.
STAGE 31
LOCKED
AEGIS STATION
Sentinel Prime Aegis
MK II
HP 13,500
+180
STAGE 32
LOCKED
SILK NEBULA
Plasma Weaver Arachna
MK II
HP 14,625
+180
STAGE 33
LOCKED
HEAVY ORBIT
Gravity Golem Massa
MK II
HP 15,750
+180
STAGE 34
LOCKED
GHOST FLEET GRAVEYARD
Phantom Admiral Noctis
MK II
HP 16,875
+180
STAGE 35
LOCKED
SCRAPYARD BELT
Magnet Lord Ferrox
MK II
HP 18,000
+180
STAGE 36
LOCKED
TOXIC SWAMP MOON
Sludge Leviathan Bog
MK II
HP 19,125
+180
STAGE 37
LOCKED
RAINBOW REEF
Prism Dragon Chroma
MK II
HP 20,250
+180
STAGE 38
LOCKED
CLOCK TOWER VOID
Time Warden Chronos
MK II
HP 21,375
+180
STAGE 39
LOCKED
SIEGE LINE
Siege Fortress Bastion
MK II
HP 22,500
+180
STAGE 40
LOCKED
STARFALL FIELDS
Star Reaper Falx
MK II
HP 23,625
+180
Mk II bosses: 1.5× health, bullets 20% faster, one extra attack, gold trim.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector05  (reference/screens/Sector05.png)

```
‹ SECTORS
SECTOR 5 · SHADOW DEEP
Ten harder bosses. Tricks and traps. Stages 41–50 · Tier 3 · Mk I. Pick a stage to play it.
STAGE 41
LOCKED
HYDRA LAGOON
Hydra Core Hydrax
MK I
HP 17,000
+220
STAGE 42
LOCKED
METEOR THRONE
Meteor Queen Rubia
MK I
HP 18,000
+220
STAGE 43
LOCKED
ECLIPSE GATE
Eclipse Wraith Umbra
MK I
HP 19,000
+220
STAGE 44
LOCKED
LEGION DOCK
Drone Mother Legion
MK I
HP 20,000
+220
STAGE 45
LOCKED
MAGMA CORE
Lava Colossus Magmor
MK I
HP 21,000
+220
STAGE 46
LOCKED
CYBER DUNES
Cyber Scorpion Stingra
MK I
HP 22,000
+220
STAGE 47
LOCKED
FROZEN THRONE
Frozen Empress Glacira
MK I
HP 23,000
+220
STAGE 48
LOCKED
CARNIVAL OF CHAOS
Chaos Jester Wildcard
MK I
HP 24,000
+220
STAGE 49
LOCKED
NEUTRON FIELD
Neutron Behemoth Atlas
MK I
HP 25,000
+220
STAGE 50
LOCKED
NEBULA COURT
Nebula Overlord Zorak
MK I
HP 26,000
+220
Each stage ends with its own boss.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector06  (reference/screens/Sector06.png)

```
‹ SECTORS
SECTOR 6 · NIGHT DEEP
The Tier 3 bosses return, stronger. Stages 51–60 · Tier 3 · Mk II. Pick a stage to play it.
STAGE 51
LOCKED
HYDRA LAGOON
Hydra Core Hydrax
MK II
HP 25,500
+260
STAGE 52
LOCKED
METEOR THRONE
Meteor Queen Rubia
MK II
HP 27,000
+260
STAGE 53
LOCKED
ECLIPSE GATE
Eclipse Wraith Umbra
MK II
HP 28,500
+260
STAGE 54
LOCKED
LEGION DOCK
Drone Mother Legion
MK II
HP 30,000
+260
STAGE 55
LOCKED
MAGMA CORE
Lava Colossus Magmor
MK II
HP 31,500
+260
STAGE 56
LOCKED
CYBER DUNES
Cyber Scorpion Stingra
MK II
HP 33,000
+260
STAGE 57
LOCKED
FROZEN THRONE
Frozen Empress Glacira
MK II
HP 34,500
+260
STAGE 58
LOCKED
CARNIVAL OF CHAOS
Chaos Jester Wildcard
MK II
HP 36,000
+260
STAGE 59
LOCKED
NEUTRON FIELD
Neutron Behemoth Atlas
MK II
HP 37,500
+260
STAGE 60
LOCKED
NEBULA COURT
Nebula Overlord Zorak
MK II
HP 39,000
+260
Mk II bosses: 1.5× health, bullets 20% faster, one extra attack, gold trim.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector07  (reference/screens/Sector07.png)

```
‹ SECTORS
SECTOR 7 · OMEGA REACH
The ten toughest single bosses. Stages 61–70 · Tier 4 · Mk I. Pick a stage to play it.
STAGE 61
LOCKED
EVENT HORIZON
Black Hole Sovereign Singula
MK I
HP 28,000
+300
STAGE 62
LOCKED
SOLAR FORGE
Supernova Phoenix Solara
MK I
HP 29,500
+300
STAGE 63
LOCKED
BROKEN DIMENSION
Dimension Splitter Riftor
MK I
HP 31,000
+300
STAGE 64
LOCKED
MECHA ABYSS
Mecha Leviathan Ω-Prime
MK I
HP 32,500
+300
STAGE 65
LOCKED
QUANTUM LAB
Quantum Mage Qubit
MK I
HP 34,000
+300
STAGE 66
LOCKED
ABYSSAL VOID
Void Kraken Abyssa
MK I
HP 35,500
+300
STAGE 67
LOCKED
STORM CITADEL
Thunder God Tempest
MK I
HP 37,000
+300
STAGE 68
LOCKED
CRYSTAL CAVERNS
Crystal Titan Geode
MK I
HP 38,500
+300
STAGE 69
LOCKED
MIND MAZE
Mind Eater Cortex
MK I
HP 40,000
+300
STAGE 70
LOCKED
THRONE OF STARS
Cosmic Emperor Galaxor
MK I
HP 41,500
+300
Each stage ends with its own boss.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector08  (reference/screens/Sector08.png)

```
‹ SECTORS
SECTOR 8 · FINAL REACH
The Tier 4 bosses return, stronger. Stages 71–80 · Tier 4 · Mk II. Pick a stage to play it.
STAGE 71
LOCKED
EVENT HORIZON
Black Hole Sovereign Singula
MK II
HP 42,000
+350
STAGE 72
LOCKED
SOLAR FORGE
Supernova Phoenix Solara
MK II
HP 44,250
+350
STAGE 73
LOCKED
BROKEN DIMENSION
Dimension Splitter Riftor
MK II
HP 46,500
+350
STAGE 74
LOCKED
MECHA ABYSS
Mecha Leviathan Ω-Prime
MK II
HP 48,750
+350
STAGE 75
LOCKED
QUANTUM LAB
Quantum Mage Qubit
MK II
HP 51,000
+350
STAGE 76
LOCKED
ABYSSAL VOID
Void Kraken Abyssa
MK II
HP 53,250
+350
STAGE 77
LOCKED
STORM CITADEL
Thunder God Tempest
MK II
HP 55,500
+350
STAGE 78
LOCKED
CRYSTAL CAVERNS
Crystal Titan Geode
MK II
HP 57,750
+350
STAGE 79
LOCKED
MIND MAZE
Mind Eater Cortex
MK II
HP 60,000
+350
STAGE 80
LOCKED
THRONE OF STARS
Cosmic Emperor Galaxor
MK II
HP 62,250
+350
Mk II bosses: 1.5× health, bullets 20% faster, one extra attack, gold trim.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector09  (reference/screens/Sector09.png)

```
‹ SECTORS
SECTOR 9 · TWIN GATE
Two bosses at once. Tier 1 + Tier 2. Stages 81–90 · Pair fights. Pick a stage to play it.
STAGE 81
LOCKED
EMBER BELT
Rockmaw
+ Sentinel Prime Aegis
PAIR
HP 1,800 + 13,500
+400
STAGE 82
LOCKED
VENOM NEBULA
Hive Queen Zyra
+ Plasma Weaver Arachna
PAIR
HP 3,000 + 14,625
+400
STAGE 83
LOCKED
IRON FLEET
Dreadnought Ω-9
+ Gravity Golem Massa
PAIR
HP 4,800 + 15,750
+400
STAGE 84
LOCKED
VOID RIFT
Void Emperor Kaal
+ Phantom Admiral Noctis
PAIR
HP 7,500 + 16,875
+400
STAGE 85
LOCKED
FROST REACH
Frost Colossus Glacius
+ Magnet Lord Ferrox
PAIR
HP 8,250 + 18,000
+400
STAGE 86
LOCKED
STORM VEIL
Storm Serpent Voltra
+ Sludge Leviathan Bog
PAIR
HP 9,000 + 19,125
+400
STAGE 87
LOCKED
GEAR YARD
Clockwork Titan Tikka
+ Prism Dragon Chroma
PAIR
HP 9,750 + 20,250
+400
STAGE 88
LOCKED
MIRROR MAZE
Mirror Mantis Spectra
+ Time Warden Chronos
PAIR
HP 10,500 + 21,375
+400
STAGE 89
LOCKED
TIDE GATE
Tidal Kraken Maelo
+ Siege Fortress Bastion
PAIR
HP 11,250 + 22,500
+400
STAGE 90
LOCKED
COMET RUN
Comet King Blazar
+ Star Reaper Falx
PAIR
HP 12,000 + 23,625
+400
Two bosses fight together: Mk II health each, bullets 40% faster, a shared pair attack. When one falls, the other speeds up 30% for 10 s.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Sector10  (reference/screens/Sector10.png)

```
‹ SECTORS
SECTOR 10 · CROWN GATE
Two bosses at once. Tier 3 + Tier 4. Stages 91–100 · Pair fights. Pick a stage to play it.
STAGE 91
LOCKED
HYDRA LAGOON
Hydra Core Hydrax
+ Black Hole Sovereign Singula
PAIR
HP 25,500 + 42,000
+450
STAGE 92
LOCKED
METEOR THRONE
Meteor Queen Rubia
+ Supernova Phoenix Solara
PAIR
HP 27,000 + 44,250
+450
STAGE 93
LOCKED
ECLIPSE GATE
Eclipse Wraith Umbra
+ Dimension Splitter Riftor
PAIR
HP 28,500 + 46,500
+450
STAGE 94
LOCKED
LEGION DOCK
Drone Mother Legion
+ Mecha Leviathan Ω-Prime
PAIR
HP 30,000 + 48,750
+450
STAGE 95
LOCKED
MAGMA CORE
Lava Colossus Magmor
+ Quantum Mage Qubit
PAIR
HP 31,500 + 51,000
+450
STAGE 96
LOCKED
CYBER DUNES
Cyber Scorpion Stingra
+ Void Kraken Abyssa
PAIR
HP 33,000 + 53,250
+450
STAGE 97
LOCKED
FROZEN THRONE
Frozen Empress Glacira
+ Thunder God Tempest
PAIR
HP 34,500 + 55,500
+450
STAGE 98
LOCKED
CARNIVAL OF CHAOS
Chaos Jester Wildcard
+ Crystal Titan Geode
PAIR
HP 36,000 + 57,750
+450
STAGE 99
LOCKED
NEUTRON FIELD
Neutron Behemoth Atlas
+ Mind Eater Cortex
PAIR
HP 37,500 + 60,000
+450
STAGE 100
LOCKED
NEBULA COURT
Nebula Overlord Zorak
+ Cosmic Emperor Galaxor
PAIR
HP 39,000 + 62,250
+450
Two bosses fight together: Mk II health each, bullets 40% faster, a shared pair attack. When one falls, the other speeds up 30% for 10 s.
First clear pays the credits shown. Clearing the same stage again pays +1.
```

---
## Board: Stage01  (reference/screens/Stage01.png)

```
STAGE 01 · TIER 1
EMBER BELT
A burning asteroid field at the edge of the galaxy. Learn to dodge, shoot and grab power-ups.
SAME STAGE, TINTED, IN
MK II · STAGE 11
PAIR · STAGE 81
MOLTEN ASTEROID
OBSTACLE · 3 HITS
Drifts down slowly. Breaks into 2 small rocks when destroyed.
SPIKE MINE
HAZARD · 1 HIT
Floats in place. Blinks red and explodes if you fly inside its ring.
SCOUT DRONE
ENEMY FLIGHT · 2 HITS
Flies in zig-zag groups of 3 and fires single red shots.
FIRE COMET
HAZARD · UNBREAKABLE
A warning line flashes, then a comet streaks across. Just dodge it.
BOSS 1
HP 1,200 · 2 PHASES
Rockmaw
MK II in stage 11
HP 1,800
FIGHTS · Rams down the screen and spits rock chunks in fans.
WEAK POINT · Magma core in its mouth. Opens after each Magma Spit.
MK II ADDS · Rock rain from above, faster ram.
MID-STAGE · Mini-boss Cinder Crab
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage02  (reference/screens/Stage02.png)

```
STAGE 02 · TIER 1
VENOM NEBULA
A toxic green cloud where an alien hive breeds swarms. Enemies come in packs.
SAME STAGE, TINTED, IN
MK II · STAGE 12
PAIR · STAGE 82
STINGER SWARM
ENEMY FLIGHT · 1 HIT EACH
Bug fighters in V-formation. They break apart and dive when hit.
ACID SPORE
HAZARD · 2 HITS
Floats slowly. Pops into 8 acid droplets - shoot it from far away.
NEBULA EEL
ENEMY · 6 HITS (HEAD ONLY)
Long serpent that weaves in a wave. Its body blocks your bullets.
LEECH POD
ENEMY · 3 HITS
Grabs your jet and slows it by 40% until you shake it off.
BOSS 2
HP 2,000 · 2 PHASES
Hive Queen Zyra
MK II in stage 12
HP 3,000
FIGHTS · Spawns drones in waves and fires acid arcs.
WEAK POINT · Crown eye. Only opens right after Larva Spawn.
MK II ADDS · Drones come back once after dying.
MID-STAGE · Mini-boss Spore Mother
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage03  (reference/screens/Stage03.png)

```
STAGE 03 · TIER 1
IRON FLEET
A robot armada parked around a giant space station. Fly between hulls, turrets and laser gates.
SAME STAGE, TINTED, IN
MK II · STAGE 13
PAIR · STAGE 83
HULL TURRET
ENEMY · 4 HITS
Bolted onto ship hulls. Turns to aim at you and fires bursts of 3.
LASER GATE
OBSTACLE · DESTROY BOTH POSTS
A red beam blinks on and off (ON 2s, OFF 1.5s). Time your pass or shoot the posts.
KAMIKAZE BOT
ENEMY · 1 HIT
Locks on (red target on you) for 1s, then rockets straight at you.
IRON GUNSHIP
ENEMY FLIGHT · 8 HITS
Heavy fighter facing down at you. Fires a 3-way spread every 2s.
BOSS 3
HP 3,200 · 2 PHASES
Dreadnought Ω-9
MK II in stage 13
HP 4,800
FIGHTS · Armored hull with missile barrages and laser gates.
WEAK POINT · Four turrets first, then the blue reactor core.
MK II ADDS · Adds a sweeping laser wall.
MID-STAGE · Mini-boss Rail Cruiser
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage04  (reference/screens/Stage04.png)

```
STAGE 04 · TIER 1
VOID RIFT
The edge of a black hole where light bends. Gravity pulls you and your bullets.
SAME STAGE, TINTED, IN
MK II · STAGE 14
PAIR · STAGE 84
VOID WRAITH
ENEMY · 3 HITS
Fades in and out. You can only hit it while its eyes glow.
GRAVITY WELL
HAZARD · UNBREAKABLE
Pulls your jet and bends your bullets toward its center.
SHADOW ACE
ENEMY FLIGHT · 10 HITS
A dark copy of YOUR chosen jet. Mirrors your moves and shots.
RIFT CRYSTAL
OBSTACLE · 4 HITS
Shatters into 4 homing shards. Keep moving after you break it.
BOSS 4
HP 5,000 · 3 PHASES
Void Emperor Kaal
MK II in stage 14
HP 7,500
FIGHTS · Pulls bullets inward and makes shadow clones.
WEAK POINT · Heart crystal. Exposed when both hand orbs are destroyed.
MK II ADDS · Two clones fire at once.
MID-STAGE · Mini-boss Rift Warden
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage05  (reference/screens/Stage05.png)

```
STAGE 05 · TIER 1
FROST REACH
A frozen belt of icebergs. The cold slows everything, including you.
SAME STAGE, TINTED, IN
MK II · STAGE 15
PAIR · STAGE 85
ICICLE SHARD
OBSTACLE · 2 HITS
Hangs in place and drops when you fly under it.
FROST SPRITE
ENEMY · 2 HITS
Fires slow blue shots that chill your jet.
SNOW CLOUD
HAZARD · UNBREAKABLE
Slows your jet while you are inside.
ICE TURRET
ENEMY · 4 HITS
Fires bursts of 3 icicles.
BOSS 5
HP 5,500 · 2 PHASES
Frost Colossus Glacius
MK II in stage 15
HP 8,250
FIGHTS · Ice fields slow your jet. Icicle volleys.
WEAK POINT · Chest crystal after a fist slam.
MK II ADDS · Fields cover half the screen.
MID-STAGE · Mini-boss Ice Warden
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage06  (reference/screens/Stage06.png)

```
STAGE 06 · TIER 1
STORM VEIL
A sky of living lightning. Watch for the glowing orbs.
SAME STAGE, TINTED, IN
MK II · STAGE 16
PAIR · STAGE 86
SPARK ORB
HAZARD · 1 HIT
Orbs come in pairs joined by a lightning line.
STORM WISP
ENEMY · 2 HITS
Darts side to side and fires small bolts.
CHARGED CLOUD
OBSTACLE · 3 HITS
Drifts down and zaps nearby when shot.
STATIC MINE
HAZARD · 1 HIT
Bursts into a ring of sparks.
BOSS 6
HP 6,000 · 2 PHASES
Storm Serpent Voltra
MK II in stage 16
HP 9,000
FIGHTS · Lightning chains jump between warning orbs.
WEAK POINT · Head, right after each lightning chain.
MK II ADDS · Chains bounce off the screen edges.
MID-STAGE · Mini-boss Thunder Hawk
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage07  (reference/screens/Stage07.png)

```
STAGE 07 · TIER 1
GEAR YARD
A giant factory of moving parts. Everything runs on a beat.
SAME STAGE, TINTED, IN
MK II · STAGE 17
PAIR · STAGE 87
SPINNING COG
OBSTACLE · UNBREAKABLE
Rolls slowly across the screen on a track.
WIND-UP SOLDIER
ENEMY · 3 HITS
Marches in lines and fires on the beat.
PISTON WALL
OBSTACLE · UNBREAKABLE
Slams shut and open. Fly through the gap.
STEAM VENT
HAZARD · UNBREAKABLE
Puffs hot steam after a short hiss.
BOSS 7
HP 6,500 · 2 PHASES
Clockwork Titan Tikka
MK II in stage 17
HP 9,750
FIGHTS · Spinning gear blades. Bullets come in a rhythm.
WEAK POINT · Clock face when the gears pause.
MK II ADDS · Rhythm changes mid-attack.
MID-STAGE · Mini-boss Cog Crusher
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage08  (reference/screens/Stage08.png)

```
STAGE 08 · TIER 1
MIRROR MAZE
Walls of glass bounce every shot. Aim with care.
SAME STAGE, TINTED, IN
MK II · STAGE 18
PAIR · STAGE 88
MIRROR PANEL
OBSTACLE · UNBREAKABLE
Bounces your shots back at an angle.
REFLECTION DRONE
ENEMY · 2 HITS
Copies your left and right moves.
SHARD RAIN
HAZARD · 1 HIT
Glass falls from the top in a zig-zag.
PRISM TURRET
ENEMY · 4 HITS
Splits one shot into three beams.
BOSS 8
HP 7,000 · 2 PHASES
Mirror Mantis Spectra
MK II in stage 18
HP 10,500
FIGHTS · Reflects your shots and copies your last move.
WEAK POINT · Back of the neck. Front is reflective.
MK II ADDS · Reflects at wider angles.
MID-STAGE · Mini-boss Glass Twin
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage09  (reference/screens/Stage09.png)

```
STAGE 09 · TIER 1
TIDE GATE
A space ocean full of bubbles and currents.
SAME STAGE, TINTED, IN
MK II · STAGE 19
PAIR · STAGE 89
BUBBLE MINE
HAZARD · 1 HIT
Floats up and pops into 4 small bubbles.
EEL SCOUT
ENEMY · 3 HITS
Swims in waves and fires sparks.
WATER WALL
OBSTACLE · UNBREAKABLE
Slow column of water with one gap.
CURRENT STREAM
HAZARD · UNBREAKABLE
Pushes your jet sideways.
BOSS 9
HP 7,500 · 2 PHASES
Tidal Kraken Maelo
MK II in stage 19
HP 11,250
FIGHTS · Tentacles sweep in from the sides. Bubble bullets.
WEAK POINT · Eyes when the tentacles retreat.
MK II ADDS · Adds a whirlpool that pulls you in.
MID-STAGE · Mini-boss Reef Crab
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage10  (reference/screens/Stage10.png)

```
STAGE 10 · TIER 1
COMET RUN
A fast lane through a comet shower. The last stage of the first set.
SAME STAGE, TINTED, IN
MK II · STAGE 20
PAIR · STAGE 90
FIRE COMET
HAZARD · UNBREAKABLE
Warning line first, then a fast streak.
CINDER DRONE
ENEMY · 3 HITS
Leaves a short fire trail as it flies.
MAGMA ROCK
OBSTACLE · 5 HITS
Splits into 3 burning pieces.
FLARE TURRET
ENEMY · 5 HITS
Fires a fan of 5 fireballs.
BOSS 10
HP 8,000 · 2 PHASES
Comet King Blazar
MK II in stage 20
HP 12,000
FIGHTS · Dashes across the screen leaving fire trails.
WEAK POINT · Head at the end of each dash.
MK II ADDS · Double dash. Trails last longer.
MID-STAGE · Mini-boss Meteor Hound
First clear up to +100 credits
Repeat clear +1
```

---
## Board: Stage21  (reference/screens/Stage21.png)

```
STAGE 21 · TIER 2
AEGIS STATION
An armored space station. Most enemies carry shields.
SAME STAGE, TINTED, IN
MK II · STAGE 31
PAIR · STAGE 81
SHIELD DRONE
ENEMY · 4 HITS
Front is armored. Shoot it from the side.
LASER GATE
HAZARD · UNBREAKABLE
Two posts with a beam. Wait for the gap.
HULL PLATE
OBSTACLE · 6 HITS
Floating plates that block the lane.
PLASMA TURRET
ENEMY · 6 HITS
Locks on, then fires a thick beam.
BOSS 21
HP 9,000 · 3 PHASES
Sentinel Prime Aegis
MK II in stage 31
HP 13,500
FIGHTS · Rotating shield plates. Only the back is open.
WEAK POINT · Back plate once the shields rotate away.
MK II ADDS · Plates break off and fly at you.
MID-STAGE · Mini-boss Plate Guard
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage22  (reference/screens/Stage22.png)

```
STAGE 22 · TIER 2
SILK NEBULA
A purple cloud full of glowing threads.
SAME STAGE, TINTED, IN
MK II · STAGE 32
PAIR · STAGE 82
WEB NODE
OBSTACLE · 4 HITS
Anchors a line of web. Break it to open the path.
THREAD SPIDER
ENEMY · 4 HITS
Drops down on a line and sprays small shots.
SILK STRAND
HAZARD · UNBREAKABLE
A glowing line that burns on touch.
COCOON POD
OBSTACLE · 5 HITS
Hatches 3 baby spiders when shot.
BOSS 22
HP 9,750 · 3 PHASES
Plasma Weaver Arachna
MK II in stage 32
HP 14,625
FIGHTS · Laser webs close in like a grid.
WEAK POINT · Hourglass mark on the abdomen.
MK II ADDS · Web moves and closes faster.
MID-STAGE · Mini-boss Thread Spinner
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage23  (reference/screens/Stage23.png)

```
STAGE 23 · TIER 2
HEAVY ORBIT
Giant moons with strong pull. Bullets curve.
SAME STAGE, TINTED, IN
MK II · STAGE 33
PAIR · STAGE 83
GRAVITY WELL
HAZARD · UNBREAKABLE
Bends your bullets and your jet toward it.
MOON CHUNK
OBSTACLE · 8 HITS
Heavy rock that drifts in an orbit.
TETHER DRONE
ENEMY · 4 HITS
Pulls you with a beam. Shoot the line.
ORBIT CANNON
ENEMY · 6 HITS
Circles a moon and fires inward.
BOSS 23
HP 10,500 · 3 PHASES
Gravity Golem Massa
MK II in stage 33
HP 15,750
FIGHTS · Gravity wells pull bullets and your jet.
WEAK POINT · Chest vortex when the wells close.
MK II ADDS · Wells last longer and can stack.
MID-STAGE · Mini-boss Moon Smasher
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage24  (reference/screens/Stage24.png)

```
STAGE 24 · TIER 2
GHOST FLEET GRAVEYARD
Broken warships drift in the fog. Some are not empty.
SAME STAGE, TINTED, IN
MK II · STAGE 34
PAIR · STAGE 84
WRECK HULL
OBSTACLE · UNBREAKABLE
Drifting ship pieces. Slip between them.
GHOST FIGHTER
ENEMY · 3 HITS
Fades out and attacks from behind.
SOUL LANTERN
HAZARD · 1 HIT
Follows you slowly and explodes in a ring.
CURSED CANNON
ENEMY · 6 HITS
Fires purple shots that fade then return.
BOSS 24
HP 11,250 · 3 PHASES
Phantom Admiral Noctis
MK II in stage 34
HP 16,875
FIGHTS · Cloaks, teleports and strikes from behind.
WEAK POINT · Skull face right after a teleport.
MK II ADDS · Leaves decoys that explode.
MID-STAGE · Mini-boss Wreck Reaper
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage25  (reference/screens/Stage25.png)

```
STAGE 25 · TIER 2
SCRAPYARD BELT
A junk belt with magnets that grab loose metal.
SAME STAGE, TINTED, IN
MK II · STAGE 35
PAIR · STAGE 85
MAGNET MINE
HAZARD · 2 HITS
Pulls nearby bullets and your jet.
SCRAP BOT
ENEMY · 4 HITS
Throws scrap pieces in an arc.
JUNK CLUMP
OBSTACLE · 6 HITS
Chunks of metal stuck together.
CRANE ARM
OBSTACLE · UNBREAKABLE
Swings across the screen on a slow beat.
BOSS 25
HP 12,000 · 3 PHASES
Magnet Lord Ferrox
MK II in stage 35
HP 18,000
FIGHTS · Pulls you toward him and flings metal scrap.
WEAK POINT · Both pole tips at the same time.
MK II ADDS · Pull flips to push without warning.
MID-STAGE · Mini-boss Iron Hoarder
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage26  (reference/screens/Stage26.png)

```
STAGE 26 · TIER 2
TOXIC SWAMP MOON
A green moon covered in swamp and sludge.
SAME STAGE, TINTED, IN
MK II · STAGE 36
PAIR · STAGE 86
SLIME BLOB
ENEMY · 3 HITS
Splits into two smaller blobs when shot.
TOXIC POOL
HAZARD · UNBREAKABLE
Stays on screen and burns on touch.
SPORE POD
OBSTACLE · 4 HITS
Pops into a cloud of 8 slow spores.
BOG TURRET
ENEMY · 6 HITS
Spits goo that leaves a small puddle.
BOSS 26
HP 12,750 · 3 PHASES
Sludge Leviathan Bog
MK II in stage 36
HP 19,125
FIGHTS · Leaves toxic pools that stay on screen.
WEAK POINT · Central mouth while it is open.
MK II ADDS · Pools split into small slimes.
MID-STAGE · Mini-boss Slime Mother
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage27  (reference/screens/Stage27.png)

```
STAGE 27 · TIER 2
RAINBOW REEF
Crystal coral that glows in every colour.
SAME STAGE, TINTED, IN
MK II · STAGE 37
PAIR · STAGE 87
PRISM CRYSTAL
OBSTACLE · 5 HITS
Splits your bullets into 3 colours.
COLOUR SPRITE
ENEMY · 3 HITS
Fires red, yellow, green, blue shots in order.
BEAM CORAL
HAZARD · UNBREAKABLE
Short beams that blink on and off.
REEF RAY
ENEMY · 5 HITS
Glides in a wide arc and fires fans.
BOSS 27
HP 13,500 · 3 PHASES
Prism Dragon Chroma
MK II in stage 37
HP 20,250
FIGHTS · Rainbow beams fire in a fixed colour order.
WEAK POINT · Forehead jewel between beam colours.
MK II ADDS · Random order, wider beams.
MID-STAGE · Mini-boss Colour Sprite
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage28  (reference/screens/Stage28.png)

```
STAGE 28 · TIER 2
CLOCK TOWER VOID
A tower of clocks floating in empty space.
SAME STAGE, TINTED, IN
MK II · STAGE 38
PAIR · STAGE 88
PENDULUM
OBSTACLE · UNBREAKABLE
Swings across the screen on a steady beat.
TICK DRONE
ENEMY · 3 HITS
Fires one shot every second, always on time.
SLOW FIELD
HAZARD · UNBREAKABLE
A ring that slows your bullets inside.
CLOCK BOMB
HAZARD · 1 HIT
Counts down from 3 and explodes.
BOSS 28
HP 14,250 · 3 PHASES
Time Warden Chronos
MK II in stage 38
HP 21,375
FIGHTS · Slows your bullets and rewinds his own.
WEAK POINT · Eye at the neck when the clock stops.
MK II ADDS · Rewinds your jet once per phase.
MID-STAGE · Mini-boss Pendulum
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage29  (reference/screens/Stage29.png)

```
STAGE 29 · TIER 2
SIEGE LINE
A battle line of walls and cannons. Break through.
SAME STAGE, TINTED, IN
MK II · STAGE 39
PAIR · STAGE 89
WALL SEGMENT
OBSTACLE · 8 HITS
Blocks a lane until it is destroyed.
SIEGE CANNON
ENEMY · 7 HITS
Fires slow, huge shells.
SHIELD CARRIER
ENEMY · 5 HITS
Protects nearby enemies with a bubble.
BARRAGE MINE
HAZARD · 2 HITS
Bursts into 6 slow shells.
BOSS 29
HP 15,000 · 3 PHASES
Siege Fortress Bastion
MK II in stage 39
HP 22,500
FIGHTS · Six turrets to break, then the core opens.
WEAK POINT · Core inside the gate after the 6 turrets.
MK II ADDS · Turrets repair unless broken together.
MID-STAGE · Mini-boss Gate Crusher
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage30  (reference/screens/Stage30.png)

```
STAGE 30 · TIER 2
STARFALL FIELDS
Falling stars everywhere. Some are bullets.
SAME STAGE, TINTED, IN
MK II · STAGE 40
PAIR · STAGE 90
FALLING STAR
HAZARD · 1 HIT
Streaks down in fast groups of 3.
STAR SCYTHE
ENEMY · 4 HITS
Sweeps in an arc and leaves star bullets.
NOVA ROCK
OBSTACLE · 6 HITS
Bursts into 5 stars when destroyed.
SKY LANTERN
ENEMY · 5 HITS
Floats up slowly and fires in all directions.
BOSS 30
HP 15,750 · 3 PHASES
Star Reaper Falx
MK II in stage 40
HP 23,625
FIGHTS · Huge scythe arcs sweep across the screen.
WEAK POINT · Skull under the hood after each sweep.
MK II ADDS · Arcs leave star bullets behind.
MID-STAGE · Mini-boss Dusk Reaper
First clear up to +150 credits
Repeat clear +1
```

---
## Board: Stage41  (reference/screens/Stage41.png)

```
STAGE 41 · TIER 3
HYDRA LAGOON
A swamp lagoon with too many heads watching.
SAME STAGE, TINTED, IN
MK II · STAGE 51
PAIR · STAGE 91
HYDRA PUP
ENEMY · 5 HITS
Pops up from below and snaps at you.
POISON FOG
HAZARD · UNBREAKABLE
Hides the screen edges for 3 seconds.
NEST EGG
OBSTACLE · 6 HITS
Hatches a Hydra Pup when shot.
LAGOON TURRET
ENEMY · 8 HITS
Spits 3 venom blobs in a spread.
BOSS 41
HP 17,000 · 3 PHASES
Hydra Core Hydrax
MK II in stage 51
HP 25,500
FIGHTS · Three heads, each with its own attack.
WEAK POINT · Core, once the 3 heads are down.
MK II ADDS · Heads grow back once, faster.
MID-STAGE · Mini-boss Spawn Head
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage42  (reference/screens/Stage42.png)

```
STAGE 42 · TIER 3
METEOR THRONE
A burning throne room in the middle of a meteor storm.
SAME STAGE, TINTED, IN
MK II · STAGE 52
PAIR · STAGE 92
TARGET MARK
HAZARD · UNBREAKABLE
A red ring. A meteor lands there in 1 second.
ROCK KNIGHT
ENEMY · 6 HITS
Armoured with rock. Hit the glowing joint.
FALLING MOON
OBSTACLE · 10 HITS
Huge rock that breaks into 4.
EMBER TURRET
ENEMY · 8 HITS
Fires a slow fire spiral.
BOSS 42
HP 18,000 · 3 PHASES
Meteor Queen Rubia
MK II in stage 52
HP 27,000
FIGHTS · Marked spots get hit by falling meteors.
WEAK POINT · Crown stones. Break all three.
MK II ADDS · Meteors split into three.
MID-STAGE · Mini-boss Rock Courtier
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage43  (reference/screens/Stage43.png)

```
STAGE 43 · TIER 3
ECLIPSE GATE
A gate where light and dark take turns.
SAME STAGE, TINTED, IN
MK II · STAGE 53
PAIR · STAGE 93
LIGHT ORB
HAZARD · 1 HIT
Only harms you while the field is dark.
SHADE FIGHTER
ENEMY · 5 HITS
Can be hit only while the field is light.
PHASE WALL
OBSTACLE · UNBREAKABLE
Solid in one phase, ghost in the other.
ECLIPSE EYE
ENEMY · 8 HITS
Opens when the field changes and fires a ring.
BOSS 43
HP 19,000 · 3 PHASES
Eclipse Wraith Umbra
MK II in stage 53
HP 28,500
FIGHTS · Switches light and dark. Only hurt in light.
WEAK POINT · Face, only while the light side is up.
MK II ADDS · Switches faster. Bullets match the phase.
MID-STAGE · Mini-boss Dusk Moth
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage44  (reference/screens/Stage44.png)

```
STAGE 44 · TIER 3
LEGION DOCK
A drone factory. They come out in neat lines.
SAME STAGE, TINTED, IN
MK II · STAGE 54
PAIR · STAGE 94
MICRO DRONE
ENEMY · 1 HIT
Comes in groups of 12 in shapes.
DOCK ARM
OBSTACLE · UNBREAKABLE
Swings in and out of the lane.
HANGAR DOOR
OBSTACLE · 8 HITS
Opens to release a drone wave.
SIGNAL BEACON
ENEMY · 6 HITS
Marks you. Drones fly to the mark.
BOSS 44
HP 20,000 · 3 PHASES
Drone Mother Legion
MK II in stage 54
HP 30,000
FIGHTS · Hundreds of tiny drones fly in formations.
WEAK POINT · Central eye while drones are out.
MK II ADDS · Formations chase the pilot.
MID-STAGE · Mini-boss Drone Captain
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage45  (reference/screens/Stage45.png)

```
STAGE 45 · TIER 3
MAGMA CORE
Inside a living volcano. The floor is lava.
SAME STAGE, TINTED, IN
MK II · STAGE 55
PAIR · STAGE 95
LAVA COLUMN
HAZARD · UNBREAKABLE
Warning glow, then a tall eruption.
MAGMA IMP
ENEMY · 5 HITS
Hops across lava and throws embers.
OBSIDIAN SLAB
OBSTACLE · 10 HITS
Hard rock plates that block the lane.
CINDER CANNON
ENEMY · 8 HITS
Fires a 7 ball fan then reloads.
BOSS 45
HP 21,000 · 3 PHASES
Lava Colossus Magmor
MK II in stage 55
HP 31,500
FIGHTS · Lava rises from below. Eruption columns.
WEAK POINT · Lava cracks on the chest.
MK II ADDS · Lava fills half the screen.
MID-STAGE · Mini-boss Ember Giant
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage46  (reference/screens/Stage46.png)

```
STAGE 46 · TIER 3
CYBER DUNES
A desert of metal sand and robot nests.
SAME STAGE, TINTED, IN
MK II · STAGE 56
PAIR · STAGE 96
SAND SPIKE
HAZARD · 1 HIT
Rises out of the sand after a ripple.
SCRAP SCORPION
ENEMY · 6 HITS
Curls its tail and fires a laser.
BURIED MINE
HAZARD · 2 HITS
Pops up when you pass over it.
DUNE TURRET
ENEMY · 8 HITS
Rotates and fires a rolling stream.
BOSS 46
HP 22,000 · 3 PHASES
Cyber Scorpion Stingra
MK II in stage 56
HP 33,000
FIGHTS · Tail laser sweeps. Claws snap across lanes.
WEAK POINT · Stinger at the tail tip.
MK II ADDS · Tail fires twice per sweep.
MID-STAGE · Mini-boss Sand Stinger
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage47  (reference/screens/Stage47.png)

```
STAGE 47 · TIER 3
FROZEN THRONE
A palace of ice. The cold blocks your special move.
SAME STAGE, TINTED, IN
MK II · STAGE 57
PAIR · STAGE 97
FREEZE FIELD
HAZARD · UNBREAKABLE
Locks your Special bar while you are in it.
ICE GUARD
ENEMY · 6 HITS
Throws ice spears in a fan.
CRYSTAL PILLAR
OBSTACLE · 12 HITS
Reflects your bullets sideways.
BLIZZARD VENT
HAZARD · UNBREAKABLE
Pushes you across the screen.
BOSS 47
HP 23,000 · 3 PHASES
Frozen Empress Glacira
MK II in stage 57
HP 34,500
FIGHTS · Freeze beams block your Special for 3 seconds.
WEAK POINT · Snowflake chest gem when she opens her wings.
MK II ADDS · Also blocks your bombs.
MID-STAGE · Mini-boss Frost Maiden
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage48  (reference/screens/Stage48.png)

```
STAGE 48 · TIER 3
CARNIVAL OF CHAOS
A floating circus. Nothing happens the same way twice.
SAME STAGE, TINTED, IN
MK II · STAGE 58
PAIR · STAGE 98
JACK-IN-BOX
ENEMY · 5 HITS
Pops open and fires in a random direction.
CARD BLADE
HAZARD · 1 HIT
Spinning card that bounces on the edges.
TRICK BALLOON
OBSTACLE · 3 HITS
Pops into a surprise: shots, coins or nothing.
CIRCUS CANNON
ENEMY · 8 HITS
Fires confetti bullets in random patterns.
BOSS 48
HP 24,000 · 3 PHASES
Chaos Jester Wildcard
MK II in stage 58
HP 36,000
FIGHTS · Picks a random attack every few seconds.
WEAK POINT · The half-mask. Hit it after each trick.
MK II ADDS · Chains two attacks together.
MID-STAGE · Mini-boss Card Dealer
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage49  (reference/screens/Stage49.png)

```
STAGE 49 · TIER 3
NEUTRON FIELD
A field of dense stars that send out waves.
SAME STAGE, TINTED, IN
MK II · STAGE 59
PAIR · STAGE 99
PULSE STAR
HAZARD · UNBREAKABLE
Sends out rings every 2 seconds.
NEUTRON SHARD
OBSTACLE · 8 HITS
Heavy and slow. Drops fast sparks.
GRAVITY ROCK
OBSTACLE · 12 HITS
Pulls bullets into its centre.
STAR DRONE
ENEMY · 6 HITS
Orbits a pulse star and fires inward.
BOSS 49
HP 25,000 · 3 PHASES
Neutron Behemoth Atlas
MK II in stage 59
HP 37,500
FIGHTS · Rolls across the screen with shockwave rings.
WEAK POINT · Single eye between shockwaves.
MK II ADDS · Rings bounce back from the walls.
MID-STAGE · Mini-boss Pulse Ball
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage50  (reference/screens/Stage50.png)

```
STAGE 50 · TIER 3
NEBULA COURT
The home of the Nebula Overlord. All earlier tricks return.
SAME STAGE, TINTED, IN
MK II · STAGE 60
PAIR · STAGE 100
COURT GUARD
ENEMY · 8 HITS
Uses a move from an earlier stage.
MAGIC SIGIL
HAZARD · UNBREAKABLE
Glows, then bursts into spirals.
NEBULA GATE
OBSTACLE · UNBREAKABLE
Opens and closes in a pattern.
ARCANE TURRET
ENEMY · 9 HITS
Fires 4 different bullet types in a loop.
BOSS 50
HP 26,000 · 3 PHASES
Nebula Overlord Zorak
MK II in stage 60
HP 39,000
FIGHTS · Uses a move from three earlier bosses.
WEAK POINT · Third eye on the forehead.
MK II ADDS · Uses moves from five earlier bosses.
MID-STAGE · Mini-boss Court Mage
First clear up to +220 credits
Repeat clear +1
```

---
## Board: Stage61  (reference/screens/Stage61.png)

```
STAGE 61 · TIER 4
EVENT HORIZON
The edge of a black hole. Everything leans inward.
SAME STAGE, TINTED, IN
MK II · STAGE 71
PAIR · STAGE 91
ACCRETION RING
HAZARD · UNBREAKABLE
Spinning ring of light that burns on touch.
DEBRIS SWARM
OBSTACLE · 3 HITS
Fast rocks pulled into the centre.
GRAVITY EEL
ENEMY · 8 HITS
Swims in spirals and fires pulses.
SINGULARITY POD
HAZARD · 3 HITS
Opens a small pull zone for 3 seconds.
BOSS 61
HP 28,000 · 4 PHASES
Black Hole Sovereign Singula
MK II in stage 71
HP 42,000
FIGHTS · Drags the arena inward. Bullet rings orbit.
WEAK POINT · Slit eye when the disc slows.
MK II ADDS · Ring spin reverses.
MID-STAGE · Mini-boss Gravity Eel
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage62  (reference/screens/Stage62.png)

```
STAGE 62 · TIER 4
SOLAR FORGE
The inside of a star. Heat waves and fire birds.
SAME STAGE, TINTED, IN
MK II · STAGE 72
PAIR · STAGE 92
FLARE WAVE
HAZARD · UNBREAKABLE
Wall of fire with one gap.
FIRE FINCH
ENEMY · 6 HITS
Dives from above in a V shape.
SOLAR PLATE
OBSTACLE · 12 HITS
Melts after 3 seconds if not shot.
FORGE CANNON
ENEMY · 10 HITS
Fires molten spirals.
BOSS 62
HP 29,500 · 4 PHASES
Supernova Phoenix Solara
MK II in stage 72
HP 44,250
FIGHTS · Bursts into flames and rises once from defeat.
WEAK POINT · Chest star, then again after she rises.
MK II ADDS · Rises twice.
MID-STAGE · Mini-boss Ember Bird
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage63  (reference/screens/Stage63.png)

```
STAGE 63 · TIER 4
BROKEN DIMENSION
Space is torn in pieces. Portals link the halves.
SAME STAGE, TINTED, IN
MK II · STAGE 73
PAIR · STAGE 93
RIFT PORTAL
HAZARD · UNBREAKABLE
Pulls you through to the other half.
RIFT HOUND
ENEMY · 8 HITS
Jumps through portals to surprise you.
SPLIT WALL
OBSTACLE · UNBREAKABLE
A wall that exists in only one half.
TEAR TURRET
ENEMY · 10 HITS
Fires from one half to the other.
BOSS 63
HP 31,000 · 4 PHASES
Dimension Splitter Riftor
MK II in stage 73
HP 46,500
FIGHTS · Splits the screen in two. Portals link the halves.
WEAK POINT · Both portal eyes at the same time.
MK II ADDS · Portals move and swap sides.
MID-STAGE · Mini-boss Rift Hound
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage64  (reference/screens/Stage64.png)

```
STAGE 64 · TIER 4
MECHA ABYSS
A giant machine ocean with steel sea monsters.
SAME STAGE, TINTED, IN
MK II · STAGE 74
PAIR · STAGE 94
TORPEDO
ENEMY · 3 HITS
Locks on and chases you for 3 seconds.
SEA MINE CHAIN
HAZARD · 2 HITS
Chains of mines that explode one by one.
STEEL KELP
OBSTACLE · UNBREAKABLE
Sways side to side and blocks lanes.
SONAR TURRET
ENEMY · 10 HITS
Sends rings that reveal hidden mines.
BOSS 64
HP 32,500 · 4 PHASES
Mecha Leviathan Ω-Prime
MK II in stage 74
HP 48,750
FIGHTS · Modules fire missiles, lasers and mines together.
WEAK POINT · Head cannon when the jaw opens.
MK II ADDS · Modules repair each other.
MID-STAGE · Mini-boss Torpedo Tank
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage65  (reference/screens/Stage65.png)

```
STAGE 65 · TIER 4
QUANTUM LAB
A lab of glowing cubes. Copies of things appear.
SAME STAGE, TINTED, IN
MK II · STAGE 75
PAIR · STAGE 95
ECHO ENEMY
ENEMY · 6 HITS
Splits into 3 copies. Only one is real.
CUBE BARRIER
OBSTACLE · 10 HITS
Spinning cubes that form changing walls.
BLINK MINE
HAZARD · 2 HITS
Teleports next to you and explodes.
PHASE TURRET
ENEMY · 10 HITS
Fires from a new spot every 2 seconds.
BOSS 65
HP 34,000 · 4 PHASES
Quantum Mage Qubit
MK II in stage 75
HP 51,000
FIGHTS · Makes three copies. Only one is real.
WEAK POINT · The real one has no shadow.
MK II ADDS · Five copies that swap places.
MID-STAGE · Mini-boss Echo Clone
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage66  (reference/screens/Stage66.png)

```
STAGE 66 · TIER 4
ABYSSAL VOID
A pitch-black deep with watching eyes.
SAME STAGE, TINTED, IN
MK II · STAGE 76
PAIR · STAGE 96
INK CLOUD
HAZARD · UNBREAKABLE
Hides enemy bullets for 2 seconds.
TENTACLE TIP
ENEMY · 8 HITS
Reaches in from the edge and lashes.
EYE POD
OBSTACLE · 10 HITS
A floating eye that fires slow beams.
DEEP LURE
ENEMY · 6 HITS
A bright light that drags you in with a beam.
BOSS 66
HP 35,500 · 4 PHASES
Void Kraken Abyssa
MK II in stage 76
HP 53,250
FIGHTS · Tentacles from every edge. Ink clouds hide targets.
WEAK POINT · Pupil between ink bursts.
MK II ADDS · Ink clouds linger longer.
MID-STAGE · Mini-boss Ink Squid
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage67  (reference/screens/Stage67.png)

```
STAGE 67 · TIER 4
STORM CITADEL
A castle on the cloud top. Lightning strikes in lines.
SAME STAGE, TINTED, IN
MK II · STAGE 77
PAIR · STAGE 97
WARNING LINE
HAZARD · UNBREAKABLE
A red line. Lightning hits it in 1 second.
THUNDER KNIGHT
ENEMY · 10 HITS
Throws a spinning lightning axe.
TOWER SHIELD
OBSTACLE · 14 HITS
Blocks bullets. Break it from the top.
TESLA COIL
ENEMY · 10 HITS
Arcs between two coils in a line.
BOSS 67
HP 37,000 · 4 PHASES
Thunder God Tempest
MK II in stage 77
HP 55,500
FIGHTS · Screen-wide lightning after a red warning line.
WEAK POINT · Crown bolts when he raises the hammer.
MK II ADDS · Shorter warning, lines come in pairs.
MID-STAGE · Mini-boss Lightning Guard
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage68  (reference/screens/Stage68.png)

```
STAGE 68 · TIER 4
CRYSTAL CAVERNS
A cave of giant crystals that bounce and split bullets.
SAME STAGE, TINTED, IN
MK II · STAGE 78
PAIR · STAGE 98
GEODE ROCK
OBSTACLE · 12 HITS
Opens into 4 shards when destroyed.
SHARD BAT
ENEMY · 6 HITS
Flies in zig-zag and fires splitting shots.
MIRROR VEIN
HAZARD · UNBREAKABLE
Bounces all bullets, yours and theirs.
CRYSTAL TURRET
ENEMY · 10 HITS
Fires bouncing shards.
BOSS 68
HP 38,500 · 4 PHASES
Crystal Titan Geode
MK II in stage 78
HP 57,750
FIGHTS · Shards bounce between walls and split on hit.
WEAK POINT · Purple geode core in the chest.
MK II ADDS · Shards return after bouncing.
MID-STAGE · Mini-boss Shard Beast
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage69  (reference/screens/Stage69.png)

```
STAGE 69 · TIER 4
MIND MAZE
A maze of floating thoughts. Controls may flip.
SAME STAGE, TINTED, IN
MK II · STAGE 79
PAIR · STAGE 99
THOUGHT BUBBLE
HAZARD · 1 HIT
Pop it and your controls flip for 1 second.
MEMORY WISP
ENEMY · 6 HITS
Repeats your last 3 moves as attacks.
NEURON WALL
OBSTACLE · 12 HITS
Pulses with light and blocks the lane.
DREAM TURRET
ENEMY · 10 HITS
Fires bullets that curve toward you.
BOSS 69
HP 40,000 · 4 PHASES
Mind Eater Cortex
MK II in stage 79
HP 60,000
FIGHTS · Flips your controls for 2 seconds at a time.
WEAK POINT · Open mouth after the control flip ends.
MK II ADDS · Flips mid-dodge for 3 seconds.
MID-STAGE · Mini-boss Thought Eater
First clear up to +300 credits
Repeat clear +1
```

---
## Board: Stage70  (reference/screens/Stage70.png)

```
STAGE 70 · TIER 4
THRONE OF STARS
The home of the Cosmic Emperor. The hardest stage of the set.
SAME STAGE, TINTED, IN
MK II · STAGE 80
PAIR · STAGE 100
STAR GUARD
ENEMY · 12 HITS
Uses attacks from all four tiers.
COSMIC SIGIL
HAZARD · UNBREAKABLE
Opens into bullet rings at fixed spots.
ROYAL GATE
OBSTACLE · UNBREAKABLE
Opens and closes to a beat.
CROWN TURRET
ENEMY · 12 HITS
Fires 3 bullet types at once.
BOSS 70
HP 41,500 · 4 PHASES
Cosmic Emperor Galaxor
MK II in stage 80
HP 62,250
FIGHTS · Four phases using every kind of attack.
WEAK POINT · Core diamond. Opens in each new phase.
MK II ADDS · Faster pattern mixing and shorter pauses between phases.
MID-STAGE · Mini-boss Star Guard
First clear up to +300 credits
Repeat clear +1
```
