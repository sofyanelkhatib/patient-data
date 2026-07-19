const CACHE='patientdata-v1';
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(['./','./index.html']);}));
  self.skipWaiting();
});
self.addEventListener('activate',function(e){self.clients.claim();});
self.addEventListener('fetch',function(e){
  e.respondWith(
    fetch(e.request).catch(function(){return caches.match(e.request);})
  );
});
