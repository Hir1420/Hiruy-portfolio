import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills = [
    { name: 'Flutter', level: 90 },
    { name: 'UI/UX', level: 76 },
    { name: 'SQL/MySQL', level: 85 },
    { name: 'C# / .NET', level: 86 },
    { name: 'Next.js', level: 85 },
    { name: 'Angular', level: 85 }
  ];
}
