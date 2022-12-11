import { MessagesRepository } from './messages.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {}

  getAll() {
    return this.messagesRepo.findAll();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  removeOne(id: string) {
    return this.messagesRepo.removeOne(id);
  }

  create(message: string) {
    return this.messagesRepo.create(message);
  }
}
