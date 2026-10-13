import { RegisterUserRequestDTO } from "../../dto/user/register.user,request.dto";
import { User } from "../../../domain/entities/user/user.entity";
import { UserRepository } from "../../interface/repositories/user/i-user.repository";
import { AppError } from "../../errors/app-error";
import { HashPassword } from "../../../infrastructure/util/hash-password.util";



export class RegisterUserUseCase{

    constructor(
        private userRepository : UserRepository
    ){}


    async execute(data : RegisterUserRequestDTO): Promise<User>{

        const exit = await this.userRepository.findByEmail(data.email);

        if(exit)throw new AppError("User already exit",500);

        const hash_password = await HashPassword.hash(data.password);

        data.password = hash_password;

        const result = await this.userRepository.create(data);

        return result;

    }

}