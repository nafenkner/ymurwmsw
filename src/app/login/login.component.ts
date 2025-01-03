import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.message = 'Login successful! Redirecting to books...';
        console.log(response);
        // Redirect to books page after successful login
        setTimeout(() => this.router.navigate(['/books']), 2000);  // Delay for user to read success message
      },
      error => {
        this.message = 'Login failed. Please check your credentials.';
        console.error('Login error:', error);
      }
    );
  }
}
