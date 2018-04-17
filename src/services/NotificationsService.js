import { AsyncStorage } from 'react-native'
import { Notifications, Permissions } from 'expo'

import { NOTIFICATION_KEY } from "../config/consts";

class NotificationsService {

  clearLocalNotifications = () => {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
      .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

  createNotification = () => {
    return {
      title: "HEY!",
      body: "Don't forget to study, man.",
      android: {
        sounds: true,
        priority: "high",
        sticky: false,
        vibrate: true
      }
    }
  }

  setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()

                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(14)
                tomorrow.setMinutes(0)

                Notifications.scheduleLocalNotificationAsync(
                  this.createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )

                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }
}

export default new NotificationsService()