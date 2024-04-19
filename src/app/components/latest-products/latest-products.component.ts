import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-latest-products',
  templateUrl: './latest-products.component.html',
  styleUrls: ['./latest-products.component.scss']
})
export class LatestProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  newProducts: any = [];

  ngOnInit(): void {
    this.productService.getNewProducts().subscribe((response) => {
      this.newProducts = response;
    },
      (error) => {
        console.error(error);
      });
  }

}
