import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public payment_url = environment.SERVER_URL + '/Payment/checkout';

  constructor(private http: HttpClient) { }

  postPayment(): Observable<any> {
    return this.http.post(this.payment_url, {});
  }
}
