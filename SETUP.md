# A² Cosmic Aces — Setup checklist (Windows)

Run these in PowerShell (Windows Terminal or the VS Code terminal). If a winget ID fails, run `winget search <name>` and use the ID it shows. Close and reopen the terminal after installing Node, Git or Python so the PATH updates.

## 1. Required now

| Tool | Why | Install command | Download page |
|---|---|---|---|
| Visual Studio Code | editor | `winget install -e --id Microsoft.VisualStudioCode` | https://code.visualstudio.com/download |
| Git | version control, Claude Code needs it | `winget install -e --id Git.Git` | https://git-scm.com/download/win |
| Node.js LTS (includes npm) | runs TypeScript, Vite, Phaser, tests | `winget install -e --id OpenJS.NodeJS.LTS` | https://nodejs.org/en/download |
| Python 3 | runs `tests/data_validation.py` | `winget install -e --id Python.Python.3.12` | https://www.python.org/downloads/ |
| Claude Code | builds the game from your terminal | `irm https://claude.ai/install.ps1 \| iex` (or `npm install -g @anthropic-ai/claude-code`) | https://docs.claude.com/en/docs/claude-code/overview |
| Google Chrome | testing in a real browser | `winget install -e --id Google.Chrome` | https://www.google.com/chrome/ |

Check after install:
```
code --version
git --version
node --version
npm --version
python --version
claude --version
```

## 2. VS Code extensions
Install from the Extensions panel or run:
```
code --install-extension anthropic.claude-code
code --install-extension dbaeumer.vscode-eslint
code --install-extension esbenp.prettier-vscode
code --install-extension vitest.explorer
code --install-extension ms-playwright.playwright
code --install-extension ms-python.python
code --install-extension eamodio.gitlens
```
(If an extension ID is not found, search its name in the Extensions panel.)

## 3. Git setup (once)
```
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```
Optional: GitHub CLI `winget install -e --id GitHub.cli` then `gh auth login`.

## 4. Project packages (Claude Code installs these in build step 1; for reference)
Run inside `D:\A² Cosmic Aces`:
```
npm init -y
npm install phaser
npm install -D typescript vite vitest @playwright/test eslint prettier @types/node
npm install -D @fontsource/orbitron @fontsource/exo-2
npx playwright install chromium
```
- `@fontsource/*` = the Orbitron and Exo 2 fonts hosted inside the game (no Google Fonts link).
- Claude Code may add an SVG-to-PNG tool such as `@resvg/resvg-js` or `sharp` for sprite sheets. It must tell you before adding any other package.

## 5. Not needed now (install later only if you reach that step)

| Tool | When | Install |
|---|---|---|
| JDK 17 | only when building the Android phone app (Capacitor/Gradle). Not needed for the game itself | `winget install -e --id Microsoft.OpenJDK.17` · https://learn.microsoft.com/java/openjdk/download |
| Android Studio | Android phone app | `winget install -e --id Google.AndroidStudio` · https://developer.android.com/studio |
| Electron / Capacitor | PC app / phone app wrappers. Installed per project through npm, nothing global | `npm install -D electron` · `npm install @capacitor/core @capacitor/cli` |
| Audacity | editing music and sound files | `winget install -e --id Audacity.Audacity` · https://www.audacityteam.org/download/ |
| jsfxr (website) | making retro sound effects free | https://sfxr.me/ |
| Inkscape | editing the SVG art by hand | `winget install -e --id Inkscape.Inkscape` · https://inkscape.org/release/ |
| Windows Terminal | nicer terminal | `winget install -e --id Microsoft.WindowsTerminal` |

You do NOT need: Unity, Godot, Java for the web game, pygame, Docker, or a database.

## 6. Open the project and start
```
cd "D:\A² Cosmic Aces"
code .
claude
```
First prompt to give Claude Code:
"Read CLAUDE.md, README.md, docs/07_tech_and_build_order.md and docs/07b_stack_and_testing.md. Do build step 1 only. Set up the project exactly as in docs/07b_stack_and_testing.md. Follow the rules. Ask me about anything missing."

## 7. Daily commands (after step 1)
```
npm run dev      # start the game in the browser
npm run check    # lint + typecheck + tests + data checks
npm run e2e      # browser tests
```
