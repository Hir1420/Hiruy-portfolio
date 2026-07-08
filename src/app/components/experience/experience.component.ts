import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  experiences = [
    {
      company: 'Loom Solutions',
      role: 'Lead Software Developer',
      period: 'Sep 2025 – Present',
      location: 'Remote',
      type: 'Contract / Remote',
      highlights: [
        'Architected and led the development of the AfroMekina Mobile App & Website marketplace.',
        'Engineered the Qen App and ClickSuq multi vendor digital ecommerce platform.',
        'Developed scalable custom agency portals and corporate company websites.'
      ],
      tech: ['Flutter', 'Laravel', 'Next.js', 'MySQL', 'React', 'REST APIs']
    },
    {
      company: 'Axis Marketing Services',
      role: 'Software Developer',
      period: 'Nov 2025 – Present',
      location: 'Remote',
      type: 'Part Time / Remote',
      highlights: [
        'Built Amenye Ecommerce platform, enabling seamless digital payments and localized checkouts.',
        'Developed custom corporate CRM Platforms for campaign, lead tracking and operations.',
        'Architected the Mekar digital workflow management system.'
      ],
      tech: ['React', 'Node.js', 'Laravel', 'Next.js', 'Express.js', 'Postman']
    },
    {
      company: 'XOKA IT Solutions PLC',
      role: 'Full Stack Software Developer',
      period: 'Oct 2024 – Jul 2025',
      location: 'Addis Ababa, Ethiopia',
      type: 'Onsite / Full Time',
      highlights: [
        'Engineered governmental enterprise platforms: Addis Ababa Land Management Information System & Federal Houses ERP.',
        'Developed Bone Payment Mobile App, including Telebirr mobile API and USSD integrations.',
        'Collaborated with cross functional government teams to optimize large-scale SQL Server databases.'
      ],
      tech: ['Angular', 'ASP.NET', 'SQL Server', 'C#', 'Telebirr', 'USSD Payment']
    }
  ];
}