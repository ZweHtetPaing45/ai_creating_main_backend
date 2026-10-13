import { MySQLDocumentPageRepository } from "../../infrastructure/repositories/mysql/document-page/document-page.repository";
import { VoiceAiGenerateUseCase } from "../../application/usecase/voice/create-voice.usecase";
import { VoiceController } from "../../interface/http/v1/controller/voice/voice.controller";


const documentPageRepo = new MySQLDocumentPageRepository();


const voiceAiGenerateUC = new VoiceAiGenerateUseCase(documentPageRepo);


export const voiceContainer = new VoiceController(voiceAiGenerateUC);