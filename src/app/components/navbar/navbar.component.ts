import {  Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent  {

  activeLink(element: HTMLElement) {
    const list = document.querySelectorAll('.list');
    list.forEach(item => item.classList.remove('active'));
    element.classList.toggle('active');
  }
}
