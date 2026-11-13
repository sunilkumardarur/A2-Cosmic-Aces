# Hangar, jets, pilots, specials, power-ups

Structured data: data/jets.json, pilots.json, powerups.json, balance.json.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: Hangar  (reference/screens/Hangar.png)

```
MENU
HANGAR
Choose your flight and your fighter, then launch.
1 · FLIGHT
NOVA STRIKER
ALL-ROUNDER
SPEED
ARMOR
FIREPOWER
Twin pulse cannons
PHANTOM X
STEALTH INTERCEPTOR
SPEED
ARMOR
FIREPOWER
Phase dash — 1s invisible
TITAN BULWARK · LOCKED
Clear Stage 3 to unlock
TITAN BULWARK
HEAVY GUNSHIP
SPEED
ARMOR
FIREPOWER
Starts every stage with a shield
VIPER LANCE
RAPID STRIKER
SPEED
ARMOR
FIREPOWER
Fastest fire rate in the fleet
2 · FIGHTER
AYAN
THE SHARPSHOOTER
Special · Focus Shot
Charged beam that pierces every enemy in a line.
AARAV
THE DEFENDER
Special · Shield Burst
Shockwave that wipes out nearby enemy bullets.
READY — PICK YOUR SECTOR
{{jetName}} · {{pilotName}}
CHOOSE SECTOR
```

---
## Board: Specials  (reference/screens/Specials.png)

```
SPECIAL MOVES & A² BURST
The special bar fills as you shoot and destroy enemies. When it is full, press Shift (or X on gamepad). Using it empties the bar.
AYAN
FOCUS SHOT
Half-second charge ring, then a thick beam fires straight up for 1 second. It pierces every enemy in the line. Strong against bosses.
AARAV
SHIELD BURST
A round shockwave grows from the jet. Every enemy bullet it touches turns into gold sparks, and enemies inside freeze for 1 second.
AYAN + AARAV · CO-OP ONLY
A² BURST
With the A² meter full, both pilots press Special within 1 second. Their beams twist into one giant beam for 2 seconds, clearing all bullets and hitting everything on screen. Bosses lose 15% of their health.
Phantom X · special is Phase Dash: 1 second invisible and untouchable.
Special bar · fills in about 40 seconds of normal play. Shop "Special Charge" makes it 20% faster.
```

---
## Board: PowerUps  (reference/screens/PowerUps.png)

```
PICKUPS DROP FROM DESTROYED ENEMIES
POWER-UPS
Each pickup is a glowing orb that spins and pulses. Fly into it to collect. Top row = how it looks floating, scene = how it looks in use.
S
SPREAD SHOT
WEAPON · 12s
Fires 5 shots in a fan. Great for swarms and asteroid fields.
L
PLASMA LASER
WEAPON · 8s
A non-stop beam that melts anything in a straight line. Best vs bosses.
ENERGY SHIELD
DEFENSE · 3 HITS
Blue bubble around the jet. Flashes white on each hit, cracks on the last.
M
HOMING MISSILES
WEAPON · 6 MISSILES
Red missiles curve on their own to the nearest enemies.
TURBO BOOST
MOVEMENT · 10s
+50% speed with a golden afterimage trail and long engine flames.
W
WINGMAN DRONES
SUPPORT · 15s
Two green drones orbit your jet, shoot with you and block bullets.
REPAIR KIT
INSTANT · +1 HULL
Green sparkles rise as the jet flashes green and one hull bar refills.
NOVA BOMB
STORED · PRESS B
Pink shockwave clears all enemies and bullets; deals big damage to bosses.
```

---
## Board: DamageBoost  (reference/screens/DamageBoost.png)

```
POWER-UP · STACKS UP TO LEVEL 5
DAMAGE BOOST
Every purple orb you collect raises your damage by one level. Bullets get bigger, change color and hit harder.
LV {{L.lv}}
{{L.mult}}
{{L.note}}
WHEN YOU PICK IT UP
DMG +1
LEVEL 3
The jet flashes the new level color, a short ring pulses out, and the DMG bar in the corner fills one more pip.
RULES (STARTING VALUES)
You start every stage at Level 1. Each orb is +1 level, up to Level 5.
Each level adds +25% damage, so Level 5 deals double (×2.0).
Taking a hull hit drops 1 level. It never goes below Level 1.
Works with every weapon: normal shots, Spread, Laser and Missiles. It does not change the Nova Bomb.
At Level 5 an extra orb gives +500 points instead.
Orbs drop from tough enemies and always from mini-bosses.
HUD DISPLAY
DMG
Five pips under the Focus bar. Pips take the level color. At Level 5 they glow pink and pulse.
In co-op each pilot has their own Damage level.
```
