import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hiruy-portfolio';
   ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }
  isDarkMode = false;

toggleDarkMode() {
  this.isDarkMode = !this.isDarkMode;
  document.body.classList.toggle('dark-theme', this.isDarkMode);
}
}
