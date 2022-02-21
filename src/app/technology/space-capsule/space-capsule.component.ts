import { Component, EventEmitter, OnDestroy, OnInit, Output } from "@angular/core";
import { ImgPathService } from "src/app/shared/services/img-path-service";

@Component({
    selector: 'app-space-capsule',
    templateUrl: './space-capsule.component.html'
})
export class SpaceCapsuleComponent implements OnInit, OnDestroy{

    constructor(private imgPathService: ImgPathService){
        this.imgPathService.changePath('../../../assets/technology/image-space-capsule');
    }

    ngOnInit(): void {
        document.getElementById('item-2').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-2').classList.remove('activated');
    }}