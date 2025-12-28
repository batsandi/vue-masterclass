<template>
  <SectionedCard>
    <div class="flex justify-between">
      <div>
        You are booked
      </div>
      <MyButton variant="danger">
        Cancel
      </MyButton>
    </div>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import MyButton from '@/components/MyButton.vue'
</script>
