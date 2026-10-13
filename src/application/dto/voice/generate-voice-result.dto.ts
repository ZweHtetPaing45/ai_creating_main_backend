

export interface GeneratedVoicePageDTO{

    fileName: string;
    audioUrl: string;

}

export interface GenerateVoiceResponseDTO{

    success: boolean;
    message: string;
    data: {
        folderName: string;
        total: number;
        pages: GeneratedVoicePageDTO[];
    }

}