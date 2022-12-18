//VERIFICAR PATH TESTE
import { Category } from '../../app/entities/notification/category';
import { Content } from '../../app/entities/notification/content';
import { Notification } from '../../app/entities/notification/notification';
import { RecipientId } from '../../app/entities/notification/recipientId';
import { randomUUID } from 'node:crypto';

import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { NotificationNotFound } from './errors/notification-not-found';


describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    // instanciando inMemoryRepository
    const inMemoryRepository = new InMemoryNotificationsRepository();
    // UTILIZANDO O CONCEITO DE INVERSÃO DE DEPENDÊNCIAS PARA DIZER AO CASO DE USO QUAL É A DEPENDÊNCIA QUE ELE PRECISA. NO CASO O REPOSITÓRIO QUE FARÁ A COMUNICAÇAÕ COM O BANCO DE DADOS
    const cancelNotification = new CancelNotification(inMemoryRepository);

    const notification = new Notification({
      category: new Category('Category'),
      recipientId: new RecipientId(randomUUID()),
      content: new Content('Novo conteúdo de testes')
    })

    await inMemoryRepository.create(notification)

    await cancelNotification.execute({
      notificationId: notification.id
    });

    expect(inMemoryRepository.notifications).toHaveLength(1);
    expect(inMemoryRepository.notifications[0].canceledAt).toEqual(expect.any(Date))
  });

  it('should not be able to cancel a non existing notification', async () => {
    const inMemoryRepository = new InMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(inMemoryRepository);

    //PARA TESTAR UMA PROMISE QUE DARÁ ERRO, USAR O MÉTODO REJECTS PARA NÃO CAUSAR LOOP
    //DEPOIS DO REJECT PASSAMOS COMO PARAMETRO DO THROW O ERRO QUE ESPERAMOS
    expect(() => {
      return cancelNotification.execute({
        notificationId: 'fake-id-notification'
      })
    }).rejects.toThrow(NotificationNotFound)
  })
});
