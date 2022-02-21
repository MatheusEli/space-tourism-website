import { Component, OnDestroy, OnInit } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-spaceport',
    templateUrl: './spaceport.component.html'
})
export class SpaceportComponent implements OnInit, OnDestroy{
    
    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../../assets/technology/image-spaceport');
    }
    
    ngOnInit(): void {
        document.getElementById('item-3').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-3').classList.remove('activated');
    }}