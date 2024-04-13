import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  constructor(private router: Router) { }

  rating: number = 4;
  maxRating: number = 5;
  showIcons: boolean = false;
  route = this.router.url;


  ngOnInit(): void {
  }

}
