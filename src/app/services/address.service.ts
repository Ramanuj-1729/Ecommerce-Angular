import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private address_url = environment.SERVER_URL + "/Address";

  constructor(private http: HttpClient) { }

  addAddress(address: any): Observable<any> {
    return this.http.post(this.address_url, address);
  }

  getAddressesByUserId(userId: number): Observable<any> {
    return this.http.get(this.address_url + "/" + userId);
  }

  deleteAddress(addressId: number): Observable<any> {
    return this.http.delete(this.address_url + "/" + addressId);
  }

  updateAddress(address: any, addressId: number): Observable<any> {
    return this.http.put(this.address_url + "/" + addressId, address);
  }
}
