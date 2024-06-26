import {
    IsDate,
    IsEmail,
    IsNotEmpty,
    MaxLength,
    MinLength,
} from "class-validator";

export class SignupDTO {

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

    updateDate: Date;

    createDate: Date;

}
