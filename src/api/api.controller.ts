import { Body, Controller, Get, Post } from '@nestjs/common';
import { log } from 'console';
import { SignupDTO } from 'src/dto/signup.dto';
import { UserService } from 'src/user/user.service';

@Controller('api')
export class ApiController {
    constructor(private userService: UserService) { }

    @Post('signup')
    signup(@Body() signup: SignupDTO) {

        return this.userService.createUser(signup);
    }
}
