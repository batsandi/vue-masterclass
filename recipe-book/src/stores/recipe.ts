import { defineStore } from "pinia";
import { ref } from "vue";

interface Recipe {
  id: number;
  name: string;
  description: string;
}

export const useRecipeStore = defineStore('recipe', () => {
    const recipes = ref<Recipe[]>([]);

    return { recipes };
})