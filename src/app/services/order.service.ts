import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  public order_url = environment.SERVER_URL + '/Payment';

  constructor(private http: HttpClient) { }

  postOrder(userId: number): Observable<any> {
    return this.http.post(this.order_url, userId);
  }
}
