console.log('sw.js: Hello World!');

const version = "3.1.20";
const cacheName = `airhorner-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/styles.css`,
        `/scripts.js`,
        `/functions.js`,
        `/third-party/original/w3.js`,
        `/third-party/original/w3.css`,
        `/review.html`,
        `/tour.html`,
        '/images/animation1.gif',
        '/images/animation2.gif',
        '/images/animation3.gif',
        '/images/animation4.gif',
        '/images/animation5.gif',
        '/images/animation6.jpg',
        '/images/animation7.gif',
        '/images/animation8.gif',
        '/images/animation9.gif',
        '/images/animation10.gif',
        '/images/animation11.gif',
        '/images/animation12.gif',
        '/images/animation13.gif',
        '/images/inhaler.svg',
        '/images/favicon.png',
        '/reward/game/index.html',
        '/reward/game/script.js',
        '/reward/game/style.css'
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
