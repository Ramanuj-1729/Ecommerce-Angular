import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  public get_brand_url = environment.SERVER_URL + "/Brand/";

  constructor(private http: HttpClient) { }

  getBrandById(id: number): Observable<any> {
    return this.http.get(this.get_brand_url + id);
  }

  getBrands(): Observable<any> {
    return this.http.get(this.get_brand_url);
  }
}
