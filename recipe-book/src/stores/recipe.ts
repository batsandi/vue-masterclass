import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

interface Recipe {
  id: number;
  name: string;
  description: string;
}

type RecipeInput = Omit<Recipe, 'id'>;

export const useRecipeStore = defineStore('recipe', () => {
  
  const recipes = ref<Recipe[]>([]);

  const addRecipe = (recipe: RecipeInput) => {
    const newRecipe: Recipe = {
      id: Date.now(),
      ...recipe,
    };
    recipes.value.push(newRecipe);

    return newRecipe;
  };

  const updateRecipe = (recipeToUpdate: Recipe) => {
    const index = recipes.value.findIndex((recipe) => recipe.id === recipeToUpdate.id);
    if (index !== -1) {
      recipes.value[index] = recipeToUpdate;
    }
  }

  const getRecipeById = (id: number) => {
    return recipes.value.find((recipe) => recipe.id === id);
  };

  const searchQuery = ref('');
  const filteredRecipes = computed(() => {
    if (!searchQuery.value) {
      return recipes.value;
    }
    return recipes.value.filter((recipe) =>
      recipe.name.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  return { recipes, addRecipe, updateRecipe, getRecipeById, searchQuery, filteredRecipes };
});
