import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  public cart_url = environment.SERVER_URL + '/Cart';

  constructor(private http: HttpClient) { }

  public cartItemCount = new BehaviorSubject<number>(0);

  postProductToCart(productId: number): Observable<any> {
    return this.http.post(this.cart_url + `/add-to-cart?productId=${productId}`, {});
  }

  getCartItems(): Observable<any> {
    return this.http.get(this.cart_url + '/GetCartItems');
  }

  removeCartItem(productId: number): Observable<any> {
    return this.http.delete(this.cart_url + `/remove-item-from-cart?productId=${productId}`);
  }

  incrementQuantity(productId: number): Observable<any> {
    return this.http.put(this.cart_url + `/increment-quantity?productId=${productId}`, {});
  }

  decrementQuantity(productId: number): Observable<any> {
    return this.http.put(this.cart_url + `/decrement-quantity?productId=${productId}`, {});
  }
}
