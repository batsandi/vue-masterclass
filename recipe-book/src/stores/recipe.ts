import { defineStore } from 'pinia';
import { ref } from 'vue';

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
      ...recipe
    };
    recipes.value.push(newRecipe);

    return newRecipe;
  };

  const getRecipeById = (id: number) => {
    return recipes.value.find(recipe => recipe.id === id);
  }

  return { recipes, addRecipe, getRecipeById };
});
