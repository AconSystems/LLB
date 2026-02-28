/* AconSystems • Prompt Maschine v0.1.9 */
const CACHE = "prompt-maschine-v0.1.9-gate1";

const ASSETS = [
  "./index.html",
  "./app.html",
  "./gate.js",
  "./styles.css",
  "./data.js",
  "./suno_terms.js",
  "./version.js",
  "./app.js",
  "./manifest.webmanifest",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-1028.png"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k))))
    ).then(() => self.clients.claim())
  );
});

async function cachePut(request, response) {
  const cache = await caches.open(CACHE);
  await cache.put(request, response);
}

async function networkFirst(request) {
  try {
    const response = await fetch(request, { cache: "no-store" });
    if (response && response.ok) {
      cachePut(request, response.clone());
    }
    return response;
  } catch (err) {
    const cached = await caches.match(request);
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response && response.ok) {
    cachePut(request, response.clone());
  }
  return response;
}

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;

  const path = url.pathname.toLowerCase();
  const isHtml = req.headers.get("accept")?.includes("text/html") || path.endsWith(".html");
  const isJsCss = path.endsWith(".js") || path.endsWith(".css") || path.endsWith(".webmanifest");

  // For app code: always prefer network so local changes show up immediately.
  if (isHtml || isJsCss) {
    e.respondWith(networkFirst(req));
    return;
  }

  // For icons/other assets: cache-first is fine.
  e.respondWith(cacheFirst(req));
});
