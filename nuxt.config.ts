// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
import { writeFile } from 'fs/promises';


export default defineNuxtConfig({
  ssr:false,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
     '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
  ],

  css:['~/assets/app.css'],
    colorMode: {
    preference: 'light'
  },
  app:{
        // baseURL: '/fast_static/',
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
          ],
          htmlAttrs:{
            lang:'en-US'
          },
          
        },


  },
  // nitro: {

  //   output: {
  //     publicDir: path.join(__dirname, '../fast_static/docs')
  //   }
  // },

  site: { 
    url: 'https://www.goodview-moving.com', 
    name: 'GoodView Moving' 
    }, 

    // hooks: {
    //   'nitro:build:public-assets': async  () => {
    //     const distDir = path.join(__dirname, '../fast_static/docs');
    //     const cnamePath = `${distDir}/CNAME`;
    //     const domainName = 'www.goodview-moving.com'; // Replace with your domain name
    //     try{
    //       await writeFile(cnamePath, domainName, 'utf8');
    //       await writeFile(`${distDir}/.nojekyll`, '', 'utf8');
    //       console.log(`CNAME,.nojekyll file created at: ${distDir}`);

    //     }catch(e){
    //       console.log(e)
    //     }
    //   },
    // },


})