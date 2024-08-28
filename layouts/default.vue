<script setup>
useHead({
    titleTemplate: '%s - Oleksii Portfolio',
    link: [{
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            crossorigin: ''
        }
    ]
})
</script>
<template>
<div class="container mx-auto max-w-4xl">
    <header class="flex justify-between items-center pt-5">
        <div class="flex items-center space-x-12">
            <div>
                <nuxt-link class="hover:bg-gray-200 text-xl font-semibold p-2 dark:hover:bg-gray-800 " to="/">Oleksii Katerynchuk</nuxt-link>
            </div>
            <Menu/>
        </div>
       <ClientOnly >
        <ColorModeSelector />
       </ClientOnly>
    </header>
    <main class="p-2 mt-10">

        <slot />
    </main>
</div>
</template>

<style>
body {
    font-family: 'Roboto';
}

body {
    @apply bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300
}
</style>