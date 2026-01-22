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
    
    setTimeout(() => {
        removeNotification(id)
    }, 3000)
}

function removeNotification(id: number) {
    notifications.value = notifications.value.filter(
        n => n.id !== id
    )
}

export function useNotifications() {
    return {
        notifications,
        addNotification,
        removeNotification
    }
}