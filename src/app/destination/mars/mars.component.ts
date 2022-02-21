import { Component } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-mars',
    templateUrl: './mars.component.html'
})

export class MarsComponent{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../assets/destination/image-mars');
    }
}