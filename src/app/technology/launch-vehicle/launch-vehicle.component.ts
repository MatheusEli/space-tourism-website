import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { ImgTechService } from "src/app/shared/services/img-tech-service";

@Component({
    selector: 'app-launch-vehicle',
    templateUrl: './launch-vehicle.component.html'
})
export class LaunchVehicleComponent implements OnInit, OnDestroy{

    constructor(private imgPathService: ImgTechService){
        this.imgPathService.changePath('../../../assets/technology/image-launch-vehicle');
    }

    ngOnInit(): void {
        document.getElementById('item-1').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-1').classList.remove('activated');
    }
}