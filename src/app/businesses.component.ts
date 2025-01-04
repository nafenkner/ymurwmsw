
import { Component } from '@angular/core';
import { WebService } from './web.service'; 

@Component({
  selector: 'recipes',
  templateUrl: './businesses.component.html',
  styleUrls: ['./businesses.component.css'],
})
export class BusinessesComponent {
  business_list: any;
  constructor(public webService: WebService) {}
  searchTerm: string = ''; // Add this property to bind with the search input field.

  ngOnInit() { 
    this.webService.getRecipies(); 
} 
}
