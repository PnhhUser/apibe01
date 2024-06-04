import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { UserDTO } from 'src/dto/user.dto';
import * as bcrypt from 'bcryptjs';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>
    ) { }
    async createUser(userDTO: UserDTO): Promise<UserEntity> {
        const salt = await bcrypt.genSalt();

        userDTO.password = await bcrypt.hash(userDTO.password, salt);

        userDTO.createDate = new Date();
        userDTO.updateDate = new Date();

        const user = await this.userRepository.save(userDTO);

        delete user.password;

        return user;
    }
}
