import { Component } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-moon',
    templateUrl: './moon.component.html'
})

export class MoonComponent{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../assets/destination/image-moon');
    }
}