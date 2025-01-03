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
    this.loadRecipies();
  }

  loadRecipies(): void {
    this.authService.getRecipies().subscribe(
      response => {
        this.recipies = response;
      },
      error => {
        this.message = 'Failed to load recipies. Please try again.';
        console.error('Error loading recipies:', error);
      }
    );
  }
}
