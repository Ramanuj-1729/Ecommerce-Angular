import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSticky = false;
  navbarTopOffset = 0;

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset >= this.navbarTopOffset;
  }

  constructor() { }

  ngOnInit(): void {
    const navbarElement = document.querySelector('header');
    if (navbarElement) {
      this.navbarTopOffset = navbarElement.getBoundingClientRect().top + window.pageYOffset;
    }
  }

}
