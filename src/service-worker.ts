self.addEventListener('install', (event) => {
    console.log('service worker: Installed');
})

self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetch')
})