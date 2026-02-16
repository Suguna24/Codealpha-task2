self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("fitness-app").then(cache => {
            return cache.addAll([
                "index.html",
                "style.css",
                "script.js"
            ]);
        })
    );
});