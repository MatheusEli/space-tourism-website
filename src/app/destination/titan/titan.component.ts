import { Component } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-titan',
    templateUrl: './titan.component.html'
})

export class TitanComponent{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../assets/destination/image-titan');
    }
}