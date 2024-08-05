<script setup>
const route = useRoute();
console.log(route.params.slug)
</script>

<template>
<article class="prose dark:prose-invert">
    <ContentDoc />
</article>
</template>

