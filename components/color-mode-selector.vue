<template>
<div class=" flex space-x-2 items-center">
    <div class="text-gray-500 text-xs" v-if="showNextModelLabel">Change to {{ nextMode }}</div>
    <button @click="toggleMode" @mouseenter="showNextModelLabel = true" @mouseleave="showNextModelLabel = false" class="hover:bg-gray-200 dark:hover:bg-gray-600 px-2 py-1 text-gray-500 text-2xl md:text-base">
   {{ nextModeIcon }}
  </button>
</div>
</template>

<script setup lang="ts">
const showNextModelLabel = ref < boolean > (false);

const colorMode = useColorMode()

type Mode = 'system' | 'dark' | 'light';
const modes: Mode[] = ['system', 'dark', 'light', ];

const nextModeIcons = {
    system: '🌓',
    dark: '🌑',
    light: '🌕'
}
const nextMode = computed(() => {
    const currentModeIndex = modes.indexOf(colorMode.preference);
    let nextModeIndex = null
    if (currentModeIndex + 1 === modes.length) {
        nextModeIndex = 0
    } else {
        nextModeIndex = currentModeIndex + 1
    }
    return modes[nextModeIndex]
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])
const toggleMode = () => colorMode.preference = nextMode.value
</script>

<style lang="scss" scoped>

</style>
