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

    public tabletMedia = window.matchMedia("(max-width: 1000px) and (min-width: 768px)");
    public mobileMedia = window.matchMedia("(max-width: 768px)");
    public desktopMedia = window.matchMedia("(min-width: 1000px)");

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'center';

        this.verifyMediaDesktop(this.desktopMedia);
        this.desktopMedia.addListener(this.verifyMediaDesktop);

        this.verifyMediaTablet(this.tabletMedia);
        this.tabletMedia.addListener(this.verifyMediaTablet);

        this.verifyMediaMobile(this.mobileMedia);
        this.mobileMedia.addListener(this.verifyMediaMobile);
    }

    public verifyMediaTablet(x) {

        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/technology/background-technology-tablet.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }


    public verifyMediaMobile(x) {

        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/technology/background-technology-mobile.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }

    public verifyMediaDesktop(x){
        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/technology/background-technology-desktop.jpg')";
        }
    }
    constructor(private imgPathService: ImgPathService){
        this.imgPath = imgPathService.getPath();
    }


    changeImage(): void{
        this.imgPath = this.imgPathService.getPath();
    }

    onActivate(value): void{
        this.changeImage();
    }
}
