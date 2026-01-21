<template>
    <form class="space-y-4 mx-auto">
            <label>
                <input type="checkbox" v-model="notifications.email">
                <span>Email</span>
            </label>
            <label>
                <input type="checkbox" v-model="notifications.sms">
                <span>SMS</span>
            </label>

        <button type="submit" class="btn-primary">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { useSettings } from "@/composables/useSettings"

const { notifications } = useSettings()

</script>