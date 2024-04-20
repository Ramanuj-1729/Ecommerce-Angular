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

  updatedProducts: any;

  constructor() { }

  getColumnValue(): string {
    return `repeat(${this.productsListColumn}, 1fr)`;
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

    if(this.sortingType === 'low-high') {
      this.updatedProducts = this.sortProductsByPriceLowToHigh().slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
    else if(this.sortingType === 'high-low') {
      this.updatedProducts = this.sortProductsByPriceHighToLow().slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
    else if(this.sortingType === 'A-Z') {
      this.updatedProducts = this.sortProductsByNameAToZ().slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
    else if(this.sortingType === 'Z-A') {
      this.updatedProducts = this.sortProductsByNameZToA().slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
    else {
      this.updatedProducts = this.products.slice(this.indexOfFirstItem, this.indexOfLastItem);
    }
  }
}
