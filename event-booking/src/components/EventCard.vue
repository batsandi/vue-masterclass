<template>
  <BaseCard>
    <h3 class="pb-3 font-medium border-b border-cyan-400">{{ title }}</h3>
    <p class="py-3 text-xs font-mono border-b border-cyan-400">{{ date }}</p>
    <p class="py-3 text-xs">{{ description }}</p>
    <section class="flex justify-end">
      <MyButton @click="$emit('register')">
        Sign up
      </MyButton>
    </section>
  </BaseCard>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import BaseCard from '@/components/BaseCard.vue';

defineProps({
    title: String,
    date: String,
    description: String,
})

defineEmits(["register"])

</script>
