importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "voice-list",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.2efaeafa535b4dfcd969.js",
    "revision": "9ea45b20417d938947b5a69e953dc348"
  },
  {
    "url": "/_nuxt/layouts_default.77e85b25489d6e1747bf.js",
    "revision": "1bbb1e679a889a9f26ebf57fc058135c"
  },
  {
    "url": "/_nuxt/manifest.5ccc63a8e0f76c8b3522.js",
    "revision": "68bb523537ba47fcc18341c76dd79871"
  },
  {
    "url": "/_nuxt/pages_index.54d76f98518bbaf795f0.js",
    "revision": "c5da17aed76a1c64cc04f97603aacee4"
  },
  {
    "url": "/_nuxt/vendor.8ce302ee50a8c9509876.js",
    "revision": "cd186c3ce3aa6c491c447f09ff035404"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

