const version = "0.0.10";
const cacheName = `formerhospital`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
        `/2.html`,
        `/3.html`,
        `/4.html`,
        `/5.html`,
        `/README.md`,
        `/sw.js`,
        `/style.css`,
        `/script.js`,
        `/testtransition.html`,
        `/assets/embed/sliders/sliders.md`,
        `/assets/images/icons/about.png`,
        `/assets/images/icons/back.png`,
        `/assets/images/icons/forward.png`,
        `/assets/images/icons/help.png`,
        `/assets/images/icons/report.png`,
        `/assets/images/photos/reuseallowed/003.jpg`,
        `/assets/images/slider/Bignold/Bignold1999.jpg`,
        `/assets/images/slider/Bignold/Bignold2019.jpg`,
        `/assets/images/slider/Whole Area/WholeArea1999.jpg`,
        `/assets/images/slider/Whole Area/WholeArea2003.jpg`,
        `/assets/images/slider/Whole Area/WholeArea2006.jpg`,
        `/assets/images/slider/Whole Area/WholeArea2018.jpg`,
        `/assets/logo/Logo.png`,
        `/media/motd/motdList.js`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});