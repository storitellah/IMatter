# I Matter — Project Overview

*A program by Imagine Tomorrow Foundation.*

**I Matter** is a lightweight, **offline-first Progressive Web App (PWA)** — a **toolkit for
teachers and facilitators** to lead adolescents and young people through life skills. It
provides lessons, stories, activities, and ready-to-run session plans to use with students. It
has **no login, no accounts, no tracking, and no backend** — everything runs in the browser
and all data stays on the device.

This document is a quick project brief. For the full feature tour see [`README.md`](README.md),
and for detailed guides see the [`docs/`](docs/) folder.

---

## What it does

| Area | Description |
| --- | --- |
| **Learn** | 10 teaching topics with 70+ short lessons, each with intro, key lesson, real-life example, tap-to-reveal reflection, small activity, quick quiz, and takeaway — to lead with students. |
| **Session Plans** | 5 full, ready-to-run life-skills sessions, formatted to be easy to read and lead (see below). |
| **Stories** | 10 short stories with discussion prompts and "What would you do?" to read and discuss with students. |
| **Activities** | 12 printable/in-app worksheets to complete with students or print for sessions. |
| **My Space** | A private, device-only space for the facilitator's own notes, planning, and reflection (journal, strengths, goals, gratitude, mood check-in, optional PIN, delete-all-data). |
| **Facilitator Mode** | PIN-protected monthly session plans, projector mode, local totals, and notes. |
| **Help & About** | Support contacts and safety guidance to share with students, org info, and privacy notice. |
| **Accessibility & languages** | Text size, high contrast, reduced motion, simple language, and full English/Kiswahili translation. |

> **Note:** This is a facilitator tool — there is no Games section (removed in v2.0.0).

### Session Plans (public tab)

Five sessions live in [`data/session-plans.js`](data/session-plans.js) and are shown under
**More → Session Plans**:

1. 🌟 Self-Awareness & Building Confidence (90 min)
2. 💬 Effective Communication & Healthy Relationships (70 min)
3. 🧭 Decision-Making & Problem-Solving (75 min)
4. 🤝 Conflict Resolution & Negotiation Skills (70 min)
5. 🛡️ Substance Abuse & Peer Pressure (70 min)

Each plan renders a colourful header, "In this session" jump chips, numbered section cards
with time badges, highlighted activity boxes, scenario/dialogue callouts, tables, key-point
notes, and (where relevant) a pledge banner. Plans can be printed or saved as PDF and work
fully offline.

---

## Tech stack

- **Vanilla JavaScript, HTML, and CSS** — no framework and no build step.
- **PWA**: [`manifest.json`](manifest.json) + [`service-worker.js`](service-worker.js) (cache-first, works offline after the first visit).
- **No dependencies, no external CDNs, fonts, or APIs.** The repository is deployable as-is.
- Persistence is browser `localStorage` (namespaced under `im.*`).

---

## Project structure

```
index.html            App shell and script/style includes
styles.css            Design system (themable via :root variables)
script.js             All app logic (router, views, games, PWA)
manifest.json         PWA manifest
service-worker.js     Offline cache (bump CACHE_VERSION on updates)
favicon.ico           Favicon (placeholder)
icons/                App icons (192, 512, maskable, Apple touch, favicons)
assets/logos/         I Matter + Imagine Tomorrow logos
data/                 ALL editable content (plain JS files)
  config.js           Branding, org details, contacts, facilitator PIN
  strings.js          UI text (English + Kiswahili)
  content.js          Learning categories and lessons
  stories.js          Stories
  activities.js       Worksheets
  sessions.js         Facilitator Mode monthly sessions
  session-plans.js    Public "Session Plans" tab content
  extras.js           Mood responses, encouragements, prompts, badges
docs/                 Deployment, testing, content-editing, privacy, safeguarding guides
tools/                generate-icons.py, smoke-test.js
```

---

## Run locally

Any static file server works (service workers require `http://localhost` or HTTPS):

```bash
python3 -m http.server 8080      # then open http://localhost:8080
# or: npx serve .
```

---

## Testing

The automated headless-Chrome smoke suite lives at [`tools/smoke-test.js`](tools/smoke-test.js)
(see [`docs/TESTING.md`](docs/TESTING.md)). From the repo root, with the app served on port 8080:

```bash
python3 -m http.server 8080 &
npm i puppeteer-core
CHROME_PATH=/path/to/chrome node tools/smoke-test.js
```

---

## Editing content and branding

All content is in plain, commented files under [`data/`](data/) — no CMS or code changes needed.
See [`docs/CONTENT-EDITING.md`](docs/CONTENT-EDITING.md).

- **Branding / contacts:** edit `data/config.js` (organization name, website, email, phone,
  support contacts, facilitator PIN). Leave a value as `""` to hide it.
- **Logos:** replace the files in `assets/logos/` (keep the same file names).
- **After any content change:** bump `CACHE_VERSION` in `service-worker.js` so installed
  devices receive the update.

---

## Deploy

No build step is required. GitHub Pages and Cloudflare Pages guides are in
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md).

## Privacy & safeguarding

- [`docs/PRIVACY.md`](docs/PRIVACY.md) — plain-language privacy notice (device-only storage).
- [`docs/SAFEGUARDING.md`](docs/SAFEGUARDING.md) — child safeguarding note; verify all support
  contacts before rollout.

## License

See [`LICENSE`](LICENSE).
