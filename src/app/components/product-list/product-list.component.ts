import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnChanges {
  @Input() products: any = [];

  @Input() indexOfFirstItem: number = 0;
  @Input() indexOfLastItem: number = 6;

  @Input() productsListColumn: number = 4;

  @Input() sortingType: string = 'low-high';

  @Input() categoryFilter: number[] = [];
  @Input() brandFilter: number[] = [];
  @Input() priceFilter: number[] = [];

  updatedProducts: any;

  constructor() { }

  getColumnValue(): string {
    return `repeat(${this.productsListColumn}, 1fr)`;
  }

  filterProductsByCategory(): any[] {
    return this.products.filter((product: any) => this.categoryFilter.includes(product.categoryId));
  }

  filterProductsByBrand(): any[] {
    return this.products.filter((product: any) => this.brandFilter.includes(product.brandId));
  }

  filterProductsByPrice(): any[] {
    return this.products.filter((product: any) => product.price >= this.priceFilter[0] && product.price <= this.priceFilter[1]);
  }

  sortProductsByPriceLowToHigh(): any[] {
    return this.products.sort((a: any, b: any) => a.price - b.price);
  }

  sortProductsByPriceHighToLow(): any[] {
    return this.products.sort((a: any, b: any) => b.price - a.price);
  }

  sortProductsByNameAToZ(): any[] {
    return this.products.sort((a: any, b: any) => a.name.localeCompare(b.name));
  }

  sortProductsByNameZToA(): any[] {
    return this.products.sort((a: any, b: any) => b.name.localeCompare(a.name));
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.updatedProducts = this.products.slice(this.indexOfFirstItem, this.indexOfLastItem);

    if (this.categoryFilter.length > 0) {
      this.updatedProducts = this.filterProductsByCategory().slice(this.indexOfFirstItem, this.indexOfLastItem);
    } else if (this.brandFilter.length > 0) {
      this.updatedProducts = this.filterProductsByBrand().slice(this.indexOfFirstItem, this.indexOfLastItem);
    } else if (this.priceFilter.length > 0) {
      this.updatedProducts = this.filterProductsByPrice().slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
    else {
      switch (this.sortingType) {
        case 'low-high':
          this.updatedProducts = this.sortProductsByPriceLowToHigh().slice(this.indexOfFirstItem, this.indexOfLastItem);
          break;
        case 'high-low':
          this.updatedProducts = this.sortProductsByPriceHighToLow().slice(this.indexOfFirstItem, this.indexOfLastItem);
          break;
        case 'A-Z':
          this.updatedProducts = this.sortProductsByNameAToZ().slice(this.indexOfFirstItem, this.indexOfLastItem);
          break;
        case 'Z-A':
          this.updatedProducts = this.sortProductsByNameZToA().slice(this.indexOfFirstItem, this.indexOfLastItem);
          break;
        default:
          this.updatedProducts = this.products.slice(this.indexOfFirstItem, this.indexOfLastItem);
          break;
      }
    }
  }
}
