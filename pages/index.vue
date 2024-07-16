<script setup>
useSeoMeta({
  title: ' Main page',
  description: ' My Nuxt Portfolio',
  ogTitle: 'Oleksii Portfolio',
  ogDescription: 'Web dew Portfolio',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Oleksii Portfolio',
  twitterDescription: 'Web dew Portfolio',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})
// colorMode module
// definePageMeta({
//   colorMode: 'light',
// })

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
})
</script>



<template>
    <div>
        Hello
    </div>
</template>