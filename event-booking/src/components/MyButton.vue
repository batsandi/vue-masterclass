<template>
  <button class="border border-green-400 px-3 py-1 rounded-full hover:scale-110 hover:bg-green-600 transition" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String
})
defineEmits([
  'click'
])
</script>
