import { processOCR } from "../../../services/ocr.service";
import { ProcessOCRRequestDTO } from "../../dto/ocr/process.-ocr.dto";
import { DocumentPageRepository } from "../../interface/repositories/document-page/i-document-page-repository";


export class OneOrMoreOcrUseCase{

    constructor(
        private documentPageRepository : DocumentPageRepository
    ){}

    async execute(user_id: number,pages : ProcessOCRRequestDTO[]){

        const ocrPages = pages.map((page)=>({
            pageId: Number((page as any).pageId),
            pageNumber: Number((page as any).pageNumber),
            imageUrl: (page as any).imageUrl,

        }));

        const ocrResult = await processOCR({pages: ocrPages});

        
        for(const result of ocrResult.results){

            await this.documentPageRepository.updateContent(user_id,result.pageId,JSON.stringify(result.lines));

        }

    }

}