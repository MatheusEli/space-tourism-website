import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-spaceport',
    templateUrl: './spaceport.component.html'
})
export class SpaceportComponent implements OnInit, OnDestroy{
    
    ngOnInit(): void {
        document.getElementById('item-3').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-3').classList.remove('activated');
    }}