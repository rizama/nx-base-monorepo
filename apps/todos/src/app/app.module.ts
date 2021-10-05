import { Module } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '@nx-base-monorepo/auth';

@Module({
    imports: [AuthModule],
    controllers: [AppController],
    providers: [AppService, TodoService],
})
export class AppModule {}
