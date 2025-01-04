import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  message = '';

  constructor(private http: HttpClient) {}

  onRegister() {
    const payload = { username: this.username, password: this.password };
    this.http.post('http://127.0.0.1:5000/register', payload).subscribe({
      next: (response: any) => {
        this.message = response.message;
      },
      error: (err) => {
        this.message = err.error.message;
      }
    });
  }
}
