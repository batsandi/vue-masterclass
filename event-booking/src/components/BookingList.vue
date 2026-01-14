<template>
    <section class="grid grid-cols-1 gap-8">
      <template v-if="error">
        <ErrorCard :retry="fetchBookings">
          <div class="text-red-600">The application encountered an error loading bookings.</div>
        </ErrorCard>
      </template>
      <template v-else>
        <template v-if="loading === false">
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
      </template>
    </section>
</template>

<script setup>
import BookingCard from '@/components/BookingCard.vue';
import LoadingBookingCard from '@/components/LoadingBookingCard.vue'
import useBookings from '@/composables/useBookings.js'
import ErrorCard from '@/components/ErrorCard.vue';
import { onMounted } from 'vue'

const {
  error,
  bookings,
  loading,
  fetchBookings,
  handleCancellation
} = useBookings();

onMounted(() => {
  fetchBookings()
})

</script>
