# Content Editing Guide

All content in I Matter lives in plain, commented JavaScript files inside
the `data/` folder. Authorized project staff can edit everything — lessons,
stories, session plans, the framework text, support contacts, logos, colours,
footer text, and organization details — with a text editor. No CMS, no build
step, no code knowledge beyond careful copy-paste.

## Bilingual structure (important)

Every content file exports an **English (`en`) and a Kiswahili (`sw`) tree**
with the **same structure** — same ids, order, emoji, colours, and quiz
answer indexes. Only the text differs. When you edit content, edit **both**
the `en` and `sw` versions so nothing falls back to English. Short config
values use `{ en: "...", sw: "..." }` objects side by side.

## The golden rules

1. **Edit only the text between quotation marks** `"like this"`.
2. **Keep the commas, brackets, and braces** exactly as they are.
3. If a text needs a quotation mark inside it, write `\"` instead of `"`.
4. **Edit the `en` and the `sw` version of the same item together.**
5. After editing, **bump `CACHE_VERSION` in `service-worker.js`**
   (e.g. `"i-matter-v6"`) so installed devices receive the update.
6. Test locally before deploying (`python3 -m http.server 8080`).

## What lives where

| File | Contents |
| --- | --- |
| `data/config.js` | App name, tagline, motto, organization details, website/email/phone, footer text, **support contacts**, logo paths, theme colours (bilingual fields use `{ en, sw }`) |
| `data/strings.js` | Every interface label, in English and Kiswahili |
| `data/framework.js` | The Framework page text and the six-pillar definitions (name, focus, topics, outcome) |
| `data/content.js` | The six pillars and their 24 lessons (`en` + `sw` trees) |
| `data/stories.js` | The six stories, one per pillar (`en` + `sw`) |
| `data/session-plans.js` | The six session plans, one per pillar (`en` + `sw`) |
| `data/extras.js` | Daily encouragements, journal prompts, badges |

## Common tasks

### Update support contacts (do this before rollout!)
Open `data/config.js`, find `supportContacts`. Each contact has a bilingual
`title`, optional `subtitle`, `rows` (each with a `label` and optional
`href` for tap-to-call/email), and a `note`. Confirm the numbers and emails
are current for your context.

### Add a lesson
In `data/content.js`, copy an existing lesson block `{ ... },` inside a
pillar's `lessons: [...]` — in **both** the `en` and `sw` trees — and change:
- `id` — must be identical in both languages and unique within the pillar
- all the text fields (translate the `sw` copy)
- `quiz.answer` — the position of the correct option, counting from 0 (keep
  the same index in both languages)
- `related` — ids of related lessons (optional)

### Add or edit a session plan
In `data/session-plans.js`, copy an existing plan or a `section`, editing
both the `en` and `sw` arrays. Each section has a `title`, optional `time`,
and a `blocks` list. The file header documents every block type (`p`, `h`,
`ul`, `ol`, `activity`, `scenario`, `dialogue`, `table`, `note`, `pledge`).
Keep each plan's `pillar` id matching one of the six framework pillars.

### Add a story
Copy a story block in `data/stories.js` (both languages). Set its `pillar`
to one of the six pillar ids. Never use real participant names or personal
stories without written consent.

### Change the footer or organization details
`data/config.js` → `footerText`, `organization`.

### Add or translate a language
The app ships fully bilingual (English + Kiswahili). To add a third language:
1. In `data/strings.js`, copy the entire `sw: { ... }` block, rename it
   (e.g. `fr:`), and translate the values.
2. In each content file (`framework.js`, `content.js`, `stories.js`,
   `session-plans.js`) copy the `sw` tree to a new `fr` tree and translate it.
3. In `data/extras.js`, add an `fr` array to `encouragements` and
   `journalPrompts`, and an `fr` value to each badge `title`/`desc`.
4. In `script.js`, find `var LANGS = ["en", "sw"];` and add the new code:
   `var LANGS = ["en", "sw", "fr"];`
The language button in the header cycles through all listed languages.

### Replace logos, favicon, and app icons
Replace these files, keeping the same names:
- `assets/logos/i-matter-logo.svg` — app logo (header, About)
- `assets/logos/imagine-tomorrow-logo.svg` — organization logo (About)
- `icons/icon-192.png`, `icons/icon-512.png`, `icons/maskable-512.png`,
  `icons/apple-touch-icon.png`, `icons/favicon-16.png`,
  `icons/favicon-32.png`, and `favicon.ico`

Placeholder icons can be regenerated with
`python3 tools/generate-icons.py` (edit the colours/shapes in that script).

### Change theme colours
Edit the `:root` variables at the top of `styles.css` (`--teal`,
`--yellow`, `--bg`, …). Also update `theme_color` / `background_color` in
`manifest.json` and the `theme-color` meta tag in `index.html` to match.

### Edit the framework text or the pillars
`data/framework.js` holds the Framework page copy (intro, approach, theory of
change) and the six-pillar definitions (name, focus, topics, outcome). Edit
both the `en` and `sw` trees. The pillar `id`, `emoji`, and `color` live in
the shared `pillars` array at the top and are the same in every language.

## Validating your edits

Open the browser console (F12) after loading the app. A red syntax error
naming a `data/` file means a comma, quote, or bracket was broken — compare
against the original file. When in doubt, edit one thing at a time.
