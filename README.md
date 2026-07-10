# I Matter

**A safe space to learn, grow, and become more confident.**

*I Matter is a program by Imagine Tomorrow Foundation.*

I Matter is a lightweight, vibrant, **offline-first** learning and resource app for adolescents and young people. It makes life skills easier to understand through lessons, stories, games, quizzes, activities, and private reflection tools.

Built as a Progressive Web App (PWA): install it once, then use it **without any internet connection**. No login. No sign-up. No advertising. No tracking. No personal data leaves the device.

---

## Features

- **Learn** — an interactive knowledge centre with 10 life skills categories and 70+ short lessons: Knowing Myself, Understanding Emotions, Communication, Decision-Making, Problem-Solving, Healthy Relationships, Confidence & Resilience, School & Learning, Dreams & Future Planning, Safety & Support. Every lesson has an introduction, key lesson, real-life example, tap-to-reveal reflection question, small activity, quick quiz, takeaway, and related-topic links.
- **Games** — 10 safe, educational games: Feelings Match, Decision Path, Communication Challenge, Strength Finder, Problem-Solving Puzzle, Peer Pressure Escape, Goal Builder, Memory Match, Confidence Builder, Safe or Unsafe. Encouraging feedback, local scores, stars, and badges. Never shames wrong answers.
- **My Space** — a fully private, device-only area: mood check-in with supportive responses and a guided breathing exercise, strengths, goals, gratitude notes, things I learned, people I trust, calm-down plan, study plan, weekly challenge, private journal with prompts, badges, optional PIN protection, and a delete-all-data button.
- **Stories** — 10 short fictional stories about young people facing common challenges, each with discussion questions, "What would you do?", a key lesson, and a related activity.
- **Activities** — 12 worksheets and tools (Strengths Shield, Feelings Wheel, Goal Ladder, Trusted Adults Map, Decision Tree, and more). Complete in-app, save locally, reset, print, or export as PDF.
- **Facilitator Mode** — PIN-protected tools for teachers and youth mentors: 8 monthly session plans, discussion questions, projector mode, printable worksheets, anonymous local completion totals, session notes, and school/group name.
- **Help & Safety** — calm, age-appropriate guidance on talking to trusted adults, with editable support-contact placeholders (see `data/config.js`).
- **Accessibility** — text size controls, high contrast mode, reduced motion, simple language mode, screen reader labels, keyboard navigation, clear focus states.
- **Kiswahili** — full interface translation, with a structure ready for more languages (`data/strings.js`).

## Project structure

```
index.html            App shell
styles.css            Design system (colours themable via :root)
script.js             All app logic (router, views, games, PWA)
manifest.json         PWA manifest
service-worker.js     Offline cache (bump CACHE_VERSION on updates)
favicon.ico           Favicon (placeholder — replace to rebrand)
icons/                App icons: 192, 512, maskable, Apple touch, favicons
assets/logos/         I Matter + Imagine Tomorrow logo placeholders (SVG)
data/                 ALL editable content (plain JS/JSON-style files)
  config.js           Branding, org details, support contacts, facilitator PIN
  strings.js          UI text (English + Kiswahili)
  content.js          Learning categories and lessons
  games-data.js       Game questions and scenarios
  stories.js          Stories
  activities.js       Worksheets
  sessions.js         8 monthly session plans
  extras.js           Mood responses, encouragements, prompts, badges
docs/                 Guides (deployment, facilitator, content editing,
                      privacy, safeguarding, testing)
tools/generate-icons.py  Regenerates placeholder icons
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

- **Android (Chrome):** open the site → menu ⋮ → *Add to Home screen* / *Install app* (or tap the in-app install prompt).
- **iOS (Safari):** open the site → Share button → *Add to Home Screen*.
- **Desktop (Chrome/Edge):** install icon in the address bar.

After the first visit, everything works offline.

## Editing content and branding

All content lives in plain, commented files under `data/` — lessons, games, stories, activities, sessions, support contacts, logos, colours, and footer text. No CMS and no code changes required. See [`docs/CONTENT-EDITING.md`](docs/CONTENT-EDITING.md).

To replace branding: swap the files in `assets/logos/` and `icons/` (keep the same file names), or rerun `python3 tools/generate-icons.py` after editing it.

## Facilitators

See [`docs/FACILITATOR-GUIDE.md`](docs/FACILITATOR-GUIDE.md). The default Facilitator Mode PIN is set in `data/config.js` — change it before rollout and again on each device.

## Privacy & safeguarding

- [`docs/PRIVACY.md`](docs/PRIVACY.md) — plain-language privacy notice (no accounts, no uploads, device-only storage, delete-all control).
- [`docs/SAFEGUARDING.md`](docs/SAFEGUARDING.md) — child safeguarding note, including the requirement to verify all support contacts before rollout.

## Testing

The full testing checklist and latest test report: [`docs/TESTING.md`](docs/TESTING.md).

## About Imagine Tomorrow Foundation

Imagine Tomorrow Foundation is a registered nonprofit organization committed to the holistic development of adolescents and young people in Kenya through community-based programs that address educational, social, and emotional needs. Since 2014, the organization has worked alongside communities in Nairobi and Kajiado counties, creating inclusive spaces where young people can access quality education, express themselves creatively, build confidence, strengthen resilience, and develop pathways into education and work.

*Website, email, and phone placeholders are in `data/config.js` — replace them with real details.*

## License

See [`LICENSE`](LICENSE) (placeholder — the organization should choose and insert its preferred license before public release).
