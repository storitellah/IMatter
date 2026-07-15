# I Matter — Project Overview

*A program by [Imagine Tomorrow Foundation](https://www.imagine-tomorrow.org/).*

**I Matter** is a lightweight **Progressive Web App (PWA)** implementing a **Positive Youth
Development Framework** — a **toolkit for teachers, facilitators, and youth workers** to guide
adolescents through life skills. It is organised around the **six pillars** of the framework and
provides ready-to-run session plans plus a resources hub of lessons, stories, and support
tools. It has **no login, no accounts, no tracking, and no backend** — everything runs in the
browser and all data stays on the device. It needs an internet connection only on the first
install/visit; after that it works **fully offline**. The whole app and all content is
**bilingual (English + Kiswahili)**, switchable with one tap.

This document is a quick project brief. For the full feature tour see [`README.md`](README.md),
and for detailed guides see the [`docs/`](docs/) folder.

---

## The six pillars

*I Know Myself • I Belong • I Take Action • I Choose Wisely • I Build Bridges • I Protect My Future*

Each pillar has a Learn category (4 lessons), a story, and a full session plan. The heart of the
program: **You matter. Your life has value. Your choices have power. Your future is worth
investing in.**

## What it does

The app has **two main sections** — **Session Plans** and **Resources** — plus a Home page
with the day's encouragement, the six pillars, and quick links to both sections.

| Area | Description |
| --- | --- |
| **Session Plans** | 6 full, ready-to-run life-skills sessions — one per pillar — formatted to be easy to read and lead (see below). |
| **Resources → The Framework** | The Positive Youth Development approach, the theory behind it, and the six pillars with focus, topics, and outcomes. |
| **Resources → Learn** | The six pillars as 24 short lessons (4 per pillar), each with intro, key lesson, real-life example, tap-to-reveal reflection, small activity, quick quiz, and takeaway. |
| **Resources → Stories** | 6 short stories (one per pillar) with discussion prompts and "What would you do?" to read and discuss with students. |
| **Resources → My Space** | A private, device-only space for the facilitator's own notes, planning, and reflection (journal, strengths, goals, gratitude, optional PIN, delete-all-data). |
| **Resources → Help & About** | Verified support contacts (child helpline, emergency, school, programme) with tap-to-call/email, safety guidance, org info, and privacy notice. |
| **Accessibility & languages** | Text size, high contrast, reduced motion, simple language, and full English/Kiswahili translation of the entire app and all content. |

> **Note:** This is a facilitator toolkit — there is no Games section (removed in v2.0.0), no
> Activities section or mood check-in (removed in v3.0.0), and no PIN-protected Facilitator Mode
> (removed in v4.0.0 when the app was rebuilt around the framework).

### Session Plans (main tab)

Six sessions live in [`data/session-plans.js`](data/session-plans.js), one per pillar, shown
under **Session Plans** in the bottom navigation:

1. 🌟 Self-Awareness & Building Confidence — *I Know Myself* (90 min)
2. 💬 Effective Communication & Healthy Relationships — *I Belong* (70 min)
3. 🎯 Goal Setting, Time Management & Overcoming Procrastination — *I Take Action* (90 min)
4. 🧭 Decision-Making & Problem-Solving — *I Choose Wisely* (75 min)
5. 🤝 Conflict Resolution & Negotiation Skills — *I Build Bridges* (70 min)
6. 🛡️ Substance Abuse & Peer Pressure — *I Protect My Future* (70 min)

Each plan renders a colourful header with its pillar tag and outcome, "In this session" jump
chips, numbered section cards with time badges, highlighted activity boxes, scenario/dialogue
callouts, tables, key-point notes, and (where relevant) a pledge banner. Plans can be printed
or saved as PDF and work fully offline in either language.

---

## Tech stack

- **Vanilla JavaScript, HTML, and CSS** — no framework and no build step.
- **PWA**: [`manifest.json`](manifest.json) + [`service-worker.js`](service-worker.js) (cache-first; needs a connection only on first install, then works fully offline).
- **No dependencies, no external CDNs, fonts, or APIs.** The repository is deployable as-is.
- Persistence is browser `localStorage` (namespaced under `im.*`).
- **Bilingual data model:** every content file exports `{ en: ..., sw: ... }` trees with matching structure; `script.js` renders the active language and re-renders on switch.

---

## Project structure

```
index.html            App shell and script/style includes
styles.css            Design system (themable via :root variables)
script.js             All app logic (router, bilingual rendering, PWA)
manifest.json         PWA manifest
service-worker.js     Offline cache (bump CACHE_VERSION on updates)
favicon.ico           Favicon (placeholder)
icons/                App icons (192, 512, maskable, Apple touch, favicons)
assets/logos/         I Matter + Imagine Tomorrow logos
data/                 ALL editable content (plain JS files; en + sw trees)
  config.js           Branding, org details, motto, support contacts
  strings.js          UI text (English + Kiswahili)
  framework.js        The framework page + six-pillar definitions
  content.js          The six pillars and their 24 lessons
  stories.js          Six stories (one per pillar)
  session-plans.js    Six session plans (one per pillar)
  extras.js           Encouragements, journal prompts, badges
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
  motto, support contacts — bilingual fields hold `{ en, sw }`). Leave a value as `""` to hide it.
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
