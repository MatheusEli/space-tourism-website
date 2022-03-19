import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    public tabletMedia = window.matchMedia("(max-width: 1000px) and (min-width: 768px)");
    public mobileMedia = window.matchMedia("(max-width: 768px)");
    public desktopMedia = window.matchMedia("(min-width: 1000px)");

    ngOnInit(): void {

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
            style.backgroundImage = "url('../../assets/home/background-home-tablet.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }


    public verifyMediaMobile(x) {

        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "url('../../assets/home/background-home-mobile.jpg')";
            document.getElementById('header').
            style.backgroundPosition = 'bottom';
        }
    }

    public verifyMediaDesktop(x){
        if (x.matches) {
            document.getElementById('header').
            style.backgroundImage = "linear-gradient(to right bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)),url(https://www.unicesumar.edu.br/wp-content/uploads/2020/09/NASA-SPACE-APPS-e1601391131131.jpg)";
            document.getElementById('header')
            .style.backgroundPosition = 'center';
        }
    }

}
