# Credits, shop, progression, power curve

Data: credits.json, shop.json, achievements.json, power_curve.json, scoring.json, difficulty.json.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: Progression  (reference/screens/Progression.png)

```
SCORING, STARS, UNLOCKS & UPGRADES
All numbers are starting values to tune while playtesting.
SCORING
Asteroid / Spore / Crystal
50
Stinger · Scout Drone · Kamikaze
100
Turret · Wraith · Leech Pod
250
Gunship · Shadow Ace · Eel
500
Mini-boss
2,000
Boss
5,000
Power-up collected
+25
COMBO
Each kill within 3 seconds of the last raises the multiplier. Take a hit or wait 3 seconds and it drops back to ×1.
×1
×2
×4
×6
×8
Steps: 5, 10, 20 and 35 kills in a row. Max ×8.
STARS PER STAGE
Defeat the boss.
Also destroy 80% of enemies.
95% of enemies and no continues used.
UNLOCKS
Nova Striker · Phantom X · Ayan · Aarav
From start
Stage 2
Clear Stage 1
Viper Lance jet
Clear Stage 2
Stage 3
Clear Stage 2
Titan Bulwark jet
Clear Stage 3
Stage 4
Clear Stage 3
Gold jet skins
3 stars in all stages
CREDITS ARE RARE
Spend them in the Shop. Purchases are permanent, work in every stage and mode, and belong to your profile.
First clear of a stage (+10 per star)
+30 at stage 1
Boss, first time
+40 at stage 1
Repeat clear of the same stage
+1 only
Gold coin (new stages only)
+1
Achievement
+25 to +100
Later stages pay more
See Credits by Stage
DIFFICULTY
EASY
NORMAL
HARD
Enemy HP
×0.7
×1
×1.4
Bullet speed
×0.8
×1
×1.25
Power-up drops
×1.5
×1
×0.7
Score
×1
×1.2
×1.5
Continues
5
3
1
Starting hull
6
5
4
```

---
## Board: Shop  (reference/screens/Shop.png)

```
MENU
SHOP
Buy a power once and it is yours for good — every stage, every mode.
PROFILE · AYAN
{{credits}}
{{it.tag}}
{{it.name}}
{{it.desc}}
{{it.price}}
{{it.btnLabel}}
Credits are rare: first clears of stages, bosses and achievements. Repeat clears pay only +1. Higher tiers (II, III) of each power appear after you buy the first.
RESET DEMO
```

---
## Board: ShopTiers  (reference/screens/ShopTiers.png)

```
MENU
SHOP · UPGRADE TIERS
Buy Tier I first. Tier II and III unlock one after another. A higher tier replaces the lower one, it does not stack.
340
TIER I
TIER II
TIER III
SH
Shield Start
TIER I
300
Blocks 3 hits
TIER II
LOCKED · 450
Blocks 5 hits
TIER III
LOCKED · 700
Blocks 7 hits
D2
Damage Head Start
TIER I
OWNED
Start at Damage Lv 2
TIER II
500
Start at Damage Lv 3
TIER III
LOCKED · 800
Start at Damage Lv 4
B2
Bomb Stock
TIER I
OWNED
Start with 2 bombs
TIER II
400
Start with 3 bombs
TIER III
LOCKED · 650
Start with 4 bombs
MG
Pickup Magnet
TIER I
OWNED
Short pull range
TIER II
250
Wide pull range
TIER III
LOCKED · 400
Pulls from the whole screen
WM
Wingman Drone
TIER I
900
1 drone
TIER II
LOCKED · 1200
2 drones
TIER III
LOCKED · 1600
2 drones that also fire missiles
LK
Lucky Orb
TIER I
450
+25% power-up drops
TIER II
LOCKED · 650
+50% power-up drops
TIER III
LOCKED · 900
+75% power-up drops
HP
Extra Hull Bar
TIER I
800
+1 hull bar
TIER II
LOCKED · 1100
+2 hull bars
TIER III
LOCKED · 1500
+3 hull bars
SC
Special Charge
TIER I
250
Bar fills 20% faster
TIER II
LOCKED · 400
Bar fills 40% faster
TIER III
LOCKED · 600
Bar fills 60% faster
Green = owned · gold price = next tier you can buy · greyed = locked until the tier before it is owned. Shown for profile AYAN.
Cost to max everything: 15,500 credits
```

---
## Board: CreditsEcon  (reference/screens/CreditsEcon.png)

```
CREDITS BY STAGE
Credits get bigger as you go further and almost vanish for repeats. All 100 stages pay 25,300 credits in total.
STAGES
LEVEL
CLEAR
3 STARS
BOSS
PER STAGE
BLOCK
RUNNING
1–10
×1
30
30
40
100
1,000
1,000
11–20
×1.2
36
36
48
120
1,200
2,200
21–30
×1.5
45
45
60
150
1,500
3,700
31–40
×1.8
54
54
72
180
1,800
5,500
41–50
×2.2
66
66
88
220
2,200
7,700
51–60
×2.6
78
78
104
260
2,600
10,300
61–70
×3
90
90
120
300
3,000
13,300
71–80
×3.5
105
105
140
350
3,500
16,800
81–90
×4
120
120
160
400
4,000
20,800
91–100
×4.5
135
135
180
450
4,500
25,300
REPEAT CLEAR PAYS +1
Clearing a stage you already cleared gives 1 credit in total. No star bonus, no boss bonus, no gold coins. Replaying stage 1 forever earns almost nothing.
FIRST CLEAR PAYS IN FULL
Each stage pays once: clear, up to 3 stars, and the boss. Stars can be improved later, and only the new stars pay.
MK II AND PAIRS ARE NEW STAGES
Stage 11 is a different stage from stage 1 with a stronger boss, so its first clear pays at its own level.
HARD AND EASY
Hard ×1.5 and Easy ×0.5 apply to first clears only. Achievements pay once.
SHOP
All 8 powers at Tier III cost 15,500 credits. A player who gets about 88% of the star credits finishes the shop around stage 83.
```

---
## Board: PowerCurve  (reference/screens/PowerCurve.png)

```
POWER CURVE
The shop makes you stronger, but never fast enough to make later stages easy.
━ Player power (typical shop progress)
━ Challenge rating (boss, enemies, bullets)
0
100
200
300
400
500
1–10
11–20
21–30
31–40
41–50
51–60
61–70
71–80
81–90
91–100
replay stage 1 with a maxed shop: power 198 vs challenge 100
REPLAYING EARLY STAGES
With the full shop you are about twice as strong at stage 1, so it is easier, but the boss still shoots the same bullets and pays +1 credit.
GOING FORWARD
Challenge grows faster than power. At stage 100 the challenge is 2.4× your power, so skill, power-ups and Damage Boost matter.
POWER AND CHALLENGE BY BLOCK
STAGES
POWER
CHALLENGE
RATIO
1–10
100
100
1.00
11–20
106
121
1.15
21–30
112
146
1.30
31–40
121
175
1.45
41–50
131
209
1.60
51–60
143
250
1.75
61–70
157
299
1.90
71–80
174
357
2.05
81–90
193
426
2.20
91–100
198
475
2.40
WHAT EACH SHOP TIER ADDS TO POWER (MAX +98%)
SHOP POWER
I
II
III
Shield Start
+4%
+7%
+10%
Damage Head Start
+6%
+12%
+18%
Bomb Stock
+3%
+5%
+8%
Pickup Magnet
+1%
+2%
+3%
Wingman Drone
+10%
+18%
+26%
Lucky Orb
+2%
+4%
+6%
Extra Hull Bar
+6%
+12%
+18%
Special Charge
+3%
+6%
+9%
Power 100 = new profile, nothing bought. These gains raise base stats: bullet damage, hull, shield hits, bombs, drones, special charge and pickups.
```
