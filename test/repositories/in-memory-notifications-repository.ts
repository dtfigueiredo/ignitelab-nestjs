import { Notification } from '@app/entities/notification/notification';
import { RecipientId } from '@app/entities/notification/recipientId';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {


  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async findList() {
    return this.notifications;
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(item => item.id === notificationId)

    if (!notification) {
      return null
    }

    return notification
  }

  async update(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(item => item.id === notification.id)

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification
    }
  }

  async countManyByRecipientId(recipientId: RecipientId): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length
  }
}
