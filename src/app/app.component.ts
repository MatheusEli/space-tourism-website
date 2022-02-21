import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  public closeMenu():void{
    document.getElementById('menu').style.display = "none";
  }
}
