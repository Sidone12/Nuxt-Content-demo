<template>
  <BlogPosts v-slot="{posts}" :limit="limit">
    <div v-for="post in posts" :key="post._path">
        <NuxtLink :to="post._path" class="column hover:bg-slate-100 dark:hover:bg-slate-800">
                {{ post.title }}
            </NuxtLink>
    </div>
  </BlogPosts>
</template>

<script lang="ts" setup>
defineProps({
    limit: {
        type: Number,
        default: null
    }
})
</script>

<style>

</style>
