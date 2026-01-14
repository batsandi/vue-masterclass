import { ref } from 'vue'

const bookings = ref([])
const loading = ref(false)
const error = ref(null)

const fetchBookings = async () => {
  try {
    error.value = null
    loading.value = true
    const response = await fetch('http://localhost:3001/bookings')
    bookings.value = await response.json()
  } catch (e) {
    error.value = e
  } finally {
    loading.value = false
  }
}

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

export default function useBookings() {
  return {
    error,
    bookings,
    loading,
    fetchBookings,
    handleRegistration,
    handleCancellation
  }
}
