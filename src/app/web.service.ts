import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  constructor(private http: HttpClient) {}

  getBusinesses() {
    return this.http.get('http://localhost:5000/businesses');
  }
}
