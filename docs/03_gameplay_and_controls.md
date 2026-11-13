# Gameplay, HUD, co-op, controls

Core play, HUD, pause, game over, tutorial, co-op, keyboard, gamepad, touch.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: Gameplay  (reference/screens/Gameplay.png)

```
S
AYAN · NOVA STRIKER
HULL
FOCUS
DMG
STAGE 1 · EMBER BELT
BOSS AHEAD · ROCKMAW
SCORE
0012450
×4 COMBO
S
SPREAD SHOT
08s
NOVA BOMB
×2
ARROWS / WASD MOVE · FIRING IS AUTOMATIC · SHIFT SPECIAL · B BOMB · ESC PAUSE
```

---
## Board: Tutorial  (reference/screens/Tutorial.png)

```
SPECIAL
READY
1
MOVE. Use the arrow keys or WASD. Your jet shoots by itself — no button needed.
2
DODGE. Red shots hurt. Slide out of their path.
3
GRAB. Fly into glowing orbs. Purple orbs raise your damage.
4
SPECIAL. When the bar is full, press Shift for a big attack.
HINT 1 OF 4
Shown one at a time, only in Stage 1
SKIP TIPS
```

---
## Board: Pause  (reference/screens/Pause.png)

```
THIS RUN
SCORE
0012450
STAGE
1 · EMBER BELT
PILOT
AYAN · NOVA STRIKER
HULL
TIME
03:42
MISSION ON HOLD
PAUSED
RESUME
RESTART STAGE
SETTINGS
QUIT TO MENU
PROGRESS IS SAVED AT THE START OF EACH STAGE
ACTIVE POWER-UPS
S
Spread Shot
08s
Energy Shield
2 HITS
ESC — resume · R — restart · M — music on/off
```

---
## Board: GameOver  (reference/screens/GameOver.png)

```
STAGE 1 · EMBER BELT
GAME OVER
The Aces went down — but the galaxy still needs them.
FINAL SCORE
0012450
BEST SCORE
0031820
ENEMIES DESTROYED
42
ACCURACY
68%
LONGEST COMBO
×6
CREDITS KEPT (GOLD COINS ONLY)
+6
CONTINUE?
7
Continues left: 2
CONTINUE
RETRY STAGE
MAIN MENU
```

---
## Board: SectorClear  (reference/screens/SectorClear.png)

```
VENOM NEBULA
STAGE 2 CLEAR
SCORE
0048900
Enemies destroyed
58 / 64
Accuracy
74%
Boss bonus · Hive Queen Zyra
+5,000
No-continue bonus
+2,000
Credits earned (added to your profile)
+110
First clear only. Clearing this stage again pays +1.
3 stars need 95% of enemies destroyed. You had 90.6%.
NEW JET UNLOCKED
VIPER LANCE
Rapid striker — pick it in the Hangar.
NEXT STAGE
3 · IRON FLEET
Difficulty: Hard. Boss: Dreadnought Ω-9.
NEXT STAGE
REPLAY
MAIN MENU
```

---
## Board: Coop  (reference/screens/Coop.png)

```
REVIVING 62%
P1 · AYAN
NOVA STRIKER
P2 · AARAV
DOWN
STAGE 2 · VENOM NEBULA
0048900
×6 TEAM COMBO
A² BURST
FILLS WHEN BOTH PILOTS SHOOT · NEEDS BOTH PILOTS ALIVE
```

---
## Board: CoopGameOver  (reference/screens/CoopGameOver.png)

```
CO-OP · STAGE 2 · VENOM NEBULA
BOTH PILOTS DOWN
1
One pilot goes down
The other has 2 seconds of touch time to revive.
2
Partner revives
Back with 1 hull bar and 2 seconds of shield.
3
Both down at once
No revive is possible. Game over for both.
AYAN
DOWN · first to fall
Score share
0031200
Gold coins kept
+4
Added to profile AYAN.
AARAV
DOWN · fell 3 seconds later
Score share
0027000
Gold coins kept
+2
Added to profile AARAV.
SHARED SCORE
0058200
BEST COMBO
×6
STAGE REACHED
2 · 64%
RETRY STAGE
CHANGE JETS
MAIN MENU
Each pilot keeps only the gold coins they picked up. Scores count toward both profiles' high scores.
```

---
## Board: Controls  (reference/screens/Controls.png)

```
CONTROLS
Keyboard, gamepad and touch. In co-op, Player 1 uses WASD and Player 2 uses the arrow keys on the same keyboard.
KEYBOARD
P1 · AYAN
P2 · AARAV
Move
W
A
S
D
Fire
AUTOMATIC — no key needed
Special
L SHIFT
R SHIFT
Nova bomb
B
R CTRL
Pause
ESC
Shared
A² Burst: press both Special keys within 1 second.
GAMEPAD
Y
X
B
A
Move
Left stick
Fire
Automatic
Special
X
Nova bomb
Y
Pause
Start
A second gamepad joins as Player 2 automatically.
TOUCH · PHONE & TABLET
AUTO-FIRE
SP
Move
Drag left side
Fire
Automatic
Special
SP button
Nova bomb
Star button
Touch is solo only. Buttons are at least 64 px with 12 px spacing. Left-hand swap and button size S / M / L are in Settings.
```

---
## Board: Gamepad  (reference/screens/Gamepad.png)

```
MENU
GAMEPAD PROMPTS
Button icons shown on screen for each controller family.
ACTION
XBOX STYLE
PLAYSTATION STYLE
SWITCH STYLE
Move
Fire is automatic
LEFT STICK
D-PAD
LEFT STICK
D-PAD
LEFT STICK
D-PAD
Special
Both pilots press it for A² Burst
X
□
Y
Nova Bomb
Count shown on the HUD
Y
△
X
Confirm
Menus
A
✕
B
Back
Menus and closing dialogs
B
○
A
Pause
Same button opens and closes
MENU
OPTIONS
+
Manual fire
Hold to shoot
A
only if turned on in Settings
✕
B
AUTO-SWITCH
Button hints on every screen follow the last device used: keyboard, Xbox, PlayStation or Switch style.
CO-OP · TWO PADS
Pad 1 is Player 1 (cyan). Pad 2 is Player 2 (orange). Each HUD shows its own colour.
MENUS
Stick or D-pad moves focus. Confirm and Back as listed. First press joins the game.
DISCONNECT
If a pad drops, the game pauses and shows "Reconnect controller".
```

---
## Board: Touch  (reference/screens/Touch.png)

```
MENU
TOUCH CONTROLS
Phone and tablet layout, landscape. Desktop stays the main target.
0012450
II
MOVE ZONE · TOUCH ANYWHERE
SPECIAL
BOMB
AUTO-FIRE ON
MOVE
Touch anywhere in the left half. A floating stick appears under the thumb. Setting: drag the jet directly instead.
SPECIAL
Big button, lower right. Dim until the bar is full, then glows gold and pulses.
BOMB
Smaller button next to it. Shows a count badge. Dim at 0 bombs.
PAUSE
Small button top right. Also opens when the app goes to the background.
FIRING
Automatic, same as desktop. No fire button.
OPTIONS
Left-handed swap. Button size S / M / L. Vibration on hit and special.
Sizes: every button is at least 64 px across with 12 px spacing, so a thumb never hits two.
Limits: landscape only (a rotate prompt shows in portrait). Co-op is keyboard or gamepad only in this version.
```
