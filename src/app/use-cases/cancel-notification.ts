//CLASSE PARA O CASO DE USO EM QUE CANCELAREMOS UMA NOTIFICAÇÃO
import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface CancelNotificationRequest {
  notificationId: string;
}

type CancelNotificationResponse = void

@Injectable()
export class CancelNotification {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: CancelNotificationRequest,
  ): Promise<CancelNotificationResponse> {
    const { notificationId } = request;

    //BUSCANDO A NOTIFICAÇÃO NO REPOSITÓRIO PARA CANCELAR
    const notification = await this.notificationsRepository.findById(notificationId)

    //INSTANCIANDO ERRO GENÉRICO
    if (!notification) {
      throw new NotificationNotFound()
    }

    notification.cancel()

    await this.notificationsRepository.update(notification)
  }
}
