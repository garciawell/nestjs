import { MessagesRepository } from './messages.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  async findAll() {
    return this.messagesRepo.findAll();
  }

  async create(content: string) {
    return this.messagesRepo.create(content);
  }
}
