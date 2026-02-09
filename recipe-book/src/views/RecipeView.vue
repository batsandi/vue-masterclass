<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <h2>{{ recipe?.name }}</h2>
    <h2>{{ recipe?.description }}</h2>
    <RouterLink :to="{ name: 'edit-recipe', params: { id: $route.params.id } }">Edit</RouterLink>
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
import { useRecipeStore } from '@/stores/recipe';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const recipeStore = useRecipeStore();

const recipe = computed(() => {
  const id = Number(route.params.id);
  return recipeStore.getRecipeById(id);
});

watch(
  () => route.params.id,
  () => console.log(`visiting: ${route.params.id}`),
);
</script>
