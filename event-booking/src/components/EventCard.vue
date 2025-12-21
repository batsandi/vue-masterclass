<template>
  <div class="text-blue-100 border border-cyan-500 bg-blue-900 rounded-md">
    <h3 class="p-3 font-medium border-b border-cyan-400">{{ title }}</h3>
    <p class="p-3 text-xs font-mono border-b border-cyan-400">{{ date }}</p>
    <p class="p-3 text-xs">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
    title: String,
    date: String,
    description: String,
})
</script>