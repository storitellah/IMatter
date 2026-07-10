# Deployment Guide

I Matter is a fully static app — no build step, no server code, no database.
Any static hosting works. Below are step-by-step guides for GitHub Pages and
Cloudflare Pages (both free).

> **Important:** service workers (offline mode) require **HTTPS**. Both
> GitHub Pages and Cloudflare Pages provide HTTPS automatically.

---

## Option A — GitHub Pages

1. Create a repository on GitHub (e.g. `i-matter`) and push this project:

   ```bash
   git init
   git add .
   git commit -m "I Matter v1.0.0"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/i-matter.git
   git push -u origin main
   ```

2. On GitHub, open the repository → **Settings** → **Pages**.
3. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: **main**, folder **/ (root)**
4. Click **Save**. After a minute or two the app is live at:

   ```
   https://YOUR-USERNAME.github.io/i-matter/
   ```

5. Open the URL on a phone and install it (Add to Home Screen).

Notes:
- The app uses only **relative paths**, so it works from a subfolder like
  `/i-matter/` without any configuration.
- The included `.nojekyll` file tells GitHub not to run Jekyll processing.
- To publish an update: push the changes **and bump `CACHE_VERSION` in
  `service-worker.js`** so installed devices fetch the new files.

### Custom domain (optional)
Settings → Pages → Custom domain → enter your domain and follow the DNS
instructions. HTTPS stays enabled.

---

## Option B — Cloudflare Pages

### B1. Deploy from Git (recommended)

1. Push the project to GitHub or GitLab (see step 1 above).
2. Sign in at [dash.cloudflare.com](https://dash.cloudflare.com) →
   **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Select the repository.
4. Build settings:
   - Framework preset: **None**
   - Build command: *(leave empty)*
   - Build output directory: `/` (or leave as the root)
5. Click **Save and Deploy**. The app goes live at:

   ```
   https://YOUR-PROJECT.pages.dev
   ```

Every push to the main branch deploys automatically.

### B2. Direct upload (no Git account needed)

1. **Workers & Pages** → **Create** → **Pages** → **Upload assets**.
2. Name the project, then drag-and-drop the whole project folder.
3. Click **Deploy site**.

### Custom domain (optional)
Pages project → **Custom domains** → **Set up a custom domain**.

---

## Option C — Any other static host

Upload all files (keeping the folder structure) to any web server with
HTTPS: Netlify, school servers, shared hosting, etc. No configuration
needed.

## Local testing before deploying

```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

Service workers work on `http://localhost` without HTTPS, so offline mode
can be tested locally: load the page once, stop the server, and reload.

## Releasing updates

1. Edit files (usually under `data/`).
2. Bump `CACHE_VERSION` in `service-worker.js` (e.g. `"i-matter-v2"`).
3. Update `version` in `data/config.js` and add a `CHANGELOG.md` entry.
4. Push / re-upload. Users with the installed app will see an
   "update ready" notification the next time they open it with a connection.
