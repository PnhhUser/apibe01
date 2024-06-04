import {
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength
} from "class-validator";
import { UserDTO } from "./user.dto";

export class SignupDTO extends UserDTO {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail({}, { message: "Invalid email" })
    email: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    password: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    rePassword: string;
}
