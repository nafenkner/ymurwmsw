import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000';  
  private users: { email: string; password: string }[] = [];
  private currentUser: string | null = null;

  constructor(private http: HttpClient) { }

  registerUser(email: string, password: string): boolean {
    const userExists = this.users.some((user) => user.email === email);

    if (userExists) {
      return false; 
    }

    this.users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(this.users)); 
    return true;
  }

  loginUser(email: string, password: string): boolean {
    const storedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userFound = storedUsers.some(
      (user: { email: string; password: string }) =>
        user.email === email && user.password === password
    );

    if (userFound) {
      this.currentUser = email;
      return true;
    }

    return false;
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }

  logoutUser(): void {
    this.currentUser = null;
  }
  getRecipes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/recipes`);
  }

  getRecipe(recipeID: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/recipies/${recipeID}`);
  }

  addComment(bookId: string, comment: string, username: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/books/${bookId}/comments`, { comment, username });
  }
}
