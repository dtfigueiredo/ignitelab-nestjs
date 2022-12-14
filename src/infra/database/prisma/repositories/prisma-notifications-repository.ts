import { Notification } from '@app/entities/notification/notification';
import { RecipientId } from '@app/entities/notification/recipientId';
import { NotificationsRepository } from '@app/repositories/notifications-repository';
import { Injectable } from '@nestjs/common';

import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) { }

  //get function
  async findList(): Promise<any> { //ANYANYANY
    const notificationsList = await this.prismaService.notification.findMany();
    return notificationsList;
  }

  //post function
  async create(notification: Notification): Promise<void> {
    //implementando o mapper para conversão dos dados no formato exigido pelo DB
    const rawNotification = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.create({
      data: rawNotification,
    });
  }

  //findOne
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = await this.prismaService.notification.findUnique({
      where: {
        id: notificationId
      }
    })

    if (!notification) {
      return null
    }

    return null //VERIFICAR
  }

  //countByRecipientId
  async countManyByRecipientId(recipientId: RecipientId): Promise<number> {
    const notificationsCount = await this.prismaService.notification.findMany({ where: { recipientId: recipientId.value } })
    return notificationsCount.length
  }

  //update
  async update(notification: Notification): Promise<void> {
    const rawNotification = PrismaNotificationMapper.toPrisma(notification)

    await this.prismaService.notification.update({
      where: {
        id: notification.id,
      },
      data: rawNotification
    })
  }
}
