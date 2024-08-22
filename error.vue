<template>
 <NuxtLayout>
    <section>
        <h1 class="text-4xl mb-4">Upps {{ error.statusCode }}</h1>
        <h2 lass="text-2xl mb-4">{{ error.statusMessage }}</h2>
    </section>
 </NuxtLayout>
</template>

<script lang="ts" setup>
defineProps({ error: Object })
</script>

<style>

</style>