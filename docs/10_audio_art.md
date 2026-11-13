# Audio, effects, logo

No audio files exist. Lists only. Data: audio.json.

Verbatim text below is extracted from the design boards (reference/screens/<Board>.png shows the layout). Template tokens like {{it.name}} are placeholders for data, not text.

---
## Board: Audio  (reference/screens/Audio.png)

```
MUSIC & SOUND LIST
MUSIC TRACKS
{{t.name}}
{{t.mood}}
{{t.bpm}}
SOUND EFFECTS
Player · shot ×4 (one per jet) · special charge · special release · bomb · pickup · shield hit · shield break · hull hit · low-hull alarm · revive
Enemy · shot · missile launch · laser charge · laser gate hum · explosion small / medium / large · acid pop · rock break
Boss · warning siren · roar (one per boss) · phase change · weak point open · defeat boom stack
Menu · move · select · back · launch · star earned · stage-clear fanfare · game-over sting · A² Burst
PILOT VOICE LINES
AYAN
"Locked on!"
"Nice shot, Aarav!"
"Focus Shot, fire!"
"Hang on, I'm coming!"
"Boss incoming!"
AARAV
"Shields up!"
"I've got your back, Ayan!"
"Shield Burst!"
"Thanks for the save!"
"We did it!"
Lines play at most once every 20 s. Subtitles can be turned off in Settings.
```

---
## Board: MusicMap  (reference/screens/MusicMap.png)

```
MENU
MUSIC MAP
Which track plays on which screen and what it does when things change.
SCREEN
TRACK
BEHAVIOUR
Home, Profiles, Shop, Trophies, Settings, Load, Mode
Main Menu
Keeps playing across these screens. Never restarts when you switch between them.
Hangar, Sector Map, Story, Loading
Hangar
Fades in over 0.5 s. Loading screen holds it until the stage is ready.
Stage 1 (and tutorial tips)
Stage 1 · Ember Belt
Tips never interrupt it.
Stage 2
Stage 2 · Venom Nebula
Loops until the boss warning.
Stage 3
Stage 3 · Iron Fleet
Loops until the boss warning.
Stage 4
Stage 4 · Void Rift
Loops until the boss warning.
Mini-boss
Stage track, layer added
Drums and bass layer fades in. Falls away after the kill.
Boss warning
Siren, stage track fades out
Fades over 1 s. Siren loops for the 3 s banner.
Boss fight
Boss Theme (own remix)
Phase change adds a layer and raises the tempo a step.
Boss defeat
Silence, then boom stack
Music stops dead for 1 s, then the explosions play.
Stage Clear
Stage Clear fanfare
4 s. Then Hangar track fades in on the next screen.
Game Over (solo and co-op)
Game Over sting
6 s, then silence. Menu track returns on the next screen.
Pause
Current track, muffled
Volume drops 50% with a low-pass filter. Resumes from the same spot.
Credits
Credits
Plays once to the end, then loops.
Crossfade · 0.5 s between tracks, unless a row says otherwise.
Ducking · Low-hull alarm −30%, A² Burst −60% for 2 s, voice lines −20%.
Volume · Music, Effects and Voice sliders in Settings. All three are saved per device.
Browser start · Audio starts on the first key or click. The Home screen shows "Press any key".
```

---
## Board: Effects  (reference/screens/Effects.png)

```
EFFECTS SHEET
PLAYER BULLETS
Nova Striker
Twin cyan pulses
Phantom X
Thin violet needles
Titan Bulwark
Fat orange plasma
Viper Lance
Rapid green darts
ENEMY BULLETS
Red orb
Acid drop
Missile
Laser
Enemy shots are always warm colors with a soft ring, so they never look like yours (cool colors, no ring).
EXPLOSIONS & HITS
Small
Medium
Large
Hit flash
Each explosion plays 6 frames in 0.4 s, then leaves 6 fading sparks.
ENGINE TRAILS
Nova
Phantom
Titan
Viper
Flames grow longer with Turbo Boost
SHIELD BREAK
Full
Cracked
Shatter
SCREEN EFFECTS
Shake · small on explosions, big on bosses
White flash · Nova Bomb and boss defeat
Slow motion · 30% speed during boss shudder
Red edge glow · pulses when hull is on its last bar
Pickup burst · ring of 8 sparks in the power-up color
Score pop · numbers float up and fade in 0.8 s
```

---
## Board: Logo  (reference/screens/Logo.png)

```
LOGO & APP ICON
PRIMARY LOGO
2
COSMIC ACES
TWO PILOTS · ONE MISSION
APP ICON
2
512 · 192 · 96 · 48 · favicon 32
ON LIGHT BACKGROUND
COSMIC ACES
Dark badge keeps it readable on white
HORIZONTAL LOCKUP
A2 COSMIC ACES
Used on the loading bar and store pages
ONE-COLOR (WHITE)
COSMIC ACES
For stamps, merchandise and dark photos
```
