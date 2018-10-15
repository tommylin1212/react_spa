importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "bd72397545634f328848160a627fb5e5"
  },
  {
    "url": "precache-manifest.454490f1efbd586d90ae7720d2e8c739.js",
    "revision": "454490f1efbd586d90ae7720d2e8c739"
  },
  {
    "url": "service-worker.js",
    "revision": "62be7125a0b6c1e7f12a5cecb57f44b1"
  },
  {
    "url": "static/css/main.1958dad7.chunk.css",
    "revision": "b0b2fba93519660167690923e8d89669"
  },
  {
    "url": "static/js/1.9b7dad28.chunk.js",
    "revision": "10052771a20565342ebecf46bf4700df"
  },
  {
    "url": "static/js/main.53ce1de7.chunk.js",
    "revision": "c313b8fc462fa3917d5c0e64551db189"
  },
  {
    "url": "static/js/runtime~main.e69d20ec.js",
    "revision": "2e72fd40b8bdc6e787d0350d5f580c71"
  },
  {
    "url": "static/media/largeimage.678fd357.jpg",
    "revision": "678fd35739c62777f82249cc931ec9ac"
  }
]);

workbox.routing.registerRoute(
    new RegExp('.*'),
    workbox.strategies.cacheFirst()
  );