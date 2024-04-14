import { Component, OnInit } from '@angular/core';

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

  shortingValues: Shorting[] = [
    {value: 'asc', viewValue: 'Ascending Order'},
    {value: 'des', viewValue: 'Descending Order'},
    {value: 'A-Z', viewValue: 'Alphabetically, A-Z'},
    {value: 'Z-A', viewValue: 'Alphabetically, Z-A'},
    {value: 'low-high', viewValue: 'Price, Low to High'},
    {value: 'high-low', viewValue: 'Price, High to Low'},
  ];

  selectedValues = this.shortingValues[0].value;

  constructor() { }

  ngOnInit(): void {
  }

}
