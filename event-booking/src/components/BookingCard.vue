<template>
  <SectionedCard>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <div>
          {{ title }}
        </div>
        <div>
          {{ status }}
        </div>
      </div>
      <MyButton variant="danger" @click="$emit('cancel')"> Cancel </MyButton>
    </div>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import MyButton from '@/components/MyButton.vue'

defineProps({
  title: String,
  status: String
})

defineEmits(["cancel"])

</script>
