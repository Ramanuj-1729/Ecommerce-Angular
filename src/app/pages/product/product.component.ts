import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  quantity: number = 1;
  // quantityChange = new EventEmitter<number>();

  productId: string = '';
  product: any = {};

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

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
    this.route.params.subscribe((params: Params) => {
      this.productId = params['id'];
    });

    this.productService.getProductById(this.productId).subscribe((product) => {
      this.product = product;
    });
  }

}
