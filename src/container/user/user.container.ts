import { MySQLUserRepository } from "../../infrastructure/repositories/mysql/user/user.repository";
import { UserController } from "../../interface/http/v1/controller/user/user.controller";
import { RegisterUserUseCase } from "../../application/usecase/user/register.user.usecase";
import { LoginUserUseCase } from "../../application/usecase/user/login.user.usecase";
import { JwtTokenService } from "../../infrastructure/security/jwt-token-service";
import { AuthMiddleware } from "../../interface/http/v1/middlewares/auth.middleware";


const userRepo = new MySQLUserRepository();

const registerUserUC = new RegisterUserUseCase(userRepo);

const jwtTokenService = new JwtTokenService();

const loginUserUC = new LoginUserUseCase(userRepo,jwtTokenService);


export const userContainer = new UserController(registerUserUC,loginUserUC);
export const authMiddleware = new AuthMiddleware(jwtTokenService,userRepo);