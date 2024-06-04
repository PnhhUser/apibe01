import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { dataSourceOptions, typeOrmAsyncConfig } from 'db/db';
import { ConfigModule } from '@nestjs/config';
import configuration from './configuration';


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    ApiModule,
    UserModule
  ],
})
export class AppModule { }
