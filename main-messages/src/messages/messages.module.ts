import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesRepository } from './messages.repository';
import { MessagesService } from './messages.services';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
