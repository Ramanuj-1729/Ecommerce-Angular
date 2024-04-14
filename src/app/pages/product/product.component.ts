import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
