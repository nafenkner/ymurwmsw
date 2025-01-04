import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Explicitly set Content-Type
    });

    const body = { username, password };

    return this.http.post('http://127.0.0.1:5000/login', body, { headers });
  }
}
