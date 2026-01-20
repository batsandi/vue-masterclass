<template>
  <button @click="$emit('click')" :class="{'border-b-2 border-blue-600 ': true, 'text-blue-400': isActive, 'border-transparent': !isActive}">
    {{ tab.label }}
  </button>
</template>

<script setup lang="ts">
import type { Tab } from "@/types"
import { computed } from "vue"

const props = defineProps<{
  currentTab: string
  tab: Tab
}>()

defineEmits<{
  click: []
}>()

const isActive = computed(() => props.currentTab === props.tab.key)


</script>
