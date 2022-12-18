import { Notification } from "@app/entities/notification/notification";

export class NotificationViewMapper {
  static toHttp(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category.value,
      recipientId: notification.recipientId.value
    }
  }
}