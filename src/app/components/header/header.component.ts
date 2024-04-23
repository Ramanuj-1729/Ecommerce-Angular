import { Component, HostListener, NgZone, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
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
  cartItemLength: number = 0;

  @HostListener('window:scroll', [])

  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isSticky = offset >= this.navbarTopOffset;
  }

  constructor(private categoryService: CategoryService, private cartService: CartService, private zone: NgZone) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => {
      this.categories = data;
    },
    (error) => {
      console.error('Error fetching categories: ', error);
    });

    this.cartService.getCartItems().subscribe((data) => {
      this.cartService.cartItemCount.next(data.length);
    });

    this.cartService.cartItemCount.subscribe((data) => {
      this.cartItemLength = data;
    });

    const navbarElement = document.querySelector('header');
    if (navbarElement) {
      this.navbarTopOffset = navbarElement.getBoundingClientRect().top + window.pageYOffset;
    }
  }

}
