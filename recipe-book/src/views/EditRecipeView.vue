<template>
  <div>
    <h1>Edit Recipe</h1>
    <form @submit.prevent="handleEdit">
      <input type="text" placeholder="Recipe Name" v-model="recipeName" />
      <input type="textarea" placeholder="Recipe Description" v-model="recipeDescription" />
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { onMounted, ref } from 'vue';
import { useRecipeStore } from '@/stores/recipe';

const route = useRoute();
const router = useRouter();
const recipeStore = useRecipeStore();

const recipeName = ref<string>('');
const recipeDescription = ref<string>('');

const fecthRecipe = () => {
  const id = route.params.id;
  const recipe = recipeStore.getRecipeById(Number(id));

  if (recipe) {
    recipeName.value = recipe.name;
    recipeDescription.value = recipe.description;
  } else {
    router.push({ name: 'not-found' });
  }
};

onMounted(() => {
  fecthRecipe();
});

const handleEdit = () => {
  const newRecipe = recipeStore.updateRecipe({
    id: Number(route.params.id),
    name: recipeName.value,
    description: recipeDescription.value,
  });

  router.push({
    name: 'recipe',
    params: {
      id: route.params.id,
    },
  });
};
</script>
