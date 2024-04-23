import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

interface JwtTokenData {
  [key: string]: string | number | undefined;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'?: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'?: string;
  'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'?: string;
  'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'?: string;
  exp?: number;
}

interface TokenData {
  id?: string;
  name?: string;
  role?: string;
  email?: string;
  exp?: number;
}

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public token_url = environment.SERVER_URL + "/Auth/Token";

  constructor(private http: HttpClient) { }

  tokenData: TokenData = {
    id: '',
    name: '',
    role: '',
    email: '',
    exp: 0
  };

  public getTokenData(): TokenData | undefined {
    let token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token) as JwtTokenData;
      this.tokenData.id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      this.tokenData.name = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
      this.tokenData.role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      this.tokenData.email = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'];
      this.tokenData.exp = decodedToken.exp;

      return this.tokenData;
    }
    return undefined;
  }

  getToken(): Observable<any> {
    return this.http.get(this.token_url);
  }
}
