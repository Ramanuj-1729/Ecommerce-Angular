import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

interface Currency {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  constructor(public authService: AuthService) { }

  currencies: Currency[] = [
    {value: 'inr', viewValue: 'INR'},
    {value: 'usd', viewValue: 'USD'},
    {value: 'eur', viewValue: 'EUR'},
  ];

  selectedCurrency = this.currencies[0].value;

  ngOnInit(): void {
  }

}
