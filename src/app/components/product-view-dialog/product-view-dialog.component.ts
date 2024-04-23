import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private cartService: CartService) { }

  quantity: number = 1;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  addToCart(productId: number, quantity: number) {
    this.cartService.postProductToCartWithQuantity(productId, quantity).subscribe((res) => {
      this.cartService.cartItemCount.next(this.cartService.cartItemCount.value + 1);
    });
  }

  ngOnInit(): void {
  }

}
