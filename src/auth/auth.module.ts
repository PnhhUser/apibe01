import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { JWTStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { UserService } from 'src/user/user.service';

@Module({
    imports: [
        UserModule,
        PassportModule
    ],
    providers: [AuthService, JwtService],
    exports: [AuthService],
})
export class AuthModule { }
