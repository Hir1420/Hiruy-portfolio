import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend Engineering',
      icon: 'devices',
      summary: 'Responsive component architecture, SSR rendering, and robust state management.',
      items: ['React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 & CSS3', 'Tailwind CSS', 'Angular Material']
    },
    {
      title: 'Backend & System APIs',
      icon: 'dns',
      summary: 'Modular micro-services, RESTful API design, validation schemas, and business logic.',
      items: ['FastAPI (Python)', 'Node.js & Express', 'Laravel (PHP)', 'ASP.NET Core (C#)', 'REST APIs', 'Pydantic v2']
    },
    {
      title: 'AI Development & Safety Workflows',
      icon: 'psychology',
      summary: 'Grounding generative AI into deterministic systems with validation and guardrails.',
      items: ['Google Gemini API', 'Structured Schemas (JSON/Pydantic)', 'Safety Triage Guardrails', 'Heuristic Fallbacks', 'Human-in-the-Loop Controls']
    },
    {
      title: 'Mobile Engineering',
      icon: 'phone_android',
      summary: 'Cross-platform mobile applications with custom UI and native device features.',
      items: ['Flutter', 'Dart', 'Cross-Platform UI', 'State Management', 'Offline Cache', 'Native API Interop']
    },
    {
      title: 'Databases & Data Modeling',
      icon: 'storage',
      summary: 'Relational data modeling, ACID transactions, audit logging, and query performance.',
      items: ['PostgreSQL', 'MySQL', 'Microsoft SQL Server', 'SQLite (WAL Mode)', 'SQLAlchemy 2.0', 'Sequelize ORM']
    },
    {
      title: 'Integrations, DevOps & Tools',
      icon: 'terminal',
      summary: 'Payment gateways, container orchestration, CI/CD, and automated testing.',
      items: ['Telebirr Payment API', 'Chapa Gateway', 'USSD Workflows', 'Docker & Compose', 'Git & GitHub Actions', 'Postman', 'Pytest']
    }
  ];
}
