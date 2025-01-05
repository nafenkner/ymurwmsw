
import { Component } from '@angular/core';
import { WebService } from '../web.service'; 

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  recipe_list: any;
  constructor(public webService: WebService) {}
  searchTerm: string = ''; // Add this property to bind with the search input field.

  ngOnInit() { 
    this.webService.getRecipes(); 
} 
}
