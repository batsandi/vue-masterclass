<template>
  <SectionedCard>
    <template #default>
      <div class="flex justify-between">
        <div class="w-1/3 h-4 bg-gray-400 rounded animate-pulse"></div>
        <div class="w-1/6  h-4 bg-gray-400 rounded animate-pulse"></div>
      </div>
    </template>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue';
</script>
