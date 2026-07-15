# Testing Checklist & Report

## Latest test report

**Version tested:** 4.0.0 · **Date:** 2026-07-15 ·
**Method:** automated headless-Chrome suite (`tools/smoke-test.js`, 90
checks) across mobile, tablet, and desktop viewports, plus manual review of
screenshots (phone/iPad/desktop, English and Kiswahili).

**Result: 90 / 90 checks passed.** Highlights:

| Area | Result |
| --- | --- |
| App shell, "You matter." hero, footer (links to imagine-tomorrow.org), 3-item bottom nav (Home · Session Plans · Resources), Today's encouragement, six pillar tiles | ✅ |
| No "Offline" wording anywhere in the UI chrome; no offline pill element | ✅ |
| Service worker registers; app precached for full offline use | ✅ |
| Resources hub lists Framework, Learn, Stories, My Space, Help, About | ✅ |
| The Framework page: six pillar cards, motto, PYD approach & theory of change | ✅ |
| Learn: 6 pillars, all 24 lessons render **in both languages**, no broken related links, all quizzes valid | ✅ |
| Quiz answering, tap-to-reveal, mark-as-reviewed, badge earning | ✅ |
| Session Plans: all 6 listed with pillar tags; sections, tables, and activity boxes render | ✅ |
| Stories: all 6 render (one per pillar); "What would you do?" responds | ✅ |
| Games, Activities, mood check-in, and PIN-protected Facilitator Mode fully removed; old routes fall back safely | ✅ |
| My Space: journal, lists, text plans save; badges grid (7); delete-all clears every `im.*` key | ✅ |
| Help & Support: new verified contacts (child helpline 116, 999/112/911, programme email); tap-to-call links; no PLACEHOLDER text | ✅ |
| **Bilingual:** switching to Kiswahili re-translates every section — home, nav, resources, framework, pillar titles, lessons, stories, session plans, help (contacts intact) | ✅ |
| Settings: text size, high contrast, reduced motion apply to `<html>`; EN↔SW language switch persists | ✅ |
| **Responsive:** no horizontal scroll at 320 / 390 / 768 / 1024 / 1440 px (small phone, phone, iPad portrait & landscape, desktop/Mac) | ✅ |
| Accessibility: all images have alt text, all buttons labelled, skip link first and focusable | ✅ |
| **Offline:** home, lessons, and session plans all load with the network disabled | ✅ |
| No console errors; no requests to any external domain | ✅ |

Not verifiable in this environment (requires physical devices / live hosting —
re-check at rollout): install flow on a physical iPhone/iPad (Add to Home
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
- [ ] iOS/iPad Safari: Share → Add to Home Screen → icon appears, opens standalone
- [ ] Android Chrome: install prompt / ⋮ → Add to Home screen → opens standalone
- [ ] Desktop Chrome/Edge/Mac: install icon in address bar works
- [ ] App icon and splash colours look correct on all platforms
- [ ] Favicon appears in the browser tab

### Offline
- [ ] Load the app once online, enable airplane mode, close and reopen: everything works
- [ ] Lessons, stories, session plans, framework, My Space all usable offline
- [ ] "Check for updates" (Settings) finds new versions when online

### Language
- [ ] Header language button switches English ↔ Kiswahili instantly
- [ ] Every section (home, framework, lessons, stories, session plans, help, about) is fully translated
- [ ] Chosen language persists after closing and reopening the app

### Content & navigation
- [ ] All 3 bottom-nav destinations open, and all 6 Resources entries open
- [ ] Each pillar links across Framework ↔ Learn ↔ Session Plan ↔ Story
- [ ] Quizzes give encouraging feedback for right and wrong answers
- [ ] No broken links, no placeholder text left over

### Privacy & data
- [ ] My Space entries persist after closing the app
- [ ] My Space PIN protects the section after enabling
- [ ] "Delete all my data" removes everything (verify in DevTools → Application → Local Storage)
- [ ] With DevTools Network open: zero requests to any non-app domain at any point

### Responsive layout
- [ ] No horizontal scrolling on a small phone, a normal phone, iPad portrait/landscape, and desktop/Mac
- [ ] Content is balanced and well-aligned; touch targets are comfortable
- [ ] Safe-area insets respected on notched iPhones (no content under the notch/home bar)

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
- [ ] Support contacts in `data/config.js` confirmed **current** for your school and area
- [ ] Safeguarding briefing done (docs/SAFEGUARDING.md)
