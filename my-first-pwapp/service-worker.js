var cacheName = 'my-first-pwapp-weatherPWA-v1';

var filesToCache = [
  '/my-first-pwapp/',
  '/my-first-pwapp/index.html',
  '/my-first-pwapp/scripts/app.js',
  '/my-first-pwapp/styles/inline.css',
  '/my-first-pwapp/images/clear.png',
  '/my-first-pwapp/images/cloudy-scattered-showers.png',
  '/my-first-pwapp/images/cloudy.png',
  '/my-first-pwapp/images/fog.png',
  '/my-first-pwapp/images/ic_add_white_24px.svg',
  '/my-first-pwapp/images/ic_refresh_white_24px.svg',
  '/my-first-pwapp/images/partly-cloudy.png',
  '/my-first-pwapp/images/rain.png',
  '/my-first-pwapp/images/scattered-showers.png',
  '/my-first-pwapp/images/sleet.png',
  '/my-first-pwapp/images/snow.png',
  '/my-first-pwapp/images/thunderstorm.png',
  '/my-first-pwapp/images/wind.png'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

// The activate event is fired when the service worker starts up.
self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  // When the app is complete, 
  // self.clients.claim() fixes a corner case 
  // in which the app wasn't returning the latest data.
  return self.clients.claim();
});


// intercept requests made from our Progressive Web App 
// and handle them within the service worker. 
self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});