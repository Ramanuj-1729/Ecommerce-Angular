import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  public get_category_url = environment.SERVER_URL + "/Category/";

  constructor(private http: HttpClient) { }

  getCategoryById(id: number): Observable<any> {
    return this.http.get(this.get_category_url + id);
  }

  getCategories(): Observable<any> {
    return this.http.get(this.get_category_url);
  }
}
