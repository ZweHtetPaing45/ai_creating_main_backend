import { DocumentPage } from "../../../domain/entities/document-page/document-page.entity";
import { DocumentPageRepository } from "../../interface/repositories/document-page/i-document-page-repository";



export class GetDocumentPageUseCase{

    constructor(
        private documentPageRepository: DocumentPageRepository
    ){}

    async execute(user_id: number,document_id : number): Promise<DocumentPage>{

        const result : any = await this.documentPageRepository.getPageByDocumentId(user_id,document_id);

        return result;

    }

}