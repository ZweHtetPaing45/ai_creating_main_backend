import { Request,Response,NextFunction } from "express";
import { ProcessDocumentOCRUseCase } from "../../../../../application/usecase/ocr/create-ocr.usecase";
import { OneOrMoreOcrUseCase } from "../../../../../application/usecase/ocr/one-or-more.ocr.usecase";


export class OCRController{

    constructor(
        private readonly processDocumentOCRUseCase: ProcessDocumentOCRUseCase,
        private readonly oneOrMoreOcrUseCase : OneOrMoreOcrUseCase
    ){}


    async process(req:Request,res:Response,next:NextFunction){

        try{

            const user = (req as any).user;

            console.log('user',user);

            const user_id = user.id;

            const documentId = Number(req.params.documentId);

            console.log(user_id,documentId);

            const result = await this.processDocumentOCRUseCase.execute(user_id,documentId);

            return res.status(200).json({
                success: true,
                data : result
            });

        }catch(error){
            next(error);
        }

    }

    async oneOrMoreProcess(req: Request,res:Response,next:NextFunction){

        try{

            const user = (req as any).user;

            const user_id = user.id;

            const {pages}  = req.body;

            const result = await this.oneOrMoreOcrUseCase.execute(user_id,pages);

            return res.status(200).json({
                success: true,
                data : result
            });

        }catch(error){
            next(error);
        }

    }

}