import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-douglas',
    templateUrl: './douglas.component.html'
})
export class DouglasComponent implements OnInit {
    ngOnInit(): void {
        document.getElementById('douglas-button').focus();
    }
}