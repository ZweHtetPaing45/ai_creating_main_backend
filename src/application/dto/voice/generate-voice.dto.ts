

export interface GenerateVoicePageDTO{

    fileName: string;
    content: string;

}

export interface GenerateVoiceRequestDTO{

    folderName: string;
    pages: GenerateVoicePageDTO[];

}

