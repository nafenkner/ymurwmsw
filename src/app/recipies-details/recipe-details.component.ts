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
  username: string = ''; 

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const recipeId = this.route.snapshot.paramMap.get('name');
    if (recipeId) {
      this.loadBookDetails(recipeId);
    }
    // Assume you have some way to get the username, e.g., from a user service or authentication token
    this.username = 'logged-in-username'; // Replace this with actual username retrieval logic
  }

  loadBookDetails(recipeId: string): void {
    this.authService.getBook(recipeId).subscribe(
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
    const recipeId = this.route.snapshot.paramMap.get('id');
    if (recipeId && this.comment && this.username) {
      this.authService.addComment(recipeId, this.comment, this.username).subscribe(
        response => {
          this.message = 'Comment added successfully!';
          this.comment = '';
          this.loadBookDetails(recipeId);  // Reload to show the new comment
        },
        error => {
          this.message = 'Failed to add comment. Please try again.';
          console.error('Error adding comment:', error);
        }
      );
    }
  }
}
