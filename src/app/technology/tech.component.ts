import { Component, OnInit } from "@angular/core";
import { ImgPathService } from "../shared/services/img-path-service";

@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html'
})
export class TechComponent implements OnInit {

    public backgroundName = '../../assets/technology/background-technology-desktop.jpg';
    public headerEl = document.getElementById('header');
    public imgPath:string;

    constructor(private imgPathService: ImgPathService){
        this.imgPath = imgPathService.getPath();
    }

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'center';
    }

    changeImage(): void{
        this.imgPath = this.imgPathService.getPath();
    }

    onActivate(value): void{
        this.changeImage();
    }
}