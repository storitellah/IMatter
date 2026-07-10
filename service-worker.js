/* ==========================================================================
   I MATTER — SERVICE WORKER
   Caches the whole app so it works fully offline after the first visit.

   WHEN YOU EDIT CONTENT: bump CACHE_VERSION below (e.g. "v2") so installed
   devices download the new files. Users will see an update notification.
   ========================================================================== */

var CACHE_VERSION = "i-matter-v1";

var PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./data/config.js",
  "./data/strings.js",
  "./data/content.js",
  "./data/games-data.js",
  "./data/stories.js",
  "./data/activities.js",
  "./data/sessions.js",
  "./data/extras.js",
  "./assets/logos/i-matter-logo.svg",
  "./assets/logos/imagine-tomorrow-logo.svg",
  "./icons/favicon-16.png",
  "./icons/favicon-32.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/maskable-512.png",
  "./icons/apple-touch-icon.png",
  "./favicon.ico"
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cache.addAll(PRECACHE_URLS);
    })
  );
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (key) { return key !== CACHE_VERSION; })
          .map(function (key) { return caches.delete(key); })
      );
    }).then(function () {
      return self.clients.claim();
    })
  );
});

/* Cache-first strategy: everything is local, so the cache is the source of
   truth. Network is used only as a fallback (e.g. brand-new files). */
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(function (cached) {
      if (cached) return cached;
      return fetch(event.request).then(function (response) {
        /* Cache successfully fetched same-origin files for offline use */
        if (response && response.ok && event.request.url.indexOf(self.location.origin) === 0) {
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function () {
        /* Offline and not cached: fall back to the app shell for navigations */
        if (event.request.mode === "navigate") {
          return caches.match("./index.html");
        }
      });
    })
  );
});

/* The app sends this message when the user taps "Refresh now" on the
   update notification. */
self.addEventListener("message", function (event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});
