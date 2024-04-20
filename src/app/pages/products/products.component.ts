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

  productsListColumn: number = 4;

  handleProductsListColumnEvent(value: number): void {
    switch (value) {
      case 1:
        this.productsListColumn = 1;
        break;
      case 3:
        this.productsListColumn = 3;
        break;
      case 4:
        this.productsListColumn = 4;
        break;
      default:
        break;
    }
  }

  sortingType: string = 'low-high';

  handleSortingTypeEvent(value: string): void {
    this.sortingType = value;
  }

  categoryIdArray: number[] = [];

  handleSelectedCategories(event: number[]): void {
    this.categoryIdArray = event;
  }

  brandIdArray: number[] = [];

  handleSelectedBrands(event: number[]): void {
    this.brandIdArray = event;
  }

  priceRangeArray: number[] = [];

  handlePriceRange(event: number[]): void {
    this.priceRangeArray = event;
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
