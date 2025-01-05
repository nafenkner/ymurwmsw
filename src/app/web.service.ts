import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  recipe_list: any; 
  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get('http://localhost:5000/recipes').subscribe((response: any) => { 
      this.recipe_list = response; 
      console.log(response) 
      });
  }
}
