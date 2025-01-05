import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private addUrl = 'http://localhost:5000/add';
  private delUrl = 'http://localhost:5000/delete'; 
  constructor(private http: HttpClient) {}

  addRecipe(recipe: any): Observable<any> {
    return this.http.post(this.addUrl, recipe); 
  }

  deleteRecipe(recipeId: string): Observable<any> {
    return this.http.delete(`${this.delUrl}/${recipeId}`);
  }
}
