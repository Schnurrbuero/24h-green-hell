// Service Worker deaktiviert - verhindert Cache-Probleme
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => caches.delete(k))))
    .then(() => self.clients.claim())
  );
});
// Kein fetch-Handler = kein Caching, immer direkt vom Server
