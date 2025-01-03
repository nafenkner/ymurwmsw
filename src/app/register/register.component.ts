import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  register(): void {
    this.authService.register(this.username, this.password).subscribe(response => {
        this.message = 'Registration successful! Redirecting to login...';
        console.log(response);
        // Redirect to login page after successful registration
        setTimeout(() => this.router.navigate(['/login']), 2000);  // Delay for user to read success message
      },
      error => {
        this.message = 'Registration failed. Please try again.';
        console.error('Registration error:', error);
      }
    );
  }
}
