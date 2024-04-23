import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  quantity: number = 1;

  productId: string = '';
  product: any = {};

  constructor(private route: ActivatedRoute, private productService: ProductService, private cartService: CartService) { }

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
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });

    this.productService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
    });

  }

}
