import { Component, OnInit } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from 'src/app/services/auth.service';

interface Currency {
  value: string;
  viewValue: string;
}

interface UserId {
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'?: string;
}

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss']
})
export class TopNavbarComponent implements OnInit {
  constructor(public authService: AuthService) { }

  public tokenId: any = 0;

  currencies: Currency[] = [
    { value: 'inr', viewValue: 'INR' },
    { value: 'usd', viewValue: 'USD' },
    { value: 'eur', viewValue: 'EUR' },
  ];

  selectedCurrency = this.currencies[0].value;



  ngOnInit(): void {
    let token = localStorage.getItem('token');

    if (token) {
      const decodedToken = jwtDecode(token) as UserId;
      this.tokenId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
    }
  }

}
