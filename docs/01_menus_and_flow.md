# Menus and flow

Game: A² Cosmic Aces. Neon-arcade space fighter-jet shooter, desktop landscape 1280x720, kid pilots Ayan and Aarav. Flow: Home -> Mode -> Hangar -> Sector Map -> Sector (10 stages) -> Story/Loading -> Play -> Boss -> Stage Clear / Game Over. data/screen_flow.json has the link targets per board.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: Main  (reference/screens/Main.png)

```
TROPHIES
SHOP · 340
AYAN
TWO PILOTS · ONE MISSION
A2
COSMIC
ACES
Ayan and Aarav, one mission, and a galaxy full of obstacles and bosses.
PLAY
CHOOSE FLIGHT & FIGHTER
LOAD
EXIT
PRESS ENTER TO START
SAVE SLOT 1 · STAGE 2 · VENOM NEBULA
SETTINGS · CREDITS · v0.1
```

---
## Board: ModeSelect  (reference/screens/ModeSelect.png)

```
MENU
CHOOSE YOUR MISSION
Fly alone, or take both pilots into battle together.
1 PLAYER
ENTER
SOLO ACE
OR
Pick Ayan or Aarav and one of 4 jets.
Keyboard, gamepad or touch.
Your partner pilot cheers you on in voice lines.
2 PLAYERS · SAME SCREEN
RECOMMENDED
DOUBLE ACES
+
Each pilot has their own jet, hull and special.
Fly into a downed partner for 2 seconds to revive them.
Shared score and combo. Fill the A² Burst meter, then press both specials together.
```

---
## Board: Profiles  (reference/screens/Profiles.png)

```
MENU
WHO'S PLAYING?
Credits, shop powers, unlocks, high scores and achievements are saved to your profile.
LAST PLAYED
AYAN
Credits
340
Shop powers owned
3 / 8
Stars
5 / 12
Achievements
4 / 12
Best score
0048900
Play time
1h 30m
PLAY AS AYAN
PROFILE
AARAV
Credits
120
Shop powers owned
1 / 8
Stars
2 / 12
Achievements
2 / 12
Best score
0012450
Play time
0h 40m
PLAY AS AARAV
NEW PROFILE
NAME
CREATE
Co-op: Player 2 picks a profile too. Each pilot brings their own shop powers and earns their own credits.
Backup: up to 4 profiles per device. Each profile has 3 save slots + 1 autosave. Export a profile as a code to move it to another device.
```

---
## Board: Load  (reference/screens/Load.png)

```
MENU
LOAD GAME
Saves for profile AYAN. Credits, shop items and achievements belong to the profile and work in every save.
SLOT 1 · SOLO
AYAN · NOVA STRIKER
Stage 3 · Iron Fleet — not started
SCORE
0048900
PLAY TIME
1h 12m
SAVED
Nov 8, 2026
LOAD
DELETE
SLOT 2 · CO-OP
AYAN + AARAV
Stage 1 · Ember Belt — in progress
SCORE
0012450
PLAY TIME
0h 18m
SAVED
Nov 6, 2026
LOAD
DELETE
SLOT 3
EMPTY SLOT
NEW GAME
AUTOSAVE
LAST CHECKPOINT
Stage 2 · Venom Nebula — before boss
SCORE
0041200
PLAY TIME
1h 06m
SAVED
Nov 8, 2026
LOAD
Sample save data shown. Saves are stored on this device — see the Tech Plan board.
```

---
## Board: Settings  (reference/screens/Settings.png)

```
BACK
SETTINGS
AUDIO
Music
70
Sound effects
85
Pilot voices
60
DISPLAY & ACCESSIBILITY
{{t.label}}
{{t.desc}}
DIFFICULTY
{{d.name}}
{{diffDesc}}
{{diffStats}}
GAMEPLAY & CONTROLS
{{t.label}}
{{t.desc}}
VIEW & REMAP CONTROLS
```

---
## Board: Achievements  (reference/screens/Achievements.png)

```
MENU
TROPHIES
High scores and achievements for profile AYAN. Each achievement pays credits once.
4 / 12 UNLOCKED
100 of 600 credits earned
TOP SCORES BY STAGE
1 · EMBER BELT
1.
0031820
2.
0028400
3.
0024100
2 · VENOM NEBULA
1.
0048900
2.
0041200
3.
0036000
3 · IRON FLEET
No scores yet. Clear Stage 2 to play it.
4 · VOID RIFT
Locked.
ACHIEVEMENTS
{{a.name}}
{{a.desc}}
{{a.reward}}
```

---
## Board: Credits  (reference/screens/Credits.png)

```
MENU
AYAN
AARAV
A2 COSMIC ACES
GAME DESIGN
[YOUR NAME]
ART & ANIMATION
[YOUR NAME]
PROGRAMMING
[YOUR NAME]
MUSIC & SOUND
[COMPOSER / SOUND SOURCE]
VOICES
[VOICE ACTORS]
SPECIAL THANKS
[FAMILY & PLAYTESTERS]
Thanks for playing. Two pilots, one mission.
```

---
## Board: Story  (reference/screens/Story.png)

```
PROLOGUE · THE LAST ACES
SKIP
The Void Emperor Kaal is swallowing the galaxy, one star at a time. Only the Cosmic Fleet can stop him, and bigger powers wait behind him.
Ready, Aarav?
— Ayan
Born ready. Let's clear
this galaxy!
— Aarav
Ayan and Aarav are the youngest pilots of the fleet — and the last two Aces still flying. Two pilots, one mission.
A hundred stages stand between them and the end of the darkness. Every obstacle, every boss — they will clear them all. Launch!
START MISSION
```

---
## Board: Loading  (reference/screens/Loading.png)

```
A2 COSMIC ACES
NOW ENTERING
STAGE 2 · VENOM NEBULA
LOADING
64%
TIP   Shoot spore pods from far away so the acid can't reach you.
```

---
## Board: ProfileCode  (reference/screens/ProfileCode.png)

```
MENU
PROFILE BACKUP
Move a profile to another device with a code or a file.
PROFILES · 2 / 4
EXPORT PROFILE
Profile AYAN as a code. Keep it somewhere safe.
A2CA-AYAN-7F3K-92QD-M4XP-18ZT-C6HW-0VNB
COPY CODE
SAVE AS FILE
Code copied.
WHAT THE CODE CARRIES
Name and picture
Credits (340)
Shop powers and tiers
Unlocked jets
Stars and high scores
Achievements
Play time
Game saves (3 slots + auto)
Settings stay on the device and are not in the code.
IMPORT PROFILE
Paste a code from another device.
A2CA-AARAV-3M9Q-…|
IMPORT
LOAD FROM FILE
RESULT MESSAGES
Profile found. AARAV · 120 credits · 1 / 8 shop powers · 2 achievements
Name already exists. Replace the profile on this device, or import under a new name.
Code not valid. Check for a missing or extra character and try again.
Device is full. 4 of 4 profiles used. Delete one first.
```

---
## Board: Confirms  (reference/screens/Confirms.png)

```
MENU
CONFIRM DIALOGS
Every action that cannot be undone asks first. The cancel button is always on the left and is focused by default.
LEAVE THE GAME?
Your profile and saves are already stored. Nothing is lost.
Progress is saved automatically.
STAY
EXIT
DELETE PROFILE?
This removes AARAV with 120 credits, 1 shop power, 2 achievements and all saves. It cannot be undone.
Type AARAV to confirm
CANCEL
DELETE
RENAME PROFILE
Credits, shop powers and saves stay with the profile. Only the name changes.
AYAN
CANCEL
SAVE NAME
DELETE SAVE?
Slot 2 · Stage 3 · 0041200 · 38 min. The profile, credits and shop powers are not touched.
CANCEL
DELETE SAVE
OVERWRITE SAVE?
Slot 1 already has a save from Stage 2. Saving here replaces it.
CANCEL
OVERWRITE
REPLACE PROFILE?
A profile named AARAV already exists on this device. Importing replaces its credits, shop powers and saves with the code's.
KEEP CURRENT
REPLACE
```
