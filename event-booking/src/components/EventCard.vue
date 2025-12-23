<template>
  <div class="text-blue-100 border border-cyan-500 bg-blue-900 rounded-md">
    <h3 class="p-3 font-medium border-b border-cyan-400">{{ title }}</h3>
    <p class="p-3 text-xs font-mono border-b border-cyan-400">{{ date }}</p>
    <p class="p-3 text-xs">{{ description }}</p>
    <section class="flex justify-end p-4">
      <MyButton @click="$emit('register')">
        Sign up
      </MyButton>
    </section>
  </div>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'

defineProps({
    title: String,
    date: String,
    description: String,
})

defineEmits(["register"])

</script>
