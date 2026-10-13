import { Request,Response,NextFunction } from "express";
import { VoiceAiGenerateUseCase } from "../../../../../application/usecase/voice/create-voice.usecase";
import { AppError } from "../../../../../application/errors/app-error";




export class VoiceController{

    constructor(
        private voiceAiGenerateUseCase : VoiceAiGenerateUseCase
    ){}


    async createVoice(req:Request,res:Response,next:NextFunction){

        try{

            const user = (req as any).user;

            const user_id = user.id;

            const documentId = Number(req.params.documentId);

            const {page_number} = req.body;

            const result = await this.voiceAiGenerateUseCase.execute(user_id,documentId,page_number);

            res.status(200).json({
                result
            });

        }catch(error){
            next(error);
        }

    }

}