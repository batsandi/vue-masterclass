<template>
  <div>
    <h1>Add Recipe</h1>
    <form @submit.prevent="handleAdd">
      <input type="text" placeholder="Recipe Name" v-model="recipeName" />
      <input type="textarea" placeholder="Recipe Description" v-model="recipeDescription" />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const router = useRouter();
const recipeStore = useRecipeStore();

const recipeName = ref<string>('');
const recipeDescription = ref<string>('');

const handleAdd = () => {
  const newRecipe = recipeStore.addRecipe({
    name: recipeName.value,
    description: recipeDescription.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: newRecipe.id,
    },
  });
};
</script>
