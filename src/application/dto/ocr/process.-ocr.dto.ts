
export interface OCRPageDTO{

    pageId: number;
    pageNumber: number;
    imageUrl: string | null;

}

export interface ProcessOCRRequestDTO{

    pages: OCRPageDTO[];

}