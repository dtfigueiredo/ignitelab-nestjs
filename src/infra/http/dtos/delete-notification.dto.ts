// DTOS => DATA TRANSFER OBJECTS
// ARQUIVOS COM AS PROPRIEDADES DE CADA OBJETO DE INFORMAÇÕES E SUAS VALIDAÇÕES
import { IsNotEmpty, IsUUID } from 'class-validator';

export class DeleteNotificationBody {
  //
  @IsNotEmpty()
  @IsUUID()
  id!: string;
}
