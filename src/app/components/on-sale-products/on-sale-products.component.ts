import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-on-sale-products',
  templateUrl: './on-sale-products.component.html',
  styleUrls: ['./on-sale-products.component.scss']
})
export class OnSaleProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  onSaleProducts: any = [];

  ngOnInit(): void {
    this.productService.getOnSaleProducts().subscribe((response) => {
      this.onSaleProducts = response;
      
    },
      (error) => {
        console.error(error);
      });
  }

}
