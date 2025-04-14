export default defineNuxtConfig({
  ssr: false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  plugins: ['~/plugins/gtm.js'],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],
  css: ['~/assets/app.css'],
  colorMode: {
    preference: 'light',
  },
  app: {
    buildAssetsDir: 'assets',
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: false,
    head: {
      title: 'Reliable Moving Services in USA | Moving | Storing | Relocation',
      meta: [
        { hid: 'description', name: 'description', content: 'Get trusted moving services in USA, for home, office, Storing, and Relocation. Professional packing, safe transportation, and affordable pricing guaranteed.' },
        { hid: 'keywords', name: 'keywords', content: 'USA movers, moving company USA, home movers, office relocation, long-distance moving' },
        { name: 'author', content: 'USA Movers' },
        { property: 'og:title', content: 'Reliable Moving Services in USA | Home & Office Movers' },
        { property: 'og:description', content: 'Professional movers offering local, long-distance, and storage services in USA.' },
        { property: 'og:type', content: 'website' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.goodview-moving.com' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },

        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap'
        },
      ],
      htmlAttrs: {
        lang: 'en-US',
      },
      script: [
        { src: '/js/google.js' },
        {
          src: 'https://analytics.ahrefs.com/analytics.js',
          'data-key': 'iFiIzyMffkiGpsnEDVR+Tw',
          async: true
        }
      ],
    },
  },
  site: {
    url: 'https://www.goodview-moving.com',
    name: 'GoodView Moving',
  },
})
