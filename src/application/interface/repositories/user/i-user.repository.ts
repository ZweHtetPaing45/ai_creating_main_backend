import { RegisterUserRequestDTO } from "../../../dto/user/register.user,request.dto";
import { User } from "../../../../domain/entities/user/user.entity";


export interface UserRepository{

    create(data : RegisterUserRequestDTO): Promise<User>;
    findById(id : number): Promise<User | null>;
    findByEmail(email : string): Promise<User | null>;

}