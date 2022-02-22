import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{

  
  public menu: HTMLElement;
  public closeButton: HTMLElement;
  public mediaQuery = window.matchMedia('(max-width: 768px)');

  ngOnInit(): void {
    this.menu = document.getElementById('menu');
    this.closeButton = document.getElementById('close-button');
  }
  public openMenu():void{
    if(this.mediaQuery.matches){
      this.menu.style.opacity = '1';
      this.menu.style.visibility = 'visible';
      this.closeButton.style.display = "block"
    }
  }
  
  public closeMenu():void{
    if(this.mediaQuery.matches){
      this.menu.style.opacity = '0';
      this.menu.style.visibility = 'hidden';
      this.closeButton.style.display = "none";
    }
  }

}
