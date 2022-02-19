import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
    
    public backgroundName = '../../assets/home/background-home-tablet.jpg'
    public headerEl = document.getElementById('header');

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'bottom';
    } 

}