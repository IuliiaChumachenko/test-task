import { Component } from '@angular/core';
import { menuItems } from '../../constants/menu-items';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public menuItems = menuItems;

  constructor(public router: Router) {}

  public clickMenuItem(menuItem: string): void {
    const path = menuItem.toLowerCase().replace(' ', '-');
    this.router.navigate([`./home/${path}`]);
  }
}
