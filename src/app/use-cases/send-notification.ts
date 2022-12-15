//CLASSE PARA O CASO DE USO EM QUE ENVIAREMOS UMA NOTIFICAÇÃO
import { Injectable } from '@nestjs/common';

import { Category } from '../entities/notification/category';
import { Content } from '../entities/notification/content';
import { Notification } from '../entities/notification/notification';
import { RecipientId } from '../entities/notification/recipientId';
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    //MONTANDO A NOTIFICAÇÃO A PARTIR DE NOVAS INSTÂNCIAS DOS 'VALUE OBJECTS'
    const notification = new Notification({
      recipientId: new RecipientId(recipientId),
      content: new Content(content),
      category: new Category(category),
    });

    //MONTANDO O CONTRATO PARA SALVAR A NOTIFICAÇÃO NO BANCO DE DADOS
    await this.notificationsRepository.create(notification);

    return { notification };
  }
}
