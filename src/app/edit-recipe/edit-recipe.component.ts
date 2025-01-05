import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  recipe = {
    name: '',
    ingredients: '',
    instructions: '',
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: 'Easy', // Default value
    cuisine: '',
    caloriesPerServing: 0,
    tags: '',
    mealType: '',
    rating: 0,
    reviewCount: 0
  };

  saveRecipe() {
    console.log('Recipe saved:', this.recipe);
    // Add your logic to save the recipe here, e.g., make an API call or update a service
  }
}

