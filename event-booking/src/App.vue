<template>
  <main class="container mx-auto my-2 md:my-8 space-y-8 space-x-4 px-12 md:px-24  py-2 md:py-8">
    <h1 class="text-4xl text-blue-100">Event Bookings</h1>
    <h2 class="text-2xl text-blue-100">All Events</h2>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <EventCard v-for="i in 9" :key="i"
      title="Gokceada Freestyle Cup" date="2026-07-15" description="watch Moni win!" @register="title => console.log('Registered!')"/>
    </section>
    <h2 class="text-2xl text-blue-100 font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-8">
      <BookingCard v-for="i in 3" :key="i" />
    </section>
  </main>
</template>

<script setup>
import EventCard from '@/components/EventCard.vue'
import BookingCard from '@/components/BookingCard.vue'

</script>

<style scoped></style>
