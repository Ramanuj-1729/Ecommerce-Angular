import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-collection-card',
  templateUrl: './product-collection-card.component.html',
  styleUrls: ['./product-collection-card.component.scss']
})
export class ProductCollectionCardComponent implements OnInit {
  @Input() heading: string = "";
  @Input() offerText: string = "";
  @Input() imgSrc: string = "";
  @Input() flexDirection: string = "";
  @Input() width: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
