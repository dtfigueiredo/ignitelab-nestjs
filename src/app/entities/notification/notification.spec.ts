import { randomUUID } from 'node:crypto';

import { Category } from './category';
import { Content } from './content';
import { Notification } from './notification';
import { RecipientId } from './recipientId';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      category: new Category('Testes Unitários'),
      content: new Content('Nova solicitação de teste.'),
      recipientId: new RecipientId(randomUUID()),
    });

    expect(notification).toBeTruthy();
  });
});
