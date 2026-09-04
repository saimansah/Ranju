// Service Worker for Ranju Sah Official Website
// Cache-First with Network Fallback for static assets
const CACHE_NAME = 'ranju-sah-v1.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './css/style.css',
  './js/main.js',
  './manifest.json',
  './assets/favicon.png',
  './assets/ranju-sah.jpg',
  './assets/ranju-press-mics.jpg',
  './assets/bhansar-andolan.jpg',
  './assets/justice-aarti-sah.png',
  './assets/women-empowerment.jpg',
  './assets/door-to-door-campaign.jpg',
  './assets/ajp-logo-red.png',
  './assets/ajp-logo-clean.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only cache GET requests
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cached, then fetch fresh in background (Stale-While-Revalidate)
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse));
          }
        }).catch(() => {/* Offline fallback */});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
