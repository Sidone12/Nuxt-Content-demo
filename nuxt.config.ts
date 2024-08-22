// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', '@nuxt/content'],
  app: {
    pageTransition: {name: 'page', mode: 'out-in'}
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
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2024-07-03',
});