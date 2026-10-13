import { LoginUserRequestDTO } from "../../dto/user/login.user.request.dto";
import { LoginUserResponseDTO } from "../../dto/user/login.user.response.dto";
import { UserRepository } from "../../interface/repositories/user/i-user.repository";
import { AppError } from "../../errors/app-error";
import { TokenService } from "../../interface/service/i-token-service";
import { HashPassword } from "../../../infrastructure/util/hash-password.util";


export class LoginUserUseCase{

    constructor(
        private userRepository : UserRepository,
        private tokenService : TokenService
    ){}


    async execute(data : LoginUserRequestDTO): Promise<LoginUserResponseDTO>{

        const user : any = await this.userRepository.findByEmail(data.email);

        if(!user)throw new AppError("User Not Found",404);

        const compare_password = await HashPassword.compare(data.password,user.password);


        if(!compare_password)throw new AppError("Incorrect Password",400);

        const token = this.tokenService.generate({id: user.id,email: user.email});

        return {
            user : {
                id: user.id,
                email: user.email
            },
            token : token
        }

    }

}