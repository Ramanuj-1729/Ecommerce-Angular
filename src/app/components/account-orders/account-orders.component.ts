import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-orders',
  templateUrl: './account-orders.component.html',
  styleUrls: ['./account-orders.component.scss']
})
export class AccountOrdersComponent implements OnInit {
  @Input() userId: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
