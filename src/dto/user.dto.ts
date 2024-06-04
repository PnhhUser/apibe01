import { Role } from "src/common/enums";
import { baseDTO } from "./base.dto";


export class UserDTO extends baseDTO {

    name: string;

    email: string;

    password: string;

    phone: string;

    role: string;
}