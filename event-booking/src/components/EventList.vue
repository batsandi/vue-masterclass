<template>
  <div>
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <template v-if="error">
        <ErrorCard :retry="fetchEvents">
          <div class="text-red-600">The application encountered an error loading events.</div>
        </ErrorCard>
      </template>
      <template v-else>
        <template v-if="loading === false">
          <template v-if="events.length">
            <EventCard
              v-for="event in events"
              :key="event.id"
              :title="event.title"
              :date="event.date"
              :description="event.description"
              @register="handleRegistration(event)"
            />
          </template>
          <template v-else>
            <div class="text-2xl text-gray-400 text-center col-span-3">No events yet...</div>
          </template>
        </template>
        <template v-else>
          <LoadingEventCard v-for="i in 4" :key="i" />
        </template>
      </template>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import EventCard from '@/components/EventCard.vue'
import LoadingEventCard from '@/components/LoadingEventCard.vue'
import useBookings from '@/composables/useBookings'
import ErrorCard from './ErrorCard.vue';

const { handleRegistration } = useBookings();

const events = ref([])
const loading = ref(false)
const error = ref(null)

const fetchEvents = async () => {
  try {
    error.value = null
    loading.value = true
    const response = await fetch('http://localhost:3001/events')
    events.value = await response.json()
    console.log(events.value)
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchEvents()
})
</script>
