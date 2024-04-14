import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  id: number;
  name: string;
  price: number;
  off: number;
  description: string;
  image: string;
  avalibility: string;
}

@Component({
  selector: 'app-product-view-dialog',
  templateUrl: './product-view-dialog.component.html',
  styleUrls: ['./product-view-dialog.component.scss']
})
export class ProductViewDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  // imgData = this.data.img;

  quantity: number = 1;
  // quantityChange = new EventEmitter<number>();

  // constructor() { }

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
