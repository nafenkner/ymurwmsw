import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WebService {
  business_list: any; 
  constructor(private http: HttpClient) {}

  getBusinesses() {
    return this.http.get('http://localhost:5000/businesses').subscribe((response: any) => { 
      this.business_list = response; 
      console.log(response) 
      });
  }
}
