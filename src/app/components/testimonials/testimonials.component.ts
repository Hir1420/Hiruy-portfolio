import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  testimonials = [
    {
      name: 'Yohannis Mulugeta',
      title: 'Full Stack Developer & Mobile App Developer',
      image: 'assets/testimonials/1724258575567.jpeg',
      message: 'Hiruy is an exceptional developer. His attention to detail and clean code always made project delivery smooth and fast.'
    },
    {
      name: 'Anteneh Shumet',
      title: 'Senior Full Stack Developer',
      image: 'assets/testimonials/photo_2025-07-28_18-27-25.jpg',
      message: 'His problem-solving skills and ability to debug in production under pressure is impressive.'
    },
    {
      name: 'Mikiyas Wubishet',
      title: 'Software Engineer',
      image: 'assets/testimonials/1721381350106.jpeg',
      message: 'Hiruy understands the importance of user experience. Working with him was always a pleasure.'
    }
  ];
}
