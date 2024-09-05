// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content', '@nuxt/image'],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'},
  },
  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'min-light',
        // Theme used if `html.dark`
        dark: 'min-dark',
      },
    },
  },
  compatibilityDate: '2024-07-03',
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  generate: {
    routes: [
      '/',
      '/about',
      '/blog',
      '/blog/2024/first',
      '/blog/first',
      '/blog/second',
      '/blog/vue-introduction',
      '/projects',
    ],
  },
});