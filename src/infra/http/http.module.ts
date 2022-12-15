import { Module } from '@nestjs/common';
import { FindNotifications } from 'src/app/use-cases/find-notifications';
import { SendNotification } from 'src/app/use-cases/send-notification';

import { DatabaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationController],
  providers: [SendNotification, FindNotifications],
})
export class HttpModule {}
