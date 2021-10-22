import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        UsersModule,
        MongooseModule.forRoot('mongodb://localhost:27017/nxmongo'),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
