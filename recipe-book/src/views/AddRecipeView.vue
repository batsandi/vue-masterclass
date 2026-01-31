<template>
  <div>
    <h1>Add Recipe</h1>
    <form @submit.prevent="handleAdd">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const handleAdd = () => {
  router.push({
    name: 'recipe',
    params: {
      id: 1,
    },
  });
};
</script>
