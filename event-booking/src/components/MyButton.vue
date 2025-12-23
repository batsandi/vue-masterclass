<template>
  <button class="border border-green-400 px-3 py-1 rounded-full hover:scale-110 hover:bg-green-600 transition" @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
defineEmits([
  'click'
])
</script>
