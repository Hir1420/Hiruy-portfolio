import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'AfroMekina Mobile',
      role: 'Lead Mobile Developer',
      description: 'A high performance cross platform vehicle listing and marketplace mobile application. Features rich UI animations, real-time listings, multi-language localization, search filter mechanics, and secure direct to seller chat.',
      tech: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
      liveLink: 'https://play.google.com/store',
      githubLink: '',
      image: 'assets/project_afromekina_mobile.jpg'
    },
    {
      title: 'AfroMekina Website',
      role: 'Lead Web Developer',
      description: 'The web app companion for Ethiopia\'s premier automotive listing portal. Built with premium design, dynamic SSR rendering, precise SEO best practices, and fluid glassmorphism aesthetics.',
      tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      liveLink: 'https://afromekina.com',
      githubLink: '',
      image: 'assets/project_afromekina_web.jpg'
    },
    {
      title: 'Addis Ababa Land Management System',
      role: 'Full Stack Developer',
      description: 'A mission critical governmental enterprise portal built for the Land Bureau. Digitizes land registry ownerships, title deeds, boundary transfers, and substitutions with deep security protocols and logging audit trails.',
      tech: ['Angular', 'ASP.NET Core', 'SQL Server', 'C#'],
      liveLink: '',
      githubLink: '',
      image: 'assets/project_land_management.jpg'
    },
    {
      title: 'Federal Houses ERP',
      role: 'Full Stack Developer',
      description: 'A comprehensive Enterprise Resource Planning platform for the Federal Housing Corporation. Streamlines property allocations, asset valuations, financial transactions, maintenance scheduling, and automated billing workflows.',
      tech: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'Material UI'],
      liveLink: '',
      githubLink: '',
      image: 'assets/project_federal_houses.jpg'
    },
    {
      title: 'Amenye Ecommerce',
      role: 'Software Developer',
      description: 'A modern, premium multi vendor shopping platform. Features highly responsive layouts, complex cart logic, vendor dashboard interfaces, and automated checkout processes integrated with localized payment gateways.',
      tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'Chapa Integration'],
      liveLink: 'https://amenye.com',
      githubLink: '',
      image: 'assets/project_amenye.jpg'
    },
    {
      title: 'CRM Platform',
      role: 'Software Developer',
      description: 'Custom corporate Customer Relationship Management engine designed to run customer service queues, manage sales leads pipelines, track marketing campaign returns, and generate visual telemetry reports.',
      tech: ['Laravel', 'PHP', 'React', 'Tailwind CSS', 'MySQL'],
      liveLink: '',
      githubLink: '',
      image: 'assets/project_crm.jpg'
    },
    {
      title: 'Bone Payment',
      role: 'Full Stack Developer',
      description: 'Secure digital payment client allowing quick scan checkout integrations. Combines mobile app API workflows with fallback USSD payment triggers and automatic transactional email notifications.',
      tech: ['Flutter', 'ASP.NET Core', 'Telebirr', 'USSD Protocol', 'SQL Server'],
      liveLink: '',
      githubLink: '',
      image: 'assets/project_bone_payment.jpg'
    },
    {
      title: 'Mekar Platform',
      role: 'Software Developer',
      description: 'Collaborative task allocation and operations coordinator. Built for agencies to schedule projects, assign milestones, track timesheets, manage digital content reviews, and optimize team resource utilisation.',
      tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'CSS Modules'],
      liveLink: '',
      githubLink: '',
      image: 'assets/project_mekar.jpg'
    }
  ];
}
