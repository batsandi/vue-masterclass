<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'favorites' }">Favorites</RouterLink>
        </li>
        <li>
          <RouterLink to="/add-recipe">Add Recipe</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'recipe', params: randRecipeId }" @click="refreshRandom">
            Random Recipe
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const randRecipeId = ref({ id: Math.floor(Math.random() * 50) + 1 });

const refreshRandom = () => {
  randRecipeId.value = { id: Math.floor(Math.random() * 50) + 1 };
};

</script>
