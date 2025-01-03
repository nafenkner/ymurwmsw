import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipies-details',
  templateUrl: './recipies-details.component.html',
  styleUrls: ['./recipies-details.component.css']
})
export class RecipiesDetailsComponent implements OnInit {
  recipie: any;
  comment: string = '';
  message: string = '';
  username: string = '';

  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const recipieId = this.route.snapshot.paramMap.get('id');
    if (recipieId) {
      this.loadBookDetails(recipieId);
    }
    // Assume you have some way to get the username, e.g., from a user service or authentication token
    this.username = 'logged-in-username'; // Replace this with actual username retrieval logic
  }

  loadBookDetails(bookId: string): void {
    this.authService.getBook(bookId).subscribe(
      response => {
        this.recipie = response;
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
          this.loadBookDetails(bookId);  // Reload to show the new comment
        },
        error => {
          this.message = 'Failed to add comment. Please try again.';
          console.error('Error adding comment:', error);
        }
      );
    }
  }
}
