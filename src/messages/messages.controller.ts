import { CreateMessageDto } from './../dtos/messages/create-message.dto';
import { MessagesService } from './messages.service';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  getAll() {
    return this.messagesService.getAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }

  @Delete('/:id')
  removeOne(@Param('id') id: string) {
    return this.messagesService.removeOne(id);
  }

  @Post()
  create(@Body() data: CreateMessageDto) {
    return this.messagesService.create(data.content);
  }
}
