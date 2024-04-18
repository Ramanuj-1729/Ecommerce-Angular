import { Component, OnInit } from '@angular/core';

export interface Tile {
  heading: string;
  offerText: string;
  imgSrc: string;
  cols: number;
  rows: number;
  direction: string;
  width: string;
}

@Component({
  selector: 'app-product-collection',
  templateUrl: './product-collection.component.html',
  styleUrls: ['./product-collection.component.scss']
})
export class ProductCollectionComponent implements OnInit {

  tiles: Tile[] = [
    { heading: "NEW LAPTOPS", offerText: "Sale up to 30% off all products in the new collection.", imgSrc: "/assets/images/laptop1.png", cols: 2, rows: 2, direction: "column", width: "80%" },
    { heading: "TABLETS, SMARTPHONES AND MORE", offerText: "Sale up to 30%.", imgSrc: "/assets/images/tablet1.png", cols: 1, rows: 1, direction: "row", width: "50%" },
    { heading: "NEW CAMERAS COLLECTION", offerText: "Sale up to 30%.", imgSrc: "/assets/images/camera1.png", cols: 1, rows: 1, direction: "row", width: "50%" },
    { heading: "CACH BIG OFFERS ON SMART WATCH", offerText: "Sale up to 20%.", imgSrc: "/assets/images/Smartwatch1.png", cols: 2, rows: 1, direction: "row", width: "50%" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
