//CLASSES COM OS CONTRATOS DO DATABSE

import { Notification } from '../entities/notification/notification';

export abstract class NotificationsRepository {
  abstract create(notification: Notification): Promise<void>;

  abstract findList(): Promise<Notification[]>;
}
