import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-tech',
    templateUrl: './tech.component.html'
})
export class TechComponent implements OnInit {

    public backgroundName = '../../assets/technology/background-technology-desktop.jpg';
    public headerEl = document.getElementById('header');

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'center';
    }
}