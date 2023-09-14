import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  signUp(user: any) {
    return this.http.post('http://localhost:3000/authentication', user);
  }
  login(user: any) {
    return this.http.post('http://localhost:3000/authentication/login', user);
  }
}
