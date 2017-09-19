// Service Worker
importScripts('js/cache-polyfill.js');

const version = 'v1.0.1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('olivier-tille-' + version)
      .then((cache) =>
        cache.addAll([
         '/',
         '/js/cache-polyfill.js',
         '/sw.js',
         '/index.html',
         '/index.html?utm_source=homescreen',
         '/?utm_source=homescreen',
         '/img/olivier-tille.jpg',
         '/img/amg.png',
         '/img/micoach.png',
         '/img/malibu.png',
         '/img/sleeman.png',
         '/img/wonderbug.png',
         '/img/jardins-terrerouge.png'
        ]))
      .catch(console.error.bind(console, 'Error opening cache'))
  )
});

self.addEventListener('fetch', (event) =>
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
      .catch(console.error.bind(console, 'Error loading URL'))
  )
);
