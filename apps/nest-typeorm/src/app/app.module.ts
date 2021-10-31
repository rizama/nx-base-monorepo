import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import config from '../../../../ormconfig';
import { UsersModule } from '../users/users.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: './db_nest_typeorm',
            synchronize: true,
            logging: 'all',
            autoLoadEntities: true,
        }),
        UsersModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
