import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public products_url = environment.SERVER_URL + "/Product";
  public products_flag_url = environment.SERVER_URL + "/Product/Flag";
  public product_url = environment.SERVER_URL + "/Product";

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.products_url);
  }

  getFeaturedProducts(): Observable<any> {
    return this.http.get(this.products_flag_url + "?flag=isFeatured");
  }

  getNewProducts(): Observable<any> {
    return this.http.get(this.products_flag_url + "?flag=isNew");
  }

  getOnSaleProducts(): Observable<any> {
    return this.http.get(this.products_flag_url + "?flag=isOnSale");
  }

  getProductById(id: string): Observable<any> {
    return this.http.get(this.product_url + "/" + id);
  }
}
