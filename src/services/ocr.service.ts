import  axios from 'axios';
import { AppError } from '../application/errors/app-error';
import { createLogger } from '../infrastructure/logger/create-logger';
import { env } from '../config/env';
import { ProcessOCRRequestDTO } from '../application/dto/ocr/process.-ocr.dto';
import { OCRResponseDTO } from '../application/dto/ocr/ocr-result.dto';



const logger = createLogger();

const base_url = env.OCR_SERVICE_URL;

export const processOCR = async (data: ProcessOCRRequestDTO): Promise<OCRResponseDTO> => {

    try {

        const res = await axios.post<OCRResponseDTO>(
            `${base_url}/api/v1/process`,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                },

                // OCR က image များရင် ကြာနိုင်လို
                timeout: 10 * 60 * 1000,
            }
        );

        return res.data;

    } catch (error) {

        logger.error(
            "OCR Processing Error",
            error
        );

        throw new AppError(
            "OCR Processing Failed",
            500
        );
    }
};