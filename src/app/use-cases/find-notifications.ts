import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository';

@Injectable()
export class FindNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(): Promise<Notification[]> {
    const notificationsList = await this.notificationsRepository.findList();
    return notificationsList;
  }
}
