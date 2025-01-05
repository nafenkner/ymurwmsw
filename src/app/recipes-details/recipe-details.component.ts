import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  recipe: any;
  comment: string = '';
  message: string = '';
  username: string = ''; // Add this to capture the logged-in username

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const recipeID = this.route.snapshot.paramMap.get('id');
    if (recipeID) {
      this.loadRecipeDetails(recipeID);
    }
  }

  loadRecipeDetails(bookId: string): void {
    this.authService.getRecipe(bookId).subscribe(
      response => {
        this.recipe = response;
      },
      error => {
        this.message = 'Failed to load book details. Please try again.';
        console.error('Error loading book details:', error);
      }
    );
  }

  addComment(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId && this.comment && this.username) {
      this.authService.addComment(bookId, this.comment, this.username).subscribe(
        response => {
          this.message = 'Comment added successfully!';
          this.comment = '';
          this.loadRecipeDetails(bookId); 
        },
        error => {
          this.message = 'Failed to add comment. Please try again.';
          console.error('Error adding comment:', error);
        }
      );
    }
  }
}
