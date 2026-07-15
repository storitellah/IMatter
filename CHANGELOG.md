# Changelog

All notable changes to the I Matter app are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/).

## [4.0.0] — 2026-07-15

Rebuilt I Matter around the **I Matter Positive Youth Development Framework**
(2026) and its **six pillars**: *I Know Myself, I Belong, I Take Action, I
Choose Wisely, I Build Bridges, I Protect My Future.*

### Added
- New **The Framework** page (Resources) explaining Positive Youth
  Development, the approach, the theory of change, and the six pillars with
  their focus, core topics, and outcome statements.
- **Six-pillar structure** across the whole app: Home shows the six pillars;
  each pillar has a Learn category (4 lessons, 24 in total), a story, and a
  session plan, all cross-linked.
- **Full bilingual content.** Every lesson, story, session plan, the
  framework page, and all config text now has English **and** Kiswahili
  versions. Switching language re-translates the entire app — content and
  interface — with one tap.
- New verified **support contacts**: National Child Helpline (call 116,
  WhatsApp, email), emergency services (999/112/911), school support, and the
  I Matter programme office — with tap-to-call and tap-to-email links.
- New **content files** `data/framework.js` (framework + pillars) and rebuilt
  `data/content.js`, `data/stories.js`, `data/session-plans.js` as bilingual
  `{ en, sw }` trees.
- Responsive refinements for small phones, iPhone/iOS, iPad (portrait and
  landscape), PC, and Mac — no horizontal scrolling at any width, safe-area
  aware, balanced two-column layouts on wide screens.

### Changed
- Reframed the app from a generic life-skills toolkit to the Positive Youth
  Development Framework; new hero ("You matter."), motto, and taglines.
- Every mention of **Imagine Tomorrow Foundation** now hyperlinks to
  [imagine-tomorrow.org](https://www.imagine-tomorrow.org/) (footer, About,
  Help).
- Bumped app version to 4.0.0 and service worker cache to `i-matter-v5`.
- Smoke test rewritten (90 checks) covering pillars, bilingual re-translation,
  responsive widths, new contacts, and offline operation.

### Removed
- The **"Offline" indicator/pill** and all "Offline" wording from the UI. The
  app still works 100% offline once installed; it only needs a connection on
  the first install/visit.
- The **PIN-protected Facilitator Mode** tab and all its code (monthly
  sessions, projector mode, local totals, session notes), and the retired
  `data/sessions.js`.

## [3.0.0] — 2026-07-14

Restructured the app around **two main sections**: **Session Plans** and
**Resources**.

### Added
- New session plan: **Goal Setting, Time Management & Overcoming
  Procrastination** (90 min) — goals and how to set them, time robbers and
  time-management strategies, procrastination causes and fixes, plus three
  group activities. Session Plans now total six.
- New **Resources** hub gathering Learn, Stories, My Space, Facilitator Mode,
  Help & Support, and About in one place.

### Changed
- Bottom navigation simplified to **Home · Session Plans · Resources** (the
  "More" sheet is gone).
- Home page now shows Today's encouragement, links to the two main sections,
  and the progress summary.
- Bumped service worker cache to `i-matter-v4`.

### Removed
- **Activities** section removed entirely (all 12 worksheets, data file, nav
  entry, home feature, story/session "related activity" links, and related
  badges).
- **Mood check-in** ("How are you feeling today?") removed from My Space,
  together with the guided breathing exercise, mood data, and mood badge.
- Remaining leftovers of the Games feature (unused strings and data fields).

## [2.0.0] — 2026-07-12

Repositioned I Matter as a **facilitator toolkit** — for teachers and youth
mentors to lead students through life skills, rather than a student self-use app.

### Added
- New **Session Plans** tab with five full, teen-friendly life-skills sessions
  (Self-Awareness & Confidence, Communication & Relationships, Decision-Making &
  Problem-Solving, Conflict Resolution & Negotiation, Substance Abuse & Peer
  Pressure). Promoted to the bottom navigation.

### Changed
- Reframed the app's language throughout (English + Kiswahili) to address
  facilitators leading students (hero, section intros, labels).
- Updated Imagine Tomorrow Foundation contacts: website and email set, phone
  removed; the organization logo now links to the website. New logo artwork.
- Bumped service worker cache to `i-matter-v3`; verified full offline precache.

### Removed
- **Games** feature removed entirely (all 10 games, engines, data, nav entry,
  home feature, facilitator session links, and related badges).
- The Home page "How are you feeling today?" section (mood check-in remains in
  My Space).

## [1.0.0] — 2026-07-10

### Added
- Initial release of the I Matter offline-first PWA.
- Knowledge centre with 10 life skills categories and 76 lessons, each with
  intro, key lesson, example, tap-to-reveal reflection, activity, quick quiz,
  takeaway, and related-topic links.
- 10 educational games: Feelings Match, Decision Path, Communication
  Challenge, Strength Finder, Problem-Solving Puzzle, Peer Pressure Escape,
  Goal Builder, Memory Match, Confidence Builder, Safe or Unsafe.
- My Space private area: mood check-in with guided breathing, strengths,
  goals, gratitude, things learned, trusted people, calm-down plan, study
  plan, weekly challenge, journal with prompts, badges, optional PIN,
  delete-all-data.
- 10 stories with discussion questions and "What would you do?" prompts.
- 12 printable/in-app activities with local save, reset, print, and PDF
  export (via the browser print dialog).
- Facilitator Mode (local PIN): 8 monthly session plans, projector mode,
  anonymous local totals, session notes, PIN change, results reset.
- Help & Safety section with editable support-contact placeholders.
- Accessibility: text size controls, high contrast, reduced motion, simple
  language mode, screen reader labels, keyboard navigation, focus states.
- English + Kiswahili interface, extensible language structure.
- PWA: manifest, service worker with full offline precache, install prompt,
  update notification, iOS/Android home screen support.
- Placeholder logos, favicon, and app icons with a regeneration script.
- Documentation: README, deployment guides (GitHub Pages, Cloudflare Pages),
  facilitator guide, content editing guide, privacy notice, safeguarding
  note, testing checklist and report.

### How to release an update
1. Edit content in `data/` (or code).
2. Bump `CACHE_VERSION` in `service-worker.js` (e.g. `i-matter-v2`).
3. Update the version in `data/config.js` and add an entry to this file.
4. Deploy. Installed devices will show an update notification on next launch
   with a connection.
