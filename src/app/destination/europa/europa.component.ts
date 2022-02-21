import { Component } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-europa',
    templateUrl: './europa.component.html'
})

export class EuropaComponent{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../assets/destination/image-europa');
    }
}