import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { ImgTechService } from "src/app/shared/services/img-tech-service";

@Component({
    selector: 'app-spaceport',
    templateUrl: './spaceport.component.html'
})
export class SpaceportComponent implements OnInit, OnDestroy{
    
    constructor(private imgPathService: ImgTechService){
        this.imgPathService.changePath('../../../assets/technology/image-spaceport');
    }
    
    ngOnInit(): void {
        document.getElementById('item-3').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-3').classList.remove('activated');
    }}