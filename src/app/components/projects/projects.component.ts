import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Bone Pay USSD',
      description: 'Mobile USSD payment interface integrated with Telebirr.',
      tech: ['Flutter', 'USSD', 'Telebirr'],
    },
    {
      title: 'Land Preparation System',
      description: 'Full stack system to manage land preparation data.',
      tech: ['Angular', 'C#/.NET', 'SQL'],
    },
    {
      title: 'Lucy ERP',
      description: 'ERP system for internal enterprise management.',
      tech: ['Angular', 'Node.js', 'MongoDB'],
    },
  ];
}
