import { randomUUID } from 'node:crypto';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    // instanciando inMemoryRepository
    const inMemoryRepository = new InMemoryNotificationsRepository();
    // UTILIZANDO O CONCEITO DE INVERSÃO DE DEPENDÊNCIAS PARA DIZER AO CASO DE USO QUAL É A DEPENDÊNCIA QUE ELE PRECISA. NO CASO O REPOSITÓRIO QUE FARÁ A COMUNICAÇAÕ COM O BANCO DE DADOS
    const sendNotification = new SendNotification(inMemoryRepository);

    const notificationRequest = {
      recipientId: randomUUID(),
      content: 'testing the notification use-case',
      category: 'use-case test',
    };

    const { notification } = await sendNotification.execute(
      notificationRequest,
    );

    expect(inMemoryRepository.notifications).toHaveLength(1);
    expect(inMemoryRepository.notifications[0]).toEqual(notification);
  });
});
