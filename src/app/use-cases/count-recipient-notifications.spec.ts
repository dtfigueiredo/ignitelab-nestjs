//VERIFICAR PATH TESTE
import { randomUUID } from 'crypto';

import { makeNotification } from '../../../test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repository';
import { RecipientId } from '../../app/entities/notification/recipientId';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('Count Recipients Notifications', () => {
  it('should count the amount of notifications for a given recipientId', async () => {
    const inMemoryRepository = new InMemoryNotificationsRepository();
    const countRecipientNotifications = new CountRecipientNotifications(inMemoryRepository);

    const recipientToTest = new RecipientId(randomUUID())
    await inMemoryRepository.create(makeNotification({ recipientId: recipientToTest }))

    await inMemoryRepository.create(makeNotification({ recipientId: recipientToTest }))

    await inMemoryRepository.create(makeNotification())

    const { count } = await countRecipientNotifications.execute({ recipientId: recipientToTest });

    expect(count).toEqual(2)
  });
});
