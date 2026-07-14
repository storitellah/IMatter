# Content Editing Guide

All content in I Matter lives in plain, commented JavaScript files inside
the `data/` folder. Authorized project staff can edit everything — lessons,
stories, session plans, support contacts, logos, colours, footer
text, and organization details — with a text editor. No CMS, no build step, no
code knowledge beyond careful copy-paste.

## The golden rules

1. **Edit only the text between quotation marks** `"like this"`.
2. **Keep the commas, brackets, and braces** exactly as they are.
3. If a text needs a quotation mark inside it, write `\"` instead of `"`.
4. After editing, **bump `CACHE_VERSION` in `service-worker.js`**
   (e.g. `"i-matter-v2"`) so installed devices receive the update.
5. Test locally before deploying (`python3 -m http.server 8080`).

## What lives where

| File | Contents |
| --- | --- |
| `data/config.js` | App name, tagline, organization details, website/email/phone, footer text, **support contacts**, facilitator default PIN, logo paths, theme colours |
| `data/strings.js` | Every interface label, in English and Kiswahili |
| `data/content.js` | The 10 learning categories and all lessons |
| `data/stories.js` | The stories |
| `data/session-plans.js` | The public Session Plans tab content |
| `data/sessions.js` | The 8 monthly session plans (Facilitator Mode) |
| `data/extras.js` | Daily encouragements, journal prompts, badges |

## Common tasks

### Update support contacts (do this before rollout!)
Open `data/config.js`, find `supportContacts`, and replace each
`PLACEHOLDER` with a verified number. Set `number: ""` to hide a contact.

### Add a lesson
In `data/content.js`, copy an existing lesson block `{ ... },` inside a
category's `lessons: [...]`, paste it below, and change:
- `id` — must be unique across the whole file (letters/numbers/dashes)
- all the text fields
- `quiz.answer` — the position of the correct option, counting from 0
- `related` — ids of related lessons (optional)

### Add or edit a session plan
In `data/session-plans.js`, copy an existing plan block or a `section` inside
one. Each section has a `title`, optional `time`, and a `blocks` list. The
file header documents every block type (`p`, `h`, `ul`, `ol`, `activity`,
`scenario`, `dialogue`, `table`, `note`, `pledge`).

### Add a story
Copy a story block in `data/stories.js`. Never use real participant names
or personal stories without written consent.

### Change the footer or organization details
`data/config.js` → `footerText`, `organization`.

### Add or translate a language
1. In `data/strings.js`, copy the entire `sw: { ... }` block, rename it
   (e.g. `fr:`), and translate the values.
2. In `script.js`, find `var LANGS = ["en", "sw"];` and add the new code:
   `var LANGS = ["en", "sw", "fr"];`
The language button in the header cycles through all listed languages.
Lesson/story content is currently English; the structure supports adding
translated content files per language as a future step.

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

### Change the facilitator default PIN
`data/config.js` → `facilitator.defaultPin`. Facilitators should still
change the PIN on each device (Facilitator → ⚙️).

## Validating your edits

Open the browser console (F12) after loading the app. A red syntax error
naming a `data/` file means a comma, quote, or bracket was broken — compare
against the original file. When in doubt, edit one thing at a time.
