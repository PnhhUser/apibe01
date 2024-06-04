import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { UserService } from 'src/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [ApiController],
  providers: [UserService]
})
export class ApiModule { }
