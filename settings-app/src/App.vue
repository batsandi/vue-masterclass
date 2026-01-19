<template>
  <main class="max-w-2xl mx-auto p-4">
    <nav class="font-medium text-center p-2 text-gray-200 border-b border-gray-800">
      <ul class="flex gap-4">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink 
            :currentTab="currentTab" 
            :tab="tab" 
            @click="currentTab = tab.key"
          />
        </li>

      </ul>

    </nav>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
import type { Tab, TabKey } from "@/types"
import TabLink from "@/components/TabLink.vue"

const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General'
  },
  {
    key: 'Notifications',
    label: 'Notifications'
  },
  {
    key: 'Privacy',
    label: 'Privacy'
  }
]

const currentTab = ref<TabKey>('General')

</script>
