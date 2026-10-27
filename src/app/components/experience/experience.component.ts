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
      type: 'Remote Contract',
      highlights: [
        'Led frontend and backend engineering for the AfroMekina automotive marketplace across web (Next.js) and mobile (Flutter).',
        'Architected modular Laravel REST APIs handling normalized vehicle catalogs, multi-criteria filtering, and client asset uploads.',
        'Developed e-commerce features for ClickSuq and cross-platform mobile flows for the Qen mobile application.'
      ],
      tech: ['Flutter', 'Dart', 'Next.js', 'React', 'Laravel', 'PHP', 'MySQL', 'REST APIs']
    },
    {
      company: 'Axis Marketing Services',
      role: 'Software Developer',
      period: 'Nov 2025 – Present',
      location: 'Remote',
      type: 'Remote Contract (Concurrent)',
      highlights: [
        'Engineered the Amenye e-commerce platform using Next.js/React and integrated Chapa payment gateway with server-side webhook validation.',
        'Built modular REST endpoints in Node.js/Express with Sequelize ORM for the Mekar mentorship and consultation booking platform.',
        'Developed internal corporate CRM tools in Laravel and React for pipeline tracking, interaction logging, and customer queues.'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'Laravel', 'Chapa Gateway', 'MySQL']
    },
    {
      company: 'XOKA IT Solutions PLC',
      role: 'Full Stack Software Developer',
      period: 'Oct 2024 – Jul 2025',
      location: 'Addis Ababa, Ethiopia',
      type: 'Full-Time · On-site',
      highlights: [
        'Developed governmental enterprise systems: Addis Ababa Land Management Information System and Federal Houses Corporation ERP using Angular and ASP.NET Core.',
        'Engineered the Bone Pay mobile application in Flutter, integrating Telebirr mobile wallet APIs and prototyping sequential USSD menu state machines.',
        'Designed database schemas, stored procedures, and audit log tables in Microsoft SQL Server to maintain non-repudiation for high-consequence civic workflows.'
      ],
      tech: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'Flutter', 'Telebirr API', 'USSD Workflows']
    }
  ];
}