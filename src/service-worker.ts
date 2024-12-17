self.addEventListener('install', (event) => {
    console.log('service worker: Installed', event);
})

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetch', event)
})