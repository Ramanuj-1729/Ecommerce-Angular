import { Component } from '@angular/core';

export interface CartElement {
  product: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
  action: string;
}

const ELEMENT_DATA: CartElement[] = [
  { product: '/assets/images/headphone.png', name: 'Solo Headset', price: 235, quantity: 1, total: 235, action: 'delete' },
  { product: '/assets/images/headphone.png', name: 'Solo Headset', price: 235, quantity: 1, total: 235, action: 'delete' },
];

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  quantity: number = 1;
  // quantityChange = new EventEmitter<number>();

  constructor() { }

  increaseQuantity() {
    this.quantity++;
    // this.emitQuantityChange();
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
      // this.emitQuantityChange();
    }
  }

  // emitQuantityChange() {
  //   this.quantityChange.emit(this.quantity);
  // }

  displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'total', 'action'];
  dataSource = ELEMENT_DATA;

}
