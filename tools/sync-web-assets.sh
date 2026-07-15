#!/usr/bin/env bash
#
# Copy the web app into the Android project so it can be bundled inside the
# APK and served fully offline from file:///android_asset/www/.
#
# Run this before building the APK (the CI workflow runs it automatically):
#   bash tools/sync-web-assets.sh
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DEST="$ROOT/android/app/src/main/assets/www"

echo "Syncing web assets -> $DEST"
rm -rf "$DEST"
mkdir -p "$DEST"

# Top-level app files
cp "$ROOT/index.html"        "$DEST/"
cp "$ROOT/styles.css"        "$DEST/"
cp "$ROOT/script.js"         "$DEST/"
cp "$ROOT/manifest.json"     "$DEST/"
cp "$ROOT/favicon.ico"       "$DEST/" 2>/dev/null || true
# service-worker.js is intentionally NOT copied: under file:// there is no
# service worker, and none is needed — every asset is already local.

# Content and asset folders
cp -R "$ROOT/data"    "$DEST/data"
cp -R "$ROOT/icons"   "$DEST/icons"
cp -R "$ROOT/assets"  "$DEST/assets"

echo "Done. Bundled files:"
find "$DEST" -type f | sed "s#$DEST/#  #" | sort
