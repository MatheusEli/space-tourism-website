import { Component, OnDestroy, OnInit } from "@angular/core";

@Component({
    selector: 'app-space-capsule',
    templateUrl: './space-capsule.component.html'
})
export class SpaceCapsuleComponent implements OnInit, OnDestroy{
    
    ngOnInit(): void {
        document.getElementById('item-2').classList.add('activated');
    }

    ngOnDestroy(): void {
        document.getElementById('item-2').classList.remove('activated');
    }}