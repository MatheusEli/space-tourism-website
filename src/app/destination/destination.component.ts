import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-destination',
    templateUrl: './destination.component.html'
})
export class DestinationComponent implements OnInit{
    
    public backgroundName = '../../assets/destination/background-destination-desktop.jpg';
    public headerEl = document.getElementById('header');

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'center';
    } 
}