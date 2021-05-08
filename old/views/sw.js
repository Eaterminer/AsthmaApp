console.log('sw.js: Hello World!');

const version = "3.1.20";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/AsthmaApp/`,
        `/AsthmaApp/home.html`,
        `/AsthmaApp/styles.css`,
        `/AsthmaApp/scripts.js`,
        `/AsthmaApp/settings.html`,
        `/AsthmaApp/functions.js`
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, { ignoreSearch: true }))
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
