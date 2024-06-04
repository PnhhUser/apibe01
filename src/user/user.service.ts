import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupDTO } from 'src/dto/signup.dto';
import { LoginDTO } from 'src/dto/login.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    ) { }
    async create(signup: SignupDTO) {
        const salt = await bcrypt.genSalt();

        const user = await this.userRepository.findOneBy({ email: signup.email });

        if (user) {
            throw new UnauthorizedException('email already');
        }


        if (signup.password === signup.rePassword) {
            signup.password = await bcrypt.hash(signup.password, salt);

            signup.createDate = new Date();
            signup.updateDate = new Date();

            await this.userRepository.save(signup);


        } else {
            throw new UnauthorizedException('Your passwords do not match');
        }

        return { ok: "ok" }
    }

    async findOne(data: LoginDTO): Promise<UserEntity> {
        const user = await this.userRepository.findOneBy({ email: data.email });
        if (!user) {
            throw new UnauthorizedException('Could not find user');
        }
        return user;
    }
}
