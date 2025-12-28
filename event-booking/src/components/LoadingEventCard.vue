<template>
  <SectionedCard>
    <template #header>
      <div class="w-full h-6 bg-gray-400 rounded animate-pulse"></div>
    </template>
    <template #default>
      <div class="w-full h-4 bg-gray-400 rounded animate-pulse"></div>
    </template>
    <template #footer>
      <div class="w-full h-16 bg-gray-400 rounded animate-pulse"></div>
    </template>
  </SectionedCard>
</template>

<script setup>
import SectionedCard from '@/components/SectionedCard.vue';
</script>
