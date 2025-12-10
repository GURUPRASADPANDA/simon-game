const CACHE_NAME = "simon-cache-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./style.css",
  "./game.js",
  "./sounds/blue.mp3",
  "./sounds/green.mp3",
  "./sounds/red.mp3",
  "./sounds/yellow.mp3",
  "./sounds/wrong.mp3",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
