import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:5000/register'; 

  constructor(private http: HttpClient) {}

  // Send user data to the backend for registration
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  // Save user data to local storage
  saveUserLocally(user: any): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  // Retrieve all users from local storage
  getLocalUsers(): any[] {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }
}
