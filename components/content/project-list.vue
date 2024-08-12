<template>
<div class="not-prose">
    <section v-if="pending">Loading....</section>
    <section v-else-if="error">Somthing went wrong.... Try again.</section>
    <section v-else>
        <h2 class="mb-6">Here we display the repos!</h2>
        <ul class="grid grid-cols-1 gap-4">
            <li class="mb-10 border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono" v-for="repository in repos" :key="repository.id">
                <a :href="repository.html_url" target="_blank">
                    <div class="flex items-center justify-between text-sm">
                        <div class=" font-semibold">{{ repository.name }}</div>
                        <div>{{ repository.stargazers_count }} ★</div>
                    </div>
                    <p class=" text-xs">
                        {{ repository.description }}
                    </p>
                </a>
            </li>
        </ul>

    </section>
</div>
</template>

<script setup lang="ts">
const { error, pending, data } = await useFetch < Repository[] > ('https://api.github.com/users/Sidone12/repos');

const repos = computed(() => data.value.filter(el => el.description).sort((a, b) => b.stargazers_count - a.stargazers_count))
</script>

<style lang="scss" scoped>

</style>