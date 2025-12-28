<template>
  <main class="container mx-auto my-2 md:my-8 space-y-8 space-x-4 px-12 md:px-24  py-2 md:py-8">
    <h1 class="text-4xl text-blue-100">Event Bookings</h1>
    <h2 class="text-2xl text-blue-100">All Events</h2>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8" v-if="loadingEvents === false">
      <EventCard v-for="event in events"
      :key="event.id"
      :title="event.title"
      :date="event.date"
      :description="event.description"
      @register="title => console.log('Registered!')"
      />
    </section>
    <section v-else class="text-4xl text-lime-400 flex justify-center border border-amber-300 p-3">
      Loading events...
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
import { ref, onMounted } from 'vue'

const events = ref([])
const loadingEvents = ref(false)

const fetchEvents = async () => {
  try{
    loadingEvents.value = true;
      const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
    console.log(events.value)
  }
  finally {
    loadingEvents.value = false;
  }
}

onMounted(() => {fetchEvents()})

</script>

<style scoped></style>
