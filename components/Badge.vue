<template>
    <div class="flex items-center gap-1 bg-gray-800/80 p-2 rounded-lg text-sm text-gray-300 hover:bg-gray-700/90 transition duration-300">
        <img :src="src" :alt="alt" class="w-4 h-4"/>
        <span>
            {{ text }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    src: { type: String, required: true },
    alt: { type: String, required: true },
    text: { type: String, required: true }
})
</script>