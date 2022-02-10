import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-launch-vehicle',
    templateUrl: './launch-vehicle.component.html'
})
export class LaunchVehicleComponent implements OnInit, OnDestroy{
    
    ngOnInit(): void {
        document.getElementById('item-1').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-1').classList.remove('activated');
    }
}