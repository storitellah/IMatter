# Changelog

All notable changes to the I Matter app are documented here.
Format based on [Keep a Changelog](https://keepachangelog.com/).

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
