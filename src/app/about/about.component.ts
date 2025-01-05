// about.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    {
      name: 'Jane Doe',
      role: 'Frontend Developer',
      image: 'https://via.placeholder.com/150',
      description: 'Jane specializes in creating beautiful and intuitive user interfaces using Angular and Bootstrap.'
    },
    {
      name: 'John Smith',
      role: 'Backend Developer',
      image: 'https://via.placeholder.com/150',
      description: 'John ensures the backend, powered by Flask, is secure, efficient, and scalable.'
    },
    {
      name: 'Alex Johnson',
      role: 'Full Stack Developer',
      image: 'https://via.placeholder.com/150',
      description: 'Alex bridges the gap between frontend and backend, ensuring smooth integration and functionality.'
    }
  ];
}