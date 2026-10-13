import { PdfUploadResult } from "../../../dto/pdf-image/pdf-service.dto";


export interface PdfService{

    uploadPdf(file: Express.Multer.File): Promise<PdfUploadResult>;

}