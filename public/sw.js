// Home-School-Lite Scoped Service Worker
// Strictly scoped to /Home-School-Lite/ and only touches caches prefixed with "hsl-"
const APP_SCOPE = '/Home-School-Lite/';
const CACHE_PREFIX = 'hsl-';
const CACHE_VERSION = 'hsl-v1.3.0-runtime';

const PRECACHE_URLS = [
  '/Home-School-Lite/',
  '/Home-School-Lite/index.html',
  '/Home-School-Lite/manifest.webmanifest',
  '/Home-School-Lite/icons/icon-192.svg',
  '/Home-School-Lite/icons/icon-512.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_VERSION)
      .then((cache) => cache.addAll(PRECACHE_URLS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            // CRITICAL: Only delete caches belonging to Home-School-Lite (hsl-*)
            // Never delete sibling app caches on p4kk4s4n.github.io
            .filter((key) => key.startsWith(CACHE_PREFIX) && key !== CACHE_VERSION)
            .map((key) => caches.delete(key))
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  // Strictly ignore any request outside our origin or outside /Home-School-Lite/
  if (url.origin !== self.location.origin) return;
  if (!url.pathname.startsWith(APP_SCOPE)) return;

  // Never serve version.json from cache so update checks are always fresh
  if (url.pathname.endsWith('/version.json')) {
    event.respondWith(fetch(request, { cache: 'no-store' }));
    return;
  }

  // Network-first for HTML navigation, Stale-While-Revalidate for assets/content
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() => caches.match('/Home-School-Lite/index.html'))
    );
    return;
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      const networkFetch = fetch(request)
        .then((response) => {
          if (response && response.status === 200) {
            const copy = response.clone();
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
