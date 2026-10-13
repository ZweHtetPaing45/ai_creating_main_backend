import { DocumentPageRepository } from "../../interface/repositories/document-page/i-document-page-repository";
import { generateVoice } from "../../../services/voice.service";
import { updateAudioPathDTO } from "../../dto/voice/update-voice-path.dto";


export class VoiceAiGenerateUseCase{

    constructor(
        private documentPageRepository: DocumentPageRepository
    ){}


    async execute(user_id : number,document_id : number,page_number: []){

        const inputData = await this.documentPageRepository.getPagesForVoice(user_id,document_id,page_number);
        
        const voiceAiResult = await generateVoice(inputData);

        // const pageNumbers = voiceAiResult.data.pages.map(page=>{ return Number(page.fileName.match(/\d+/)?.[0])});

        // console.log('pageNumber',pageNumbers);

        for(const page of voiceAiResult.data.pages){

            console.log("pages : ",page);

            const pageNumber = Number(page.fileName.match(/\d+/)?.[0]);

            const data : updateAudioPathDTO = {
                userId : user_id,
                documentId : document_id,
                pageNumber : pageNumber,
                audioPath : page.audioUrl
                
            }

            await this.documentPageRepository.updateAudioPath(data);
        }
        
        return voiceAiResult;

    }

}