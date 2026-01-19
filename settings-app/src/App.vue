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
    <component :is="currentTabComponent" />
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import type { Tab, TabKey } from "@/types"
import TabLink from "@/components/TabLink.vue"
import GeneralSettings from "@/components/GeneralSettings.vue"
import NotificationsSettings from "@/components/NotificationsSettings.vue"
import PrivacySettings from "@/components/PrivacySettings.vue"


const tabs: Tab[] = [
  {
    key: 'General',
    label: 'General',
    component: GeneralSettings
  },
  {
    key: 'Notifications',
    label: 'Notifications',
    component: NotificationsSettings
  },
  {
    key: 'Privacy',
    label: 'Privacy',
    component: PrivacySettings
  }
]

const currentTab = ref<TabKey>('General')
const currentTabComponent = computed(() => tabs.find((tab) => tab.key === currentTab.value)?.component)

</script>
