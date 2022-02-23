import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {


  public menu: HTMLElement;
  public closeButton: HTMLElement;
  public mediaQuery = window.matchMedia('(max-width: 768px)');

  ngOnInit(): void {
    this.menu = document.getElementById('menu');
    this.closeButton = document.getElementById('close-button');

    this.verifyMediaMobile(this.mediaQuery);
    this.mediaQuery.addListener(this.verifyMediaMobile);
  }
  public openMenu(): void {
    if (this.mediaQuery.matches) {
      this.menu.style.opacity = '1';
      this.menu.style.visibility = 'visible';
      this.closeButton.style.display = "block"
    }
  }

  public closeMenu(): void {
    if (this.mediaQuery.matches) {
      this.menu.style.opacity = '0';
      this.menu.style.visibility = 'hidden';
      this.closeButton.style.display = "none";
    }
  }

  public verifyMediaMobile(x) {

    if (!x.matches) {
      document.getElementById('menu').style.opacity = '1';
      document.getElementById('menu').style.visibility = 'visible';
      document.getElementById('close-button').style.display = "none";
    } 
  }

}
