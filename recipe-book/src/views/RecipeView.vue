<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <nav>
      <ul>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 1 } }"> Recipe 1 </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: { id: 2 } }"> Recipe 2 </RouterLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.params.id,
  () => console.log(`visiting: ${route.params.id}`),
);
</script>
