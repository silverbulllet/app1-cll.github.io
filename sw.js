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
          console.warn('Cache hit !!', { response })
          return response;
        }

        var fetchRequest = event.request.clone();
        console.log('Cache not hit 💔 ', { fetchRequest });

        return fetch(fetchRequest).then(function(response){
        	console.log('returning a fetch...', { response })

        	if(!response || response.status !== 200 || response.type !== 'basic') 
        		return response;

        	var responseToCache = response.clone();

        	caches.open(CACHE_NAME)
        		.then(function(cache){
        			console.log('caching new request...', { fetchRequest, responseToCache });
        			cache.put(event.request, responseToCache);
        		});

        	return response;
        });
      }
    )
  );
});