import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  // Flagship AI & Full-Stack Featured Project
  flagshipProject = {
    title: 'PitStop AI',
    tagline: 'Autonomous Workshop Operations Platform',
    category: 'AI-Powered System · Full-Stack Architecture',
    role: 'Creator & Lead Architect',
    githubLink: 'https://github.com/Hir1420/PitStop-AI',
    problem: 'Independent automotive workshops struggle with chaotic customer intake, manual labor/parts estimates, conflicting technician skill dispatch, bay double-bookings, and fragmented communication.',
    solution: 'An end-to-end operations platform combining Gemini-powered conversational intake, safety-aware triage, and deterministic business rules for constraint-based scheduling, parts delta inventory, and customer authorization.',
    keyFeatures: [
      {
        title: 'Gemini AI Intake & Safety Guardrails',
        detail: 'Translates unstructured customer complaints into validated vehicle and symptom parameters. Critical mechanical symptoms (spongy brakes, burning smells, fluid leaks) trigger cautious safety escalation advisories without claiming autonomous mechanical diagnosis.'
      },
      {
        title: 'Deterministic Constraint Scheduling',
        detail: 'Computes conflict-free appointment slots strictly matching technician skill certifications (e.g., brake-certified), hydraulic bay lift capacity, and operating hours. Enforces idempotency keys to prevent double-booking on client retries.'
      },
      {
        title: 'Human-in-the-Loop Work-Orders & Estimates',
        detail: 'Calculates labor rates ($95/hr) and parts totals into draft estimates. Enforces strict human approval controls—estimates remain in draft status until explicitly authorized by a certified service advisor.'
      },
      {
        title: 'Vehicle Owner Portal & Email Outbox',
        detail: 'Passwordless email OTP verification (15-min expiration), 5-stage live repair progression tracker, and event-driven transactional HTML emails for appointment confirmation and digital quote approval.'
      },
      {
        title: 'External Integrations & Resilience',
        detail: 'Connects to Open-Meteo API for real-time weather advisories (paint curing/road testing), Google Calendar sync with bounded retry failure recovery, and an immutable audit trail for every mutation.'
      }
    ],
    tech: [
      'FastAPI (Python 3.12+)',
      'Next.js 14 (App Router)',
      'TypeScript',
      'Tailwind CSS',
      'Google Gemini API',
      'PostgreSQL 16 / SQLite WAL',
      'SQLAlchemy 2.0',
      'Pydantic v2',
      'Docker & Compose',
      'Pytest Automated Tests'
    ]
  };

  // Core Engineering & Production Projects
  projects = [
    {
      title: 'AfroMekina — Automotive Marketplace',
      role: 'Lead Developer',
      company: 'Loom Solutions (Remote Contract)',
      systemType: 'Commercial Automotive Marketplace',
      problem: 'Need for a unified digital platform connecting vehicle buyers, private sellers, commercial dealerships, rental agencies, and spare parts suppliers across Ethiopia.',
      contribution: 'Architected the cross-platform Flutter mobile client and SSR-optimized Next.js web application. Developed modular Laravel REST APIs handling normalized vehicle catalogs, multi-criteria search filtering, image asset uploads, and direct buyer-seller inquiries.',
      engineeringDecisions: [
        'Built unified data models distinguishing vehicle sales, commercial rentals, and spare parts catalogs across both web and mobile.',
        'Engineered responsive search filters with debounced query optimization for efficient API execution on lower-bandwidth networks.'
      ],
      tech: ['Flutter', 'Dart', 'Next.js', 'React', 'TypeScript', 'Laravel', 'PHP', 'MySQL', 'REST APIs'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Addis Ababa Land Management System',
      role: 'Full-Stack Developer',
      company: 'XOKA IT Solutions PLC',
      systemType: 'Mission-Critical Government System',
      problem: 'High-consequence land registry bureau required digitizing physical ownership records, title transfers, boundary documentation, and substitutions to eliminate fraud and administrative overhead.',
      contribution: 'Engineered secure Angular enterprise modules and ASP.NET Core backend services. Implemented strict role-based access control (RBAC), multi-step officer approval workflows, and tamper-evident audit logging for civic title actions.',
      engineeringDecisions: [
        'Enforced ACID transaction boundaries and comprehensive audit tables in SQL Server to ensure non-repudiation of government land deed modifications.',
        'Designed intuitive multi-step form wizards in Angular with client and server schema validation to prevent submission errors.'
      ],
      tech: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'SQL Server', 'REST APIs', 'RBAC Security'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Federal Houses Corporation ERP',
      role: 'Full-Stack Developer',
      company: 'XOKA IT Solutions PLC',
      systemType: 'Government Enterprise Resource Planning',
      problem: 'National corporation required an integrated ERP platform to manage thousands of government housing properties, tenant lease agreements, maintenance work orders, and billing.',
      contribution: 'Developed ERP modules in Angular and ASP.NET Core covering asset inventory, tenant lease lifecycle tracking, scheduled property valuations, and automated monthly billing generation.',
      engineeringDecisions: [
        'Optimized complex relational SQL Server stored procedures and indexed queries to ensure instant dashboard telemetry across large historical lease datasets.',
        'Structured modular Angular Material components for consistent enterprise layout across billing, tenancy, and maintenance subsystems.'
      ],
      tech: ['Angular', 'ASP.NET Core', 'C#', 'SQL Server', 'Angular Material', 'REST APIs'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Bone Pay — Payment & USSD Integration',
      role: 'Mobile & Integration Engineer',
      company: 'XOKA IT Solutions PLC',
      systemType: 'Fintech & Payment Integration Client',
      problem: 'Need for reliable digital checkout workflows that remain operable even when internet connectivity is intermittent or unavailable for retail customers.',
      contribution: 'Engineered a Flutter mobile payment application integrating Telebirr mobile wallet APIs for direct digital settlements, and researched/prototyped sequential USSD menu state machine interactions as a resilient offline fallback mechanism.',
      engineeringDecisions: [
        'Implemented rigorous API response parsing and idempotency controls for Telebirr digital transaction confirmations.',
        'Experimented with sequential USSD session handling to model step-by-step payment flows when cellular data service is absent.'
      ],
      tech: ['Flutter', 'Dart', 'Telebirr API', 'USSD Protocol Workflows', 'ASP.NET Core', 'REST APIs'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Mekar — Mentorship & Consultation Platform',
      role: 'Software Developer',
      company: 'Axis Marketing Services (Remote Contract)',
      systemType: 'Web Platform & Consultation API',
      problem: 'Platform required coordination between mentors and mentees with role-specific dashboards, time-slot scheduling, and session booking lifecycles.',
      contribution: 'Engineered modular REST endpoints in Node.js and Express with Sequelize ORM for advisor profiles, slot booking, and session status tracking. Built the interactive React dashboard for scheduling workflows and localized time management.',
      engineeringDecisions: [
        'Designed database schemas in MySQL with relational constraints to prevent double-booking of mentor calendar slots.',
        'Separated mentee and advisor authorization roles into clean JWT-validated Express middleware.'
      ],
      tech: ['React', 'Next.js', 'Node.js', 'Express.js', 'Sequelize ORM', 'MySQL', 'REST APIs'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Amenye E-Commerce & Merchant Platform',
      role: 'Software Developer',
      company: 'Axis Marketing Services (Remote Contract)',
      systemType: 'Digital Commerce & Localized Checkout',
      problem: 'Commercial retail shopping portal requiring localized digital checkout, cart validation, vendor inventory management, and fast customer load times.',
      contribution: 'Developed responsive Next.js/React storefront interfaces, cart state persistence, and integrated Chapa payment gateway for seamless digital transactions with automated webhook verification.',
      engineeringDecisions: [
        'Implemented secure server-side webhook signature verification for Chapa transaction events before mutating order fulfillment statuses.',
        'Optimized client-side bundle size and image loading for high-conversion mobile shopper experiences.'
      ],
      tech: ['Next.js', 'React', 'Node.js', 'Express.js', 'Chapa Payment Gateway', 'MySQL'],
      githubLink: '',
      liveLink: ''
    },
    {
      title: 'Custom Enterprise CRM Platform',
      role: 'Software Developer',
      company: 'Axis Marketing Services (Remote Contract)',
      systemType: 'Internal Operations & Pipeline CRM',
      problem: 'Cosmetics and commercial distributor required an internal CRM engine to organize incoming client leads, track distributor pipelines, and log customer service history.',
      contribution: 'Built a customized CRM web application using Laravel and React, featuring deal stage progression, customer interaction logs, automated reminder tasks, and team reporting dashboards.',
      engineeringDecisions: [
        'Designed relational customer interaction schemas in MySQL allowing fast search by company, contact person, or deal phase.',
        'Structured role-based permission tiers ensuring sales reps only access assigned accounts while managers view aggregated telemetry.'
      ],
      tech: ['Laravel', 'PHP', 'React', 'Tailwind CSS', 'MySQL', 'REST APIs'],
      githubLink: '',
      liveLink: ''
    }
  ];
}
