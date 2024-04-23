import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

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
  constructor(public authService: AuthService, private tokenService: TokenService) { }

  public tokenId: string = '';

  currencies: Currency[] = [
    { value: 'inr', viewValue: 'INR' },
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
  ];

  selectedCurrency = this.currencies[0].value;

  ngOnInit(): void {
    this.tokenId = this.tokenService.getTokenData()?.id || '';
  }

}
