import { Component, NgZone, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, private zone: NgZone) { }

  displayedColumns: string[] = ['product', 'name', 'price', 'quantity', 'total', 'action'];
  dataSource: any = [];
  grandTotal: number = 0;

  findQuantity(productId: number) {
    return this.dataSource.find((item: any) => item.productId === productId).quantity;
  }

  calculateGrandTotal() {
    this.grandTotal = this.dataSource.reduce((acc: any, item: any) => acc + item.total, 0);
  }

  increaseQuantity(productId: number) {
    let itemQuantity = this.findQuantity(productId);

    if (itemQuantity < 10) {
      this.cartService.incrementQuantity(productId).subscribe();
      this.dataSource.find((item: any) => item.productId === productId).quantity++;
      this.dataSource.find((item: any) => item.productId === productId).total += this.dataSource.find((item: any) => item.productId === productId).price;
      this.calculateGrandTotal();
    } else {
      alert('You can only add up to 10 items');
    }
  }

  decreaseQuantity(productId: number) {
    let itemQuantity = this.findQuantity(productId);

    if (itemQuantity > 1) {
      this.cartService.decrementQuantity(productId).subscribe();
      this.dataSource.find((item: any) => item.productId === productId).quantity--;
      this.dataSource.find((item: any) => item.productId === productId).total -= this.dataSource.find((item: any) => item.productId === productId).price;
      this.calculateGrandTotal();
    } else {
      alert('You have to add at least 1 item');
    }
  }

  ngOnInit() {
    this.cartService.getCartItems().subscribe((res) => {

      this.dataSource = res.map((item: any) => ({
        productId: item.id,
        product: item.image,
        name: item.productName,
        price: item.price,
        quantity: item.quantity,
        total: item.totalPrice,
        action: 'delete'
      }));
      this.cartService.cartItemCount.next(this.dataSource.length);
      this.calculateGrandTotal();
    });
  }

  deleteProductFromCart(productId: number) {
    this.zone.run(() => {
      this.dataSource = this.dataSource.filter((item: any) => item.productId !== productId);
    },
      this.cartService.removeCartItem(productId).subscribe());
    this.cartService.cartItemCount.next(this.cartService.cartItemCount.value - 1);
    this.calculateGrandTotal();
  }
}
