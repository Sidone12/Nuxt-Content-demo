<template>
<nav class="font-mono">
    <ul class="flex space-x-4">
        <li>
            <nuxt-link class="link" to="/">Home</nuxt-link>
        </li>
        <li>
            <nuxt-link class="link" to="/about">about</nuxt-link>
        </li>
        <li>
            <nuxt-link class="link" to="/projects">projects</nuxt-link>
        </li>
        <li>
            <nuxt-link class="link" to="/blog">blog</nuxt-link>
        </li>
    </ul>
</nav>
</template>

<style scoped>
.link {
    @apply p-2 hover:bg-gray-200 rounded
}
</style>