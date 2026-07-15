/* ==========================================================================
   I MATTER — SERVICE WORKER
   Caches the whole app so it works 100% offline after the first visit.
   The app only needs the internet on that first load; after that every
   screen, lesson, story, and session plan is served from the cache.

   WHEN YOU EDIT CONTENT: bump CACHE_VERSION below (e.g. "v7") so installed
   devices download the new files. Users see an update notification.

   Design notes (why it is written this way):
   - Precaching is RESILIENT: each file is fetched and stored individually,
     so one missing/slow/redirected file can never abort the whole cache
     (the old atomic cache.addAll would fail entirely if a single request
     redirected — which some hosts, e.g. Cloudflare Pages, do for
     "/index.html" — leaving the installed app with an empty cache and no
     offline support).
   - Redirected responses are re-wrapped before caching, because the Cache
     API refuses to store a response whose `redirected` flag is set.
   - Navigations are served from the cached app shell (index.html) first, so
     the single-page app opens instantly and works with no connection.
   ========================================================================== */

var CACHE_VERSION = "i-matter-v7";

/* The app shell — must be cached for the app to open offline. */
var APP_SHELL = "./index.html";

var PRECACHE_URLS = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./manifest.json",
  "./data/config.js",
  "./data/strings.js",
  "./data/framework.js",
  "./data/content.js",
  "./data/stories.js",
  "./data/session-plans.js",
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

/* Fetch one URL and store it, tolerating redirects and individual failures. */
function precacheOne(cache, url) {
  return fetch(new Request(url, { cache: "reload", redirect: "follow" }))
    .then(function (response) {
      if (!response || !(response.ok || response.type === "opaque")) return;
      /* The Cache API rejects responses with the `redirected` flag set, so
         rebuild a clean response from the body before storing. */
      if (response.redirected) {
        return response.blob().then(function (body) {
          var headers = new Headers();
          try {
            var ct = response.headers.get("Content-Type");
            if (ct) headers.set("Content-Type", ct);
          } catch (e) { /* headers may be opaque */ }
          return cache.put(url, new Response(body, { status: 200, statusText: "OK", headers: headers }));
        });
      }
      return cache.put(url, response);
    })
    .catch(function () { /* ignore a single file that could not be fetched */ });
}

self.addEventListener("install", function (event) {
  /* Activate the new worker as soon as it finishes installing. */
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return Promise.all(PRECACHE_URLS.map(function (url) {
        return precacheOne(cache, url);
      })).then(function () {
        /* Guarantee the app shell is present — retry it once if it is not,
           because without it the app cannot open offline. */
        return cache.match(APP_SHELL).then(function (hit) {
          if (!hit) return precacheOne(cache, APP_SHELL);
        });
      });
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

self.addEventListener("fetch", function (event) {
  var req = event.request;
  if (req.method !== "GET") return;

  var sameOrigin = req.url.indexOf(self.location.origin) === 0;

  /* Navigations (opening the app or any route): serve the cached app shell
     first so the SPA works instantly and offline. This is a hash-router, so
     index.html is the shell for every route. */
  if (req.mode === "navigate") {
    event.respondWith(
      caches.match(APP_SHELL).then(function (shell) {
        if (shell) return shell;
        return fetch(req).catch(function () {
          return caches.match("./");
        });
      })
    );
    return;
  }

  /* Everything else: cache-first, then network (and cache same-origin GETs
     for next time). */
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (response) {
        if (response && response.ok && sameOrigin && !response.redirected) {
          var copy = response.clone();
          caches.open(CACHE_VERSION).then(function (cache) { cache.put(req, copy); });
        }
        return response;
      }).catch(function () {
        /* Offline and not cached — nothing we can do for this sub-resource. */
        return undefined;
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
