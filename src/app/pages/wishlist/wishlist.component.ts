import { Component } from '@angular/core';

export interface WishlistElement {
  product: string;
  name: string;
  price: number;
  action: string;
}

const ELEMENT_DATA: WishlistElement[] = [
  { product: '/assets/images/headphone.png', name: 'Solo Headset', price: 235, action: 'delete' },
  { product: '/assets/images/headphone.png', name: 'Solo Headset', price: 235, action: 'delete' },
];

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent {

  displayedColumns: string[] = ['product', 'name', 'price', 'action'];
  dataSource = ELEMENT_DATA;

}
