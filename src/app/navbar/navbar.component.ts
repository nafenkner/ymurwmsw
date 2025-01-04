import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  username: string = ''; // Store the logged-in user's email

  constructor(private authService: AuthService) {} // Inject the AuthService

  ngOnInit(): void {
    // Get the logged-in user's email from AuthService
    this.username = this.authService.getUserEmail();
}
}

