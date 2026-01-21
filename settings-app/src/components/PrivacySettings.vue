<template>
    <form class="space-y-4 mx-auto">
            <select v-model="privacy.visibility">
                <option>private</option>
                <option>public</option>
            </select>
            <label>
                <input type="checkbox" v-model="privacy.searchEngineIndexing">
                <span>Search Engine Indexing</span>
            </label>

        <button type="submit" class="btn-primary">Submit</button>
    </form>
</template>

<script setup lang="ts">
import { useSettings } from "@/composables/useSettings"

const { privacy } = useSettings()

</script>