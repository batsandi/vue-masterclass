<template>
  <SectionedCard>
    <div class="flex justify-between items-center">
      <div class="flex space-x-2">
        <div>
          {{ title }}
        </div>
        <component :is="icon" :class="{'animate-spin': pending}"></component>
      </div>
      <MyButton variant="danger" @click="$emit('cancel')"> Cancel </MyButton>
    </div>
  </SectionedCard>
</template>

<script setup>
import { computed } from 'vue'
import SectionedCard from '@/components/SectionedCard.vue'
import MyButton from '@/components/MyButton.vue'
import { LoaderCircle, Check } from 'lucide-vue-next'

const props = defineProps({
  title: String,
  status: String,
})

defineEmits(['cancel'])

const pending = computed(() => props.status === 'pending')
const icon = computed(() => pending.value ? LoaderCircle : Check)
</script>
