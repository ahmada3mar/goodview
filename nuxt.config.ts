// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');

export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image'],

  css:['~/assets/app.css'],
    colorMode: {
    preference: 'light'
  },
  app:{
        baseURL: '/fast_static/',
        buildAssetsDir: 'assets',
        pageTransition: { name: 'page', mode: 'out-in' },
        layoutTransition: false

  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../fast_static/docs')
    }
  },
})