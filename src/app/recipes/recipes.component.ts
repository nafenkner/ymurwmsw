
import { Component } from '@angular/core';
import { WebService } from '../web.service'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipiesComponent {
  recipes: any;
  constructor( private authService: AuthService) {}

  ngOnInit() { 
    this.authService.getRecipes(); 
} 
}
