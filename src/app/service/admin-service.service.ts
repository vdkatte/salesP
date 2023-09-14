import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminServiceService {
  constructor(private http: HttpClient) {}
  postQuestion(data: any) {
    console.log(data);

    return this.http.post('http://localhost:3000', data);
  }
  getQuestion(category: any) {
    return this.http.get(`http://localhost:3000/category/${category}`);
  }
  postAnswer(data: any) {
    console.log(data);

    return this.http.post(`http://localhost:3000/answer`, data);
  }
  getAnswer() {
    return this.http.get('http://localhost:3000/answer');
  }
  getuserDetails() {
    return this.http.get(`http://localhost:3000/answer/distinctUserDetails`);
  }
}
