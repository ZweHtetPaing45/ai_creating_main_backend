import { MySQLDocumentPageRepository } from "../../infrastructure/repositories/mysql/document-page/document-page.repository";
import { ProcessDocumentOCRUseCase } from "../../application/usecase/ocr/create-ocr.usecase";
import { OCRController } from "../../interface/http/v1/controller/ocr/ocr.controller";
import { OneOrMoreOcrUseCase } from "../../application/usecase/ocr/one-or-more.ocr.usecase";


const documentPageRepository = new MySQLDocumentPageRepository();

const processDocumentOCRUseCase = new ProcessDocumentOCRUseCase(documentPageRepository);
const oneOrMoreOcrUseCase = new OneOrMoreOcrUseCase(documentPageRepository);


export const ocrContainer = new OCRController(processDocumentOCRUseCase,oneOrMoreOcrUseCase);