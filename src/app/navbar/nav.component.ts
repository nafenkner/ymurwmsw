import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavbarComponent implements OnInit {
  currentUser: string | null = null; // Holds the name or email of the logged-in user

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    // Fetch the currently logged-in user from AuthService
    this.currentUser = this.authService.getCurrentUser();
  }

  logout(): void {
    // Logout the user via AuthService
    this.authService.logoutUser();
    this.currentUser = null; // Clear the currentUser variable
  }
}
