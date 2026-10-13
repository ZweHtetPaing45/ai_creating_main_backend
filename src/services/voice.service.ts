import axios from "axios";
import { AppError } from "../application/errors/app-error";
import { createLogger } from "../infrastructure/logger/create-logger";
import { env } from "../config/env";
import { GenerateVoiceRequestDTO } from "../application/dto/voice/generate-voice.dto";
import { GenerateVoiceResponseDTO } from "../application/dto/voice/generate-voice-result.dto";


const logger = createLogger();

const base_url = env.VOICE_SERVICE_URL;


export const generateVoice = async(data: GenerateVoiceRequestDTO): Promise<GenerateVoiceResponseDTO>=>{

    try{

        const res = await axios.post<GenerateVoiceResponseDTO>(`${base_url}/api/v1/voice/generate`,data,{
            headers: {"Content-Type": "application/json"},
            timeout: 10 * 60 * 1000,
        });

        return res.data;

    }catch(error){
         logger.error("Voice Generating Error",error);
        
            throw new AppError("Voice generate Failed",500);
            }
    }
