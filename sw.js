importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "92cc9d9867933ab050bdccba8f72217d"
  },
  {
    "url": "precache-manifest.9c0337b1d3cadc51f4c9363c810789a6.js",
    "revision": "9c0337b1d3cadc51f4c9363c810789a6"
  },
  {
    "url": "service-worker.js",
    "revision": "7ce678e9b6f30b1a9866839b70f42b3c"
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
    "url": "static/js/main.a64357e1.chunk.js",
    "revision": "a5c0034616701587b1dd0060b51a2ce5"
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
/*workbox.precaching.precacheAndRoute([
  new RegExp('.*\.jpg')
]);*/
workbox.routing.registerRoute(
    new RegExp('.*'),
    workbox.strategies.networkFirst()
  );