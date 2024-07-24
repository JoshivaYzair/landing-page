import { Component } from '@angular/core';
import { navData } from './nav-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navData = navData;
  isMenuActive = false;
  toggleMenu() {
    this.isMenuActive = !this.isMenuActive;
  }
}
