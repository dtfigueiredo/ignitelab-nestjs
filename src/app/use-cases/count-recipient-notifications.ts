//CLASSE PARA O CASO DE USO EM QUE CANCELAREMOS UMA NOTIFICAÇÃO
import { RecipientId } from '@app/entities/notification/recipientId';
import { Injectable } from '@nestjs/common';

import { NotificationsRepository } from '../repositories/notifications-repository';

interface CountRecipientNotificationsRequest {
  recipientId: RecipientId;
}

interface CountRecipientNotificationsResponse {
  count: number
}

@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: CountRecipientNotificationsRequest,
  ): Promise<CountRecipientNotificationsResponse> {
    const { recipientId } = request;

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

    return { count }
  }
}
