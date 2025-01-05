import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent {
  recipeId: string = ''; // To store the recipe ID entered by the user
  message: string = ''; // To display success or error messages

  constructor(private recipeService: RecipeService) {}

  deleteRecipe(): void {
    if (!this.recipeId) {
      this.message = 'Please enter a valid Recipe ID.';
      return;
    }

    this.recipeService.deleteRecipe(this.recipeId).subscribe(
      (response) => {
        console.log('Recipe deleted successfully:', response);
        this.message = 'Recipe deleted successfully!';
        this.recipeId = ''; // Clear the input
      },
      (error) => {
        console.error('Error deleting recipe:', error);
        this.message =
          'An error occurred while deleting the recipe. Please try again.';
      }
    );
  }
}

