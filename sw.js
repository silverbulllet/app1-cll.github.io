//sw.js
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  //'/styles/main.css',
  //'/script/main.js'
];

self.addEventListener('install', function(event) {
  console.log('--- service worker installing ---', { event })
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
  console.log('--- service worker fetching --- ', { event })
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          console.warn('Cache hit ✔️', { response })
          return response;
        }

        var fetchRequest = event.request.clone();
        console.warn('Cache not hit 💔 ', { fetchRequest });

        return fetch(fetchRequest).then(function(response){
        	console.log('returning response of the fetch...', { response })

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


self.addEventListener('activate', function(event) {
  console.log('--- service worker activate --- ');

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      console.log({ cacheNames });
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});