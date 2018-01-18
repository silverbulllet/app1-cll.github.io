var dataCacheName = 'weatherData-v1';

var cacheName = 'my-first-pwapp-assets-v1';

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
  console.log('[Service Worker] Fetch', e.request.url);
  var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  if (e.request.url.indexOf(dataUrl) > -1) {
    /*
     * When the request URL contains dataUrl, the app is asking for fresh
     * weather data. In this case, the service worker always goes to the
     * network and then caches the response. This is called the "Cache then
     * network" strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     */
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});