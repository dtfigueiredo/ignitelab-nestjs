import { Category } from '../../src/app/entities/notification/category'
import { Content } from '../../src/app/entities/notification/content';
import { Notification, NotificationProps } from '../../src/app/entities/notification/notification';
import { RecipientId } from '../../src/app/entities/notification/recipientId';
import { randomUUID } from 'crypto';

//NO TS, PARTIAL TRANSFORMA AS PROPRIEDADES DE UM TIPO/INTERFACE EM OPCIONAIS|UNDEF
//SETAMOS UM OVERRIDER PARA PODER SUBSTITUIR QUALQUER OU NENHUMA INFORMAÇÃO DO OBJETO PADRÃO DE RETORNO
type Overrider = Partial<NotificationProps>

export const makeNotification = (override: Overrider = {}) => {
  return new Notification({
    category: new Category('Category'),
    recipientId: new RecipientId(randomUUID()),
    content: new Content('Novo conteúdo de testes'),
    ...override
  })
}