# I Matter

**A Positive Youth Development Framework.**

*I Know Myself • I Belong • I Take Action • I Choose Wisely • I Build Bridges • I Protect My Future*

*I Matter is a program by [Imagine Tomorrow Foundation](https://www.imagine-tomorrow.org/).*

I Matter is a lightweight, vibrant **toolkit for teachers, facilitators, and youth workers** to guide adolescents and young people through life skills. It helps young people recognize their worth and build an inner compass to navigate life with confidence, organised around the **six pillars** of the I Matter framework.

The app has **two main sections**: ready-to-run **Session Plans** (one for each pillar), and **Resources** — the framework, pillar lessons, stories, a private space, and support information.

Built as a Progressive Web App (PWA): install it once with an internet connection, then use it **anywhere, anytime, with no connection needed**. No login. No sign-up. No advertising. No tracking. No personal data leaves the device.

Fully bilingual: **English and Kiswahili**, switchable anywhere with one tap — every section, lesson, story, and session plan is translated.

---

## The six pillars

| Pillar | Focus | Outcome |
| --- | --- | --- |
| 🌟 **I Know Myself** | Self-awareness, self-esteem, strengths, values | "I know who I am and I value myself." |
| 💬 **I Belong** | Communication, active listening, empathy, teamwork | "I build positive relationships with others." |
| 🎯 **I Take Action** | Goal setting, time management, overcoming procrastination | "I take action to achieve my goals." |
| 🧭 **I Choose Wisely** | Decision-making, critical thinking, problem-solving | "I make informed decisions that support my wellbeing and future." |
| 🤝 **I Build Bridges** | Conflict resolution, negotiation, perspective-taking | "I navigate conflict with respect and understanding." |
| 🛡️ **I Protect My Future** | Peer pressure, substance abuse prevention, resilience, healthy lifestyles | "I make healthy choices that protect my wellbeing and my future." |

> **You matter. Your life has value. Your choices have power. Your future is worth investing in.**

## Features

- **Session Plans** — six full, ready-to-run life-skills sessions, one for each pillar: Self-Awareness & Confidence, Communication & Relationships, Goal Setting/Time Management/Procrastination, Decision-Making & Problem-Solving, Conflict Resolution & Negotiation, and Substance Abuse & Peer Pressure. Formatted to be easy to read and lead with a group; printable/PDF-exportable.
- **Resources** — everything else the facilitator needs, gathered in one hub:
  - **The Framework** — what I Matter is, the Positive Youth Development approach behind it, and the six pillars with their focus, topics, and outcomes.
  - **Learn** — the six pillars as short lessons (24 in total, four per pillar). Every lesson has an introduction, key lesson, real-life example, tap-to-reveal reflection question, small activity, quick quiz, takeaway, and related-topic links.
  - **Stories** — six short fictional stories, one per pillar, each with discussion questions, "What would you do?", and a key lesson.
  - **My Space** — a fully private, device-only space for the facilitator's own notes, planning, and reflection: strengths, goals, gratitude notes, things learned, people to trust, calm-down plan, study plan, weekly challenge, private journal with prompts, badges, optional PIN protection, and a delete-all-data button.
  - **Help & Support** — verified support contacts (National Child Helpline, emergency services, school and programme contacts) with tap-to-call and tap-to-email, plus age-appropriate guidance on talking to trusted adults.
- **Accessibility** — text size controls, high contrast mode, reduced motion, simple language mode, screen reader labels, keyboard navigation, clear focus states.
- **Bilingual** — full English + Kiswahili interface and content, with a structure ready for more languages (`data/*.js`).
- **Responsive** — balanced and well-aligned on phones, iPhone/iOS, iPad, PC, and Mac; no horizontal scrolling; safe-area aware.

## Project structure

```
index.html            App shell
styles.css            Design system (colours themable via :root)
script.js             All app logic (router, views, bilingual rendering, PWA)
manifest.json         PWA manifest
service-worker.js     Offline cache (bump CACHE_VERSION on updates)
favicon.ico           Favicon (placeholder — replace to rebrand)
icons/                App icons: 192, 512, maskable, Apple touch, favicons
assets/logos/         I Matter + Imagine Tomorrow logo placeholders (SVG)
data/                 ALL editable content (plain JS files; en + sw trees)
  config.js           Branding, org details, support contacts, motto
  strings.js          UI text (English + Kiswahili)
  framework.js        The framework page + six-pillar definitions
  content.js          The six pillars and their 24 lessons
  stories.js          Six stories (one per pillar)
  session-plans.js    Six session plans (one per pillar)
  extras.js           Encouragements, journal prompts, badges
docs/                 Guides (deployment, facilitator, content editing,
                      privacy, safeguarding, testing)
tools/generate-icons.py  Regenerates placeholder icons
tools/smoke-test.js      Automated headless-Chrome test suite
```

## Run locally

Any static file server works. For example:

```bash
# Python
python3 -m http.server 8080
# or Node
npx serve .
```

Then open `http://localhost:8080`. (Service workers require `http://localhost` or HTTPS.)

## Deploy

- **GitHub Pages** and **Cloudflare Pages** step-by-step guides: [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- No build step, no dependencies, no external CDNs, fonts, or APIs — the repository is deployable as-is.

## Install as an app

There is an **Install app** option in **Settings** (the ⚙️ button in the header) on every screen, plus an install card on the Home page. Depending on the device:

- **Android (Chrome):** tap **Install app** in Settings (or the in-app prompt), or menu ⋮ → *Add to Home screen*.
- **iOS/iPad (Safari):** Settings → Install app shows the steps — Share button → *Add to Home Screen*.
- **Desktop (Chrome/Edge/Mac):** tap **Install app** in Settings, or use the install icon in the address bar.

The app only needs an internet connection the first time it is installed or opened. After that, everything works fully offline.

## Editing content and branding

All content lives in plain, commented files under `data/` — each holds an English (`en`) and Kiswahili (`sw`) tree with matching structure. No CMS and no code changes required. See [`docs/CONTENT-EDITING.md`](docs/CONTENT-EDITING.md).

To replace branding: swap the files in `assets/logos/` and `icons/` (keep the same file names), or rerun `python3 tools/generate-icons.py` after editing it.

## Privacy & safeguarding

- [`docs/PRIVACY.md`](docs/PRIVACY.md) — plain-language privacy notice (no accounts, no uploads, device-only storage, delete-all control).
- [`docs/SAFEGUARDING.md`](docs/SAFEGUARDING.md) — child safeguarding note, including the requirement to verify all support contacts before rollout.

## Testing

The full testing checklist and latest test report: [`docs/TESTING.md`](docs/TESTING.md). Run the automated suite with `node tools/smoke-test.js` (see the file header).

## About Imagine Tomorrow Foundation

[Imagine Tomorrow Foundation](https://www.imagine-tomorrow.org/) is a registered nonprofit organization committed to the holistic development of adolescents and young people in Kenya through community-based programs that address educational, social, and emotional needs. Since 2014, the organization has worked alongside communities in Nairobi and Kajiado counties, creating inclusive spaces where young people can access quality education, express themselves creatively, build confidence, strengthen resilience, and develop pathways into education and work.

## License

See [`LICENSE`](LICENSE) (placeholder — the organization should choose and insert its preferred license before public release).
