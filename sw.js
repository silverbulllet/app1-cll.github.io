//sw.js

console.log(' in sw.js ');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  //'/styles/main.css',
  //'/script/main.js'
];

self.addEventListener('install', function(event) {
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
	console.log('fetch...', { event })
});