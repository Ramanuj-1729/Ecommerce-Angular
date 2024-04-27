import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public user_url = environment.SERVER_URL + "/User";

  constructor(private http: HttpClient) { }

  getUserById(userId: number) {
    return this.http.get(this.user_url + "/" + userId);
  }

  deleteUserById(userId: number) {
    return this.http.delete(this.user_url + "/" + userId);
  }
}
