import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-launch-vehicle',
    templateUrl: './launch-vehicle.component.html'
})
export class LaunchVehicleComponent implements OnInit, OnDestroy{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../../assets/technology/image-launch-vehicle');
    }

    ngOnInit(): void {
        document.getElementById('item-1').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-1').classList.remove('activated');
    }
}