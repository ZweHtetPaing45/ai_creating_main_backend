import { processOCR } from "../../../services/ocr.service";
import { AppError } from "../../errors/app-error";
import { DocumentPageRepository } from "../../interface/repositories/document-page/i-document-page-repository";



export class ProcessDocumentOCRUseCase{

    constructor(
        private readonly documentPageReposity : DocumentPageRepository
    ){}

    async execute(user_id: number,documentId: number){

        const pages = await this.documentPageReposity.getPageByDocumentId(user_id,documentId);

        if(pages.length === 0){
            throw new AppError("Document Pages not found",404);
        }

        const ocrPages = pages.map((page)=>({
            pageId: Number(page.pageId),
            pageNumber: Number(page.pageNumber),
            imageUrl: page.imageUrl,

        }));

        const ocrResult = await processOCR({pages: ocrPages});

        for(const result of ocrResult.results){

            await this.documentPageReposity.updateContent(user_id,result.pageId,JSON.stringify(result.lines));

        }

    }

}