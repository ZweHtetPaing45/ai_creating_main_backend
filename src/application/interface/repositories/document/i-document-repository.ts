import { CreateDocumentData } from "../../../dto/document/create-document-data.dto";
import { Document } from "../../../../domain/entities/document/document.entity";


export interface DocumentRepository{

    create(data : CreateDocumentData): Promise<Document>;
    
}