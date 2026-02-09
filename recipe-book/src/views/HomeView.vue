
<template>
  <main>
    <h1>Home</h1>
    <input 
      type="text" 
      v-model="recipeStore.searchQuery" 
      placeholder="Search recipes..."
      class="search-input"
    />
    <div v-for="recipe in recipeStore.filteredRecipes" :key="recipe.id">
      <h2>{{ recipe.name }}</h2>
      <p>{{ recipe.description }}</p>
      <hr />
    </div>
    <p v-if="recipeStore.filteredRecipes.length === 0" class="no-results">
      No recipes found
    </p>
  </main>
</template>

<script setup lang="ts">
import { useRecipeStore } from "@/stores/recipe";

const recipeStore = useRecipeStore();
</script>
