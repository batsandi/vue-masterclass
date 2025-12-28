<template>
  <button :class="['border px-3 py-1 rounded-full hover:scale-110 transition', variants[variant] ?? variants.default]"
  @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<script setup>
const variants = {
  default: 'hover:bg-green-600 border-green-400',
  danger: 'hover:bg-red-600 border-red-400',
}
defineProps(
  {
    variant: {
      type: String,
      default: 'default'
    }
  }
)
defineEmits([
  'click'
])
</script>
