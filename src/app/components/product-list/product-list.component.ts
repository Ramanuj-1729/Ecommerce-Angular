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

  slicedProducts: any;

  constructor() { }

  getColumnValue(): string {
    return `repeat(${this.productsListColumn}, 1fr)`;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.slicedProducts = this.products.slice(this.indexOfFirstItem, this.indexOfLastItem);
  }
}
