// service-worker.js
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open('agrodivel-cache').then(cache => {
      return cache.addAll([
        '/',
        'index.html',
        'formulario.html',
        'sempiloto.html',
        'compiloto.html',
        'resultadofinal.html',
        'manifest.json',
        'logo-agrodivel.png',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
