import { Student } from '../types'

export function isNotificationSupported(): boolean {
  return typeof window !== 'undefined' && 'Notification' in window
}

export function getNotificationPermission(): NotificationPermission {
  if (!isNotificationSupported()) return 'denied'
  try {
    return Notification.permission
  } catch {
    return 'denied'
  }
}

export async function requestNotificationPermission(): Promise<NotificationPermission> {
  if (!isNotificationSupported()) return 'denied'
  try {
    const permission = await Notification.requestPermission()
    return permission
  } catch {
    return 'denied'
  }
}

export async function sendLearningReminderNotification(options: {
  title?: string
  body?: string
  studentName?: string
  streakDays?: number
} = {}): Promise<boolean> {
  if (!isNotificationSupported()) return false
  if (getNotificationPermission() !== 'granted') return false

  const name = options.studentName || 'Student'
  const streak = options.streakDays && options.streakDays > 0 ? options.streakDays : 1
  const title = options.title || `🎓 Daily Learning Time, ${name}!`
  const body =
    options.body ||
    `Keep your ${streak}-day streak going in Home-School-Lite! Today's mastery lessons are ready for you.`

  try {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration()
      if (reg && typeof reg.showNotification === 'function') {
        await reg.showNotification(title, {
          body,
          icon: '/Home-School-Lite/icons/icon-192.png',
          badge: '/Home-School-Lite/icons/icon-192.png',
          tag: 'hsl-daily-reminder',
          data: { url: '/Home-School-Lite/' },
        })
        return true
      }
    }
    new Notification(title, {
      body,
      icon: '/Home-School-Lite/icons/icon-192.png',
      tag: 'hsl-daily-reminder',
    })
    return true
  } catch {
    return false
  }
}

export async function checkAndTriggerDailyReminder(
  enabled: boolean | undefined,
  targetTime: string | undefined, // e.g. "09:00"
  lastTriggeredDate: string | undefined, // e.g. "2026-11-11"
  student: Student | null,
  onReminderSent: (date: string) => Promise<void> | void
): Promise<boolean> {
  if (!enabled || !targetTime) return false
  if (getNotificationPermission() !== 'granted') return false

  const now = new Date()
  const todayStr = now.toISOString().slice(0, 10)
  if (lastTriggeredDate === todayStr) {
    return false // Already sent today
  }

  // Parse targetTime HH:MM
  const [targetH, targetM] = targetTime.split(':').map(Number)
  const currentH = now.getHours()
  const currentM = now.getMinutes()
  const currentTotalMin = currentH * 60 + currentM
  const targetTotalMin = (targetH || 0) * 60 + (targetM || 0)

  // Only trigger if current time has reached or passed the reminder time
  if (currentTotalMin >= targetTotalMin) {
    const success = await sendLearningReminderNotification({
      studentName: student?.name,
      streakDays: student?.streakDays,
    })
    if (success) {
      await onReminderSent(todayStr)
      return true
    }
  }

  return false
}
