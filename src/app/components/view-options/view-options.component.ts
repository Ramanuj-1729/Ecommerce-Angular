import { Component, EventEmitter, OnInit, Output } from '@angular/core';

interface Shorting {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-view-options',
  templateUrl: './view-options.component.html',
  styleUrls: ['./view-options.component.scss']
})
export class ViewOptionsComponent implements OnInit {
  @Output() productsListColumnOneEvent = new EventEmitter<number>();
  @Output() productsListColumnThreeEvent = new EventEmitter<number>();
  @Output() productsListColumnFourEvent = new EventEmitter<number>();

  shortingValues: Shorting[] = [
    { value: 'asc', viewValue: 'Ascending Order' },
    { value: 'des', viewValue: 'Descending Order' },
    { value: 'A-Z', viewValue: 'Alphabetically, A-Z' },
    { value: 'Z-A', viewValue: 'Alphabetically, Z-A' },
    { value: 'low-high', viewValue: 'Price, Low to High' },
    { value: 'high-low', viewValue: 'Price, High to Low' },
  ];

  selectedValues = this.shortingValues[0].value;

  emitColumnValue(value: number): void {
    switch (value) {
      case 1:
        this.productsListColumnOneEvent.emit(value);
        break;
      case 3:
        this.productsListColumnThreeEvent.emit(value);
        break;
      case 4:
        this.productsListColumnFourEvent.emit(value);
        break;
      default:
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
