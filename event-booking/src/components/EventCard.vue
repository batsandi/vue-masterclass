<template>
  <SectionedCard>
    <template #header>
      {{ title }}
    </template>
    <template #default>
      {{ date }}
    </template>
    <template #footer>
      <div class="space-y-4">
        <p>
          {{ description }}
        </p>
        <div class="flex justify-end">
        <MyButton @click="$emit('register')">
          Sign up
        </MyButton>
        </div>
      </div>
    </template>
  </SectionedCard>
</template>

<script setup>
import MyButton from '@/components/MyButton.vue'
import SectionedCard from '@/components/SectionedCard.vue';

defineProps({
    title: String,
    date: String,
    description: String,
})

defineEmits(["register"])

</script>
