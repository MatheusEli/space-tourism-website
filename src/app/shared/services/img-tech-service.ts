import { Injectable } from "@angular/core";

@Injectable()
export class ImgTechService{
    imgPath:string;

    changePath(newPath: string): void{
        this.imgPath = newPath;
    }

    getPath(): string{
        return this.imgPath;
    }
}