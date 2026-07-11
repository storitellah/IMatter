# AGENTS.md

## Cursor Cloud specific instructions

`I Matter` is a single, dependency-free, offline-first **static PWA** (vanilla HTML/CSS/JS,
no framework, no build step, no backend, no package manager in the repo). All content lives
in `data/*.js` and persistence is browser `localStorage` (`im.*` keys) only. See `README.md`
for the product overview and `docs/TESTING.md` for the full test checklist.

### Running the app (dev)
- Serve the repo root over HTTP (service workers require `http://localhost` or HTTPS —
  opening `index.html` via `file://` will not register the service worker):
  `python3 -m http.server 8080` then open `http://localhost:8080`.
- There is no lint or build step; there are no runtime dependencies to install for the app itself.

### Automated tests (smoke suite)
- The only test suite is the headless-Chrome smoke test `tools/smoke-test.js` (see `docs/TESTING.md`).
- It requires `puppeteer-core` and a Chrome binary. Chrome is preinstalled at
  `/usr/local/bin/google-chrome` (the script's default `CHROME_PATH`).
- The repo has no `package.json`, so `puppeteer-core` is installed **outside the repo** at
  `/home/ubuntu/imatter-tools` (done by the startup update script) to avoid polluting the tree.
  Run the suite from the repo root with the static server already running:
  `NODE_PATH=/home/ubuntu/imatter-tools/node_modules CHROME_PATH=/usr/local/bin/google-chrome node tools/smoke-test.js`
- The suite targets the hardcoded `http://localhost:8080/`, so a static server on port 8080
  must be running before you launch it. It launches its own headless Chrome instance.
