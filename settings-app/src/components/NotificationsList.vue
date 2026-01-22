<template>
    <ol class="fixed top-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-105">
        <li
        v-for="notification in notifications"
        :key="notification.id"
        class="mb-4 group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md p-4 pr-6 shadow-lg transition-all border bg-white text-black">
            <div class="text-sm font-semibold">
                {{ notification.message }}
            </div>
            <button
            class="inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
            @click="removeNotification(notification.id)"
            >
                OK
            </button>
        </li>
    </ol>
</template>

<script setup lang="ts">
import { useNotifications } from "@/composables/useNotifications"

const { notifications, removeNotification } = useNotifications()

</script>