import { FindNotifications } from '@app/use-cases/find-notifications';
import { SendNotification } from '@app/use-cases/send-notification';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../dtos/create-notification.dto';
import { NotificationViewMapper } from '../views/notification-view-mapper';

@Controller('notifications')
export class NotificationController {
  //injetando o caso de uso para a ligação ao banco de dados
  constructor(
    private sendNotification: SendNotification,
    private findNotifications: FindNotifications,
  ) { }

  @Get()
  async findAll() {
    const notificationsList = await this.findNotifications.execute();

    return {
      message: `List of notifications.`,
      data: notificationsList,
    };
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId,
    });

    //implementando o mapper para conversão dos dados no formato de exportação para consumo
    const rawNotification = NotificationViewMapper.toHttp(notification)

    return {
      message: `Notification created successfully.`,
      notification: rawNotification,
    };
  }
}