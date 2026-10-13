

export interface OcrRepository{

    create(lines : string[0]): Promise<void>;

}