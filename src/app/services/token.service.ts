import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  public token_url = environment.SERVER_URL + "/Auth/Token";

  constructor(private http: HttpClient) { }

  getToken(): Observable<any> {
    return this.http.get(this.token_url);
  }
}