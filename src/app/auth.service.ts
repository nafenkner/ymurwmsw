import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';  // Ensure this URL matches your Flask server

  constructor(private http: HttpClient) { }

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  getRecipies(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recipies`);
  }

  getRecipe(recipeID: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipies/${recipeID}`);
  }

  addComment(bookId: string, comment: string, username: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books/${bookId}/comments`, { comment, username });
  }
}
