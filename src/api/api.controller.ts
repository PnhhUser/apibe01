import { Body, Controller, Get, Post } from '@nestjs/common';
import { log } from 'console';
import { AuthService } from 'src/auth/auth.service';
import { LoginDTO } from 'src/dto/login.dto';
import { SignupDTO } from 'src/dto/signup.dto';
import { UserService } from 'src/user/user.service';

@Controller('api')
export class ApiController {
    constructor(
        private userService: UserService,
        private authService: AuthService
    ) { }

    @Post('signup')
    signup(
        @Body() signup: SignupDTO
    ) {
        return this.userService.create(signup);
    }

    @Post('login')
    login(
        @Body()
        loginDTO: LoginDTO,
    ) {
        return this.authService.login(loginDTO);
    }


}
