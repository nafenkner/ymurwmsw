import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // For HTTP error typing

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any; 
  comment: string = '';
  message: string = '';
  username: string = ''; 

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const recipeID = this.route.snapshot.paramMap.get('id');
    if (recipeID) {
      this.loadRecipeDetails(recipeID);
    }
  }

  loadRecipeDetails(recipeID: string): void {
    this.authService.getRecipe(recipeID).subscribe({
      next: (response: any) => { // Replace `any` with the expected type of response
        this.recipe = response;
      },
      error: (error: HttpErrorResponse) => { // Explicitly typing `error`
        this.message = 'Failed to load recipe details. Please try again.';
        console.error('Error loading recipe details:', error.message);
      }
    });
  }

  addComment(): void {
    const recipeID = this.route.snapshot.paramMap.get('id');
    if (recipeID && this.comment && this.username) {
      this.authService.addComment(recipeID, this.comment, this.username).subscribe({
        next: (response: any) => { // Replace `any` with the expected type of response
          this.message = 'Comment added successfully!';
          this.comment = ''; // Clear the comment input
          this.loadRecipeDetails(recipeID); // Reload to show the new comment
        },
        error: (error: HttpErrorResponse) => { // Explicitly typing `error`
          this.message = 'Failed to add comment. Please try again.';
          console.error('Error adding comment:', error.message);
        }
      });
    }
  }
}
