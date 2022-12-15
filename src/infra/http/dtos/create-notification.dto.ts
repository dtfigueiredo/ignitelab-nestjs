// DTOS => DATA TRANSFER OBJECTS
// ARQUIVOS COM AS PROPRIEDADES DE CADA OBJETO DE INFORMAÇÕES E SUAS VALIDAÇÕES
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  //
  @IsNotEmpty()
  @Length(5, 240)
  content!: string;

  //
  @IsNotEmpty()
  @Length(5, 20)
  category!: string;

  //
  @IsNotEmpty()
  @IsUUID()
  recipientId!: string;
}
