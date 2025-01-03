import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css']
})
export class RecipiesComponent implements OnInit {
  recipies: any[] = [];
  message: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.authService.getBooks().subscribe(
      response => {
        this.recipies = response;
      },
      error => {
        this.message = 'Failed to load books. Please try again.';
        console.error('Error loading books:', error);
      }
    );
  }
}
