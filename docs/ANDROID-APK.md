# Android APK (offline app to share with teams)

Alongside the installable web app (PWA), I Matter ships as a native **Android
app** you can download as a single `.apk` file and share with your team — over
WhatsApp, email, a USB stick, or a link.

## Why this exists

The APK is a thin Android **WebView** that **bundles the whole web app inside
it** (all HTML, CSS, JS, and content live in `assets/www/` and load from
`file:///android_asset/www/`). Because everything is inside the APK:

- It works **100% offline — no internet, ever**, not even the first time. There
  is no service worker and nothing to download after install.
- It requests **no permissions** (no `INTERNET` permission is declared).
- It is a **single file** you can pass around and side-load on any Android 7.0+
  device.

Tapping a phone number, email address, WhatsApp, or web link inside the app
opens the phone's dialer / mail / browser as usual.

## Get the APK (no local tools needed)

The APK is built by GitHub Actions, so you never need Android Studio.

**Option A — build on demand (artifact):**
1. On GitHub, open the **Actions** tab.
2. Choose **Build Android APK** → **Run workflow** → run it on `main`.
3. When it finishes (a few minutes), open the run and download the
   **`i-matter-apk`** artifact. Inside is `i-matter-<ref>.apk`.

**Option B — publish a release (permanent shareable link):**
1. Create and push a tag, e.g. `v4.2.0`:
   ```bash
   git tag v4.2.0 && git push origin v4.2.0
   ```
2. The workflow builds the APK and attaches it to a new **GitHub Release** for
   that tag. The release has a public download URL you can share directly.

## Install it on a phone

1. Copy `i-matter-*.apk` to the Android device (link, WhatsApp, email, cable…).
2. Tap the file. Android will ask to **allow installing unknown apps** for the
   app you opened it from (Files / Chrome / WhatsApp) — allow it.
3. Install, then open **I Matter**. Turn on aeroplane mode and confirm it still
   works — it will.

> The APK is signed with the standard Android **debug** key. That is fine for
> installing and sharing internally. To publish on Google Play you would sign
> with your own release key (see below).

## Build it locally (optional)

Requires the Android SDK (e.g. via Android Studio) and JDK 17.

```bash
bash tools/sync-web-assets.sh          # copy the web app into android/app/src/main/assets/www
cd android
./gradlew assembleDebug                 # -> app/build/outputs/apk/debug/app-debug.apk
```

## Keeping the app in sync

The bundled copy under `android/app/src/main/assets/www/` is **generated** by
`tools/sync-web-assets.sh` (and is git-ignored). Whenever you change the web
app, that script re-copies it, so the APK always matches the website. The CI
workflow runs it automatically before every build.

To bump the app version, edit `versionCode` / `versionName` in
`android/app/build.gradle` (keep them in step with `data/config.js`).

## Publishing to Google Play (later, optional)

1. Generate an upload key and switch the build to a `release` signing config.
2. Store the keystore and passwords as GitHub Actions **secrets** and sign in
   the workflow, or build a signed release locally with `./gradlew assembleRelease`.
3. Because the app is a self-contained offline WebView, no Digital Asset Links
   or hosted URL are required.
