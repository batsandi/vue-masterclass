<template>
  <main class="container mx-auto my-2 md:my-8 space-y-8 space-x-4 px-12 md:px-24 py-2 md:py-8">
    <h1 class="text-4xl text-gray-300">Event Bookings</h1>
    <h2 class="text-2xl text-gray-300">All Events</h2>
    <EventList @register="handleRegistration($event)"/>
    <h2 class="text-2xl text-gray-300 font-medium">Your Bookings</h2>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="loadingBookings === false">
        <BookingCard
          v-for="booking in bookings"
          :key="booking.id"
          :title="booking.eventTitle"
          :status="booking.status"
          @cancel="handleCancellation(booking)"
        />
      </template>
      <template v-else>
        <LoadingBookingCard v-for="i in 4" :key="i" />
      </template>
    </section>
  </main>
</template>

<script setup>
import EventList from '@/components/EventList.vue'
import BookingCard from '@/components/BookingCard.vue'
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import { ref, onMounted } from 'vue'

const bookings = ref([])
const loadingBookings = ref(false)

const fetchBookings = async () => {
  try {
    loadingBookings.value = true
    const response = await fetch('http://localhost:3001/bookings')
    bookings.value = await response.json()
  } finally {
    loadingBookings.value = false
  }
}

onMounted(() => {
  fetchBookings()
})

const handleRegistration = async (event) => {
  // check if booking already exists
  if (bookings.value.some((b) => b.eventId == event.id)) {
    alert('Already booked for this event!')
    return
  }

  // Prepare new booking and optimistically add to UI
  const newBooking = {
    id: Date.now().toString(),
    user: 1,
    eventId: event.id,
    eventTitle: event.title,
    status: 'pending',
  }
  bookings.value.push(newBooking)

  // Save booking to DB
  const idx = bookings.value.length - 1

  try {
    const response = await fetch('http://localhost:3001/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...newBooking,
        status: 'confirmed',
      }),
    })

    // Update the booking ref with the new booking
    if (response.ok) {
      bookings.value[idx] = await response.json()
    } else {
      throw new Error(`Booking failed bad error msg`)
    }
  } catch (e) {
    // Remove from UI on failure/error
    console.error(`Failed to book for event: ${e}`)
    if (idx !== -1) {
      bookings.value.splice(idx, 1)
    }
  }
}

const handleCancellation = async (booking) => {
  console.log('Cancelling: ')
  console.log(booking)
  const idx = bookings.value.findIndex((b) => b.id === booking.id)
  // Remove booking from UI optimistically
  bookings.value.splice(idx, 1)

  try {
    const response = await fetch(`http://localhost:3001/bookings/${booking.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    // Update the booking ref with the new booking
    if (response.ok) {
      console.log(`Cancelled booking ${booking.id}`)
    } else {
      throw new Error(`Booking Cancel failed bad error msg`)
    }
  } catch (e) {
    // Return to UI on failure/error
    console.error(`Failed to cancel booking: ${e}`)
    if (idx !== -1) {
      bookings.value.push(booking)
    }
  }
}
</script>

<style scoped></style>
