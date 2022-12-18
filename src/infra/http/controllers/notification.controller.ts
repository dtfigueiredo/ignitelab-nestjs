import { FindNotifications } from '@app/use-cases/find-notifications';
import { SendNotification } from '@app/use-cases/send-notification';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../dtos/create-notification.dto';

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

    return {
      message: `Notification created successfully.`,
      data: notification,
    };
  }

  // @Post()
  // create(body: CreateNotificationBody) {
  //   return this.notificationService.create(body);
  // }

  // @Put()
  // update(body: UpdateNotificationBody) {
  //   return this.notificationService.update(body);
  // }

  // @Delete()
  // remove(body: DeleteNotificationBody) {
  //   return this.notificationService.remove(body);
  // }
}
