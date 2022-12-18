//CLASSES COM OS CONTRATOS DO DATABSE
import { RecipientId } from '@app/entities/notification/recipientId';

import { Notification } from '../entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;

  abstract findList(): Promise<Notification[]>;

  abstract findById(notificationId: string): Promise<Notification | null>;

  abstract update(notification: Notification): Promise<void>;

  abstract countManyByRecipientId(recipientId: RecipientId): Promise<number>;
}
