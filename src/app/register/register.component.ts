import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor() {}

  register() {
    if (this.username && this.email && this.password) {
      // Simulate a successful registration
      this.successMessage = 'Registration successful!';
      this.errorMessage = '';
      this.clearForm();
    } else {
      this.errorMessage = 'Please fill out all fields.';
      this.successMessage = '';
    }
  }

  clearForm() {
    this.username = '';
    this.email = '';
    this.password = '';
  }
}
