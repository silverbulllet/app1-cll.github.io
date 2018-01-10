//sw.js

console.log(' in sw.js ');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  //'/styles/main.css',
  //'/script/main.js'
];

self.addEventListener('install', function(event) {
  console.log('install...', { event })
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});



self.addEventListener('fetch', function(event) {
  console.log('fetching...', { event })
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.log('Cache hit!!!!', { response })
          return response;
        }
        console.log('Cache not hit .. ', { request: event.request });
        return fetch(event.request);
      }
    )
  );
});