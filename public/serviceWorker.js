const CACHE_NAME = 'pwa_blissv4';
const urlsToCache = ['index.html'];

const self = this;

// Install SW
// V0
// self.addEventListener('install', (event) => {
//     event.waitUntil(
//         caches.open(CACHE_NAME)
//             .then((cache) => {
//                 console.log('Opened cache');
//                 return cache.addAll(urlsToCache);
//             })
//     );
// });

// V1
self.addEventListener('install', (event) => {
    // Once the service worker is installed, go to the next stage
    event.waitUntil(self.skipWaiting());
});

// Listen / Cache and return for requests
// V0
// self.addEventListener('fetch', (event) => {
//     if (event.request.mode === 'navigate') {
//         // console.log("wika ? navigate")
//         event.respondWith(caches.match('/index.html'));
//     } else {
//         // Your other response logic goes here.
//         event.respondWith(
//             caches.match(event.request)
//                 .then((response) => {
//                     // Cache hit - return response
//                     // console.log("response", response)
//                     // console.log("event.request ?", event.request)
//                     if (response) {
//                         // console.log("im in wola");
//                         return response;
//                     }
//                     return fetch(event.request);
//                 })
//         );
//     }
// });

// V1
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                return response || fetch(event.request)
                    .then((response) => {
                        // let responseClone = response.clone();
                        // caches.open(CACHE_NAME)
                        //     .then((cache) => {
                        //         cache.put(event.request, responseClone);
                        //     });
                        //
                        // return response;
                        if (response) {
                            return response;
                        }
                        return fetch(event.request);
                    })
                    .catch(() => caches.match('index.html'));
            })
    );
});

// Activate / Update the SW
// V0
// self.addEventListener('activate', (event) => {
//     const cacheWhitelist = [];
//     cacheWhitelist.push(CACHE_NAME);
//
//     event.waitUntil(
//         caches.keys().then((cacheNames) => {
//             return Promise.all(
//                 cacheNames.map(cacheName => {
//                     if (!cacheWhitelist.includes(cacheName)) {
//                         return caches.delete(cacheName);
//                     }
//                 })
//             );
//         })
//     );
// });

// V1
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((cacheName) => cacheName !== CACHE_NAME)
                    .map((cacheName) => caches.delete(cacheName))
            )
        })
    );
});