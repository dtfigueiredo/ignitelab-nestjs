import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification/notification';
import { NotificationsRepository } from '@app/repositories/notifications-repository';

import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) { }

  //get function
  async findList(): Promise<any> {
    const notificationsList = await this.prismaService.notification.findMany();
    console.log(notificationsList)
    return notificationsList;
  }

  //post function
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        content: notification.content.value,
        category: notification.category.value,
        recipientId: notification.recipientId.value,
        readAt: notification.readAt,
        createdAt: notification.createdAt,
      },
    });
  }
}
