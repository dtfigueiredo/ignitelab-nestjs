import { Notification } from "@app/entities/notification/notification";

export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category.value,
      recipientId: notification.recipientId.value,
      readAt: notification.readAt,
      canceledAt: notification.canceledAt,
      createdAt: notification.createdAt,
    }
  }
}