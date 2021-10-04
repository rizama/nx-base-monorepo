import { Module } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TodoService],
})
export class AppModule {}
