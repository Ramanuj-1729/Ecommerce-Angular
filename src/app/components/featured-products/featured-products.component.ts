import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }

  featuredProducts: any = [];

  ngOnInit(): void {
    this.productService.getFeaturedProducts().subscribe((response) => {
      this.featuredProducts = response;
    },
    (error) => {
      console.error(error);
    });
  }

}
