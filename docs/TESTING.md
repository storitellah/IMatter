# Testing Checklist & Report

## Latest test report

**Version tested:** 1.0.0 · **Date:** 2026-07-10 ·
**Method:** automated headless-Chrome suite (`tools/smoke-test.js`, 63
checks) at a 390×844 mobile viewport, plus manual review of screenshots.

**Result: 63 / 63 checks passed.** Highlights:

| Area | Result |
| --- | --- |
| App shell, hero, footer, bottom nav render | ✅ |
| Service worker registers; 23 files precached | ✅ |
| Mood check-in: response, breathing option, local save | ✅ |
| Learn: 10 categories, all 76 lessons render, no duplicate ids, no broken related links, all quizzes valid | ✅ |
| Quiz answering, tap-to-reveal, mark-as-explored, badge earning | ✅ |
| All 6 game engines complete end-to-end (choice, memory, order, select, sort, path); scores saved locally | ✅ |
| Stories: all 10 render; "What would you do?" responds; activity links valid | ✅ |
| Activities: text + list fields save locally; reset works; goal-setter badge | ✅ |
| My Space: journal, lists, text plans save; badges grid; delete-all clears every `im.*` key | ✅ |
| Facilitator Mode: wrong PIN rejected, correct PIN unlocks, session plans render, projector mode toggles | ✅ |
| Settings: text size, high contrast, reduced motion apply to `<html>`; EN↔SW language switch | ✅ |
| Accessibility: all images have alt text, all buttons labelled, skip link first and focusable | ✅ |
| **Offline:** after one visit, home, lessons, and games all load with the network disabled; offline pill appears | ✅ |
| No console errors; no requests to any external domain | ✅ |

Not verifiable in this environment (requires physical devices / live hosting —
re-check at rollout): install flow on a physical iPhone (Add to Home
Screen) and Android phone, print output on a physical printer, GitHub
Pages / Cloudflare Pages live deployment. The app uses only relative paths
and standard PWA APIs, so these are expected to work; confirm with the
checklist below.

## Running the automated suite

```bash
# from the repo root
python3 -m http.server 8080 &
npm i puppeteer-core
CHROME_PATH=/path/to/chrome node tools/smoke-test.js
```

## Manual pre-rollout checklist

### Installation
- [ ] iOS Safari: Share → Add to Home Screen → icon appears, opens standalone
- [ ] Android Chrome: install prompt / ⋮ → Add to Home screen → opens standalone
- [ ] Desktop Chrome/Edge: install icon in address bar works
- [ ] App icon and splash colours look correct on all platforms
- [ ] Favicon appears in the browser tab

### Offline
- [ ] Load the app once online, enable airplane mode, close and reopen: everything works
- [ ] Offline pill appears in the header when offline
- [ ] Lessons, games, stories, activities, My Space all usable offline
- [ ] "Check for updates" (Settings) finds new versions when online

### Content & navigation
- [ ] All 8 bottom-nav / More destinations open
- [ ] Lessons open correctly from Learn, Home, mood responses, and related links
- [ ] Quizzes give encouraging feedback for right and wrong answers
- [ ] All 10 games are playable and replayable; scores persist after closing the app
- [ ] Stories display with discussion prompts
- [ ] No broken links, no placeholder text left over (search the app for "PLACEHOLDER" after configuring contacts)

### Privacy & data
- [ ] My Space entries persist after closing the app
- [ ] My Space PIN protects the section after enabling
- [ ] "Delete all my data" removes everything (verify in DevTools → Application → Local Storage)
- [ ] With DevTools Network open: zero requests to any non-app domain at any point

### Facilitator
- [ ] Default PIN unlocks; changed PIN persists; wrong PIN rejected
- [ ] All 8 session plans display; projector mode enlarges text
- [ ] Local totals update after student activity; reset works
- [ ] Worksheets print correctly (and Save as PDF from the print dialog works)

### Accessibility
- [ ] Text size Large / Extra large applies everywhere
- [ ] High contrast mode is readable on all sections
- [ ] Reduced motion removes animations
- [ ] Keyboard-only: tab through nav, cards, quizzes; focus is always visible
- [ ] Screen reader announces nav items, buttons, images, and quiz feedback

### Deployment
- [ ] GitHub Pages URL loads and installs (see docs/DEPLOYMENT.md)
- [ ] Cloudflare Pages URL loads and installs
- [ ] After deploying an update with a bumped `CACHE_VERSION`, installed devices show the update notification

### Before giving to young people (required)
- [ ] All support contacts in `data/config.js` replaced with **verified** numbers
- [ ] Facilitator default PIN changed
- [ ] Safeguarding briefing done (docs/SAFEGUARDING.md)
