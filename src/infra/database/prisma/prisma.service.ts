// PRISMA SERVICE SAMPLE FROM NEST DOCUMENTATION
import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  // async findAll() {
  //   return await this.notification.findMany();
  // }

  // async create(body: CreateNotificationBody) {
  //   await this.notification.create({ data: body });
  //   return {
  //     message: `Notification created successfully!`,
  //     data: body,
  //   };
  // }

  // async update(body: UpdateNotificationBody) {
  //   const notification = await this.notification.findUnique({
  //     where: { id: body.id },
  //   });

  //   if (!notification) return;

  //   await this.notification.update({
  //     where: { id: notification.id },
  //     data: {
  //       readAt: null,
  //     },
  //   });

  //   return {
  //     message: `Notification updated successfully!`,
  //     new_data: notification,
  //   };
  // }

  // async remove(body: DeleteNotificationBody) {
  //   await this.notification.delete({ where: { id: body.id } });
  //   return {
  //     message: `Notification deleted successfully!`,
  //   };
  // }
}
