import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { HttpErrorResponse } from '@angular/common/http'; // Import this if it's an HTTP error


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  onLogin(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: Error ) => {
        console.log('Login successful:', response);
        // Handle success (e.g., navigate to a dashboard)
      },
      error: (error: Error ) => { // Specify the type explicitly
        this.errorMessage = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      },
    })}
  }
