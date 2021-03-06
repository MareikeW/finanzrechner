import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isMenuOpen: boolean = false;

  toggleMenu() { 
    this.isMenuOpen ? this.isMenuOpen = false : this.isMenuOpen = true;
  }
}
