import { ref } from 'vue'

// interfaces
interface Notification {
    id: number
    message: string
}

// notifications ref
const notifications = ref<Notification[]>([])

// helper methods
function addNotification(message: string) {
    const id = Date.now()
    notifications.value.push({
        message,
        id
    })
}

function removeNNotification(id: number) {
    notifications.value = notifications.value.filter(
        n => n.id !== id
    )
}

function useNotifications() {
    return {
        notifications
    }
}