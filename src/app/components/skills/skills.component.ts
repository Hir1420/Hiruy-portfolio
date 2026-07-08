import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Languages',
      icon: 'code',
      items: ['C#', 'PHP', 'Dart', 'JavaScript', 'TypeScript', 'SQL']
    },
    {
      title: 'Frontend Frameworks',
      icon: 'layers',
      items: ['React', 'Next.js', 'Angular', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      title: 'Backend Frameworks',
      icon: 'terminal',
      items: ['Laravel', 'ASP.NET', 'Node.js', 'Express.js']
    },
    {
      title: 'Mobile Development',
      icon: 'phone_android',
      items: ['Flutter', 'Android']
    },
    {
      title: 'Database Management',
      icon: 'storage',
      items: ['MySQL', 'SQL Server']
    },
    {
      title: 'Cloud & DevOps Tools',
      icon: 'construction',
      items: ['Firebase', 'GitHub Actions', 'Git', 'Postman', 'Figma']
    },
    {
      title: 'Fintech & API Integrations',
      icon: 'api',
      items: ['REST APIs', 'Telebirr', 'Chapa']
    }
  ];
}
