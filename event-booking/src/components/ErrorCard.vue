<template>
    <SectionedCard class="col-span-full">
    <div class="flex flex-col space-y-4 justify-around items-center">
      <slot></slot>
      <MyButton variant="danger" @click="retry" v-if="retry"> Retry </MyButton>
    </div>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue'
import MyButton from '@/components/MyButton.vue'

defineProps({
  retry: {
    type: Function,
    required: false
  }
})

</script>
