import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  public wishlist_url = environment.SERVER_URL;

  constructor(private http: HttpClient) { }

  postProductToWishlist(userId: number, productId: number): Observable<any> {
    return this.http.post(this.wishlist_url + `/Wishlist/add-wishlist?userId=${userId}&productId=${productId}`, {});
  }

  getWishlist(userId: string): Observable<any> {
    return this.http.get(this.wishlist_url + `/Wishlist/get-wishlist?userId=${userId}`);
  }

  deleteProductFromWishlist(productId: number): Observable<any> {
    return this.http.delete(this.wishlist_url + `/Wishlist/remove-wishlist?productId=${productId}`);
  }
}
