<template>
  <main class="container mx-auto my-8 space-y-8 space-x-4">
    <h1 class="text-4xl text-blue-100">Event Bookings</h1>
    <section class="grid grid-cols-3 gap-8">
      <EventCard v-for="i in 9" :key="i" 
      title="Gokceada Freestyle Cup" date="2026-07-15" description="watch Moni win!"/>
    </section>
    <h2 class="text-2xl text-blue-100">All Events</h2>
    <h2 class="text-2xl text-blue-100 font-medium">Your Bookings</h2>
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
</script>

<style scoped></style>
