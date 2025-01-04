import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipiesComponent implements OnInit {
  recipies: any[] = [];
  message: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loadRecipies();
  }

  loadRecipies(): void {
    this.authService.getRecipies().subscribe(
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
