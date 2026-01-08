<template>
  <BaseCard>
    <h3 v-if="$slots.header" class="pb-3 font-medium border-b border-red-400">
      <slot name="header"></slot>
    </h3>
    <div v-if="$slots.default" :class="{'border-b': $slots.footer}" class="py-3 text-xs font-mono border-red-400">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="py-3 text-xs">
      <slot name="footer"></slot>
    </div>
  </BaseCard>
</template>

<script setup>
import BaseCard from "@/components/BaseCard.vue"
</script>
