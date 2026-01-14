<template>
  <main class="container mx-auto my-2 md:my-8 space-y-8 space-x-4 px-12 md:px-24 py-2 md:py-8">
    <h1 class="text-4xl text-gray-300">Event Bookings</h1>
    <h2 class="text-2xl text-gray-300">All Events</h2>
    <EventList />
    <h2 class="text-2xl text-gray-300 font-medium">Your Bookings</h2>
    <BookingList />
  </main>
</template>

<script setup>
import EventList from '@/components/EventList.vue'
import BookingList from '@/components/BookingList.vue'
</script>
