import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  allProducts: any = [];

  constructor(private productService: ProductService) { }

  indexOfFirstItem: number = 0;
  indexOfLastItem: number = 6;

  receiveIndexOfFirstItem(indexOfFirstItem: number) {
    this.indexOfFirstItem = indexOfFirstItem;
  }

  receiveIndexOfLastItem(indexOfLastItem: number) {
    this.indexOfLastItem = indexOfLastItem;
  }

  ngOnInit(): void {

    this.productService.getProducts().subscribe((products) => {
      this.allProducts = products;
    },
    (error) => {
      console.error(error);
    });
  }

}
