<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li>
          <RouterLink :to="{name: 'favorites'}">Favorites</RouterLink>
        </li>
        <li>
          <RouterLink to="/add-recipe">Add Recipe</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>