import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-crew',
    templateUrl: './crew.component.html'
})
export class CrewComponent implements OnInit{
    
    public backgroundName = '../../assets/crew/background-crew-desktop.jpg';
    public headerEl = document.getElementById('header');

    ngOnInit(): void {
        this.headerEl.style.backgroundImage = `url(${this.backgroundName})`;
        this.headerEl.style.backgroundPosition = 'center';
        document.getElementById('douglas-button').focus();
    } 
}