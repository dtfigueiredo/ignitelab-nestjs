import { Injectable } from '@nestjs/common';
import { Notification } from '../entities/notification/notification';

import { NotificationsRepository } from '../repositories/notifications-repository';

@Injectable()
export class FindNotifications {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(): Promise<Notification[]> {
    const notificationsList = await this.notificationsRepository.findList();
    return notificationsList;
  }
}
