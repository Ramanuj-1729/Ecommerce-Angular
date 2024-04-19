import { Component, HostListener, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isSticky = false;
  navbarTopOffset = 0;
  categories: any = [];

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset >= this.navbarTopOffset;
  }

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data: any) => {
      this.categories = data;
    },
    (error) => {
      console.error('Error fetching categories: ', error);
    });

    const navbarElement = document.querySelector('header');
    if (navbarElement) {
      this.navbarTopOffset = navbarElement.getBoundingClientRect().top + window.pageYOffset;
    }
  }

}
