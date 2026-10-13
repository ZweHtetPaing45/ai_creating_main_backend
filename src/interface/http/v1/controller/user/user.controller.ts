import { Request,Response,NextFunction } from 'express';
import { RegisterUserUseCase } from '../../../../../application/usecase/user/register.user.usecase';
import { LoginUserUseCase } from '../../../../../application/usecase/user/login.user.usecase';
import { AppError } from '../../../../../application/errors/app-error';
import { RegisterUserRequestDTO } from '../../../../../application/dto/user/register.user,request.dto';
import { LoginUserRequestDTO } from '../../../../../application/dto/user/login.user.request.dto';



export class UserController{

    constructor(
        private registerUserUseCase : RegisterUserUseCase,
        private loginUserUseCase : LoginUserUseCase
    ){}


    async register(req:Request,res:Response,next:NextFunction){

        try{

            const {name,email,password} = req.body;

            if(!name || !email || !password)throw new AppError('Enter register form data',500);

            const data : RegisterUserRequestDTO = {
                name,
                email,
                password
            }

            const result = await this.registerUserUseCase.execute(data);

            res.status(201).json({
                message : "Register Successfully",
                result
            })

        }catch(error){
            next(error);
        }

    }

    
    async login(req: Request,res:Response,next:NextFunction){

        try{

            const {email,password} = req.body;

            if(!email || !password)throw new AppError('Enter Login Data',400);

            const data : LoginUserRequestDTO = {
                email,
                password
            }

            const token = await this.loginUserUseCase.execute(data);

            res.status(201).json({
                message: "Login successfully",
                token
            });

        }catch(error){
            next(error);
        }

    }
}