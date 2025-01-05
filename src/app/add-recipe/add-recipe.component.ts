import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css'],
})
export class AddRecipeComponent {
  recipe = {
    name: '',
    ingredients: [] as string[],
    instructions: '',
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    tags: [] as string[],
    image: '',
  };

  newIngredient: string = '';
  newTag: string = '';
  errorMessage: string = ''; // Property for error message

  constructor(private recipeService: RecipeService, private router: Router) {}

  addIngredient(): void {
    if (this.newIngredient.trim()) {
      this.recipe.ingredients.push(this.newIngredient.trim());
      this.newIngredient = '';
    }
  }

  addTag(): void {
    if (this.newTag.trim()) {
      this.recipe.tags.push(this.newTag.trim());
      this.newTag = '';
    }
  }

  addRecipe(): void {
    this.recipeService.addRecipe(this.recipe).subscribe(
      (response) => {
        console.log('Recipe added successfully:', response);
        this.router.navigate(['/recipes']);
      },
      (error) => {
        console.error('Error adding recipe:', error);
        this.errorMessage = 'An error occurred while adding the recipe. Please try again.';
      }
    );
  }
}
