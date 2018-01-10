//sw.js

console.log(' in sw.js ');


self.addEventListener('install', function(event) {
	console.log('installing...', { event })
});


self.addEventListener('fetch', function(event) {
	console.log('fetch...', { event })
});