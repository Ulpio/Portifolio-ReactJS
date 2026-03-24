import { projects } from './projects.js';

/**
 * CV data centralised for PDF generation.
 * All text-heavy fields use i18n keys resolved at render time.
 * Only structural / language-independent data lives here.
 */

export const cvData = {
  name: 'Ulpio Netto',

  contact: {
    email: 'ulpionetto0@gmail.com',
    phone: '',
    location: { en: 'Brazil', pt: 'Brasil' },
    linkedin: 'https://linkedin.com/in/ulpionetto',
    linkedinShort: 'linkedin.com/in/ulpionetto',
    github: 'https://github.com/Ulpio',
    githubShort: 'github.com/Ulpio',
    website: 'https://ulpionetto.dev',
  },

  title: {
    en: 'Backend Developer | Software Engineer',
    pt: 'Desenvolvedor Backend | Engenheiro de Software',
  },

  headline: {
    en: 'Go \u00b7 Java \u00b7 REST APIs \u00b7 Microservices \u00b7 AWS \u00b7 Kubernetes',
    pt: 'Go \u00b7 Java \u00b7 APIs REST \u00b7 Microsservi\u00e7os \u00b7 AWS \u00b7 Kubernetes',
  },

  summary: {
    en: [
      'Software Engineer with 5+ years of experience designing and building high-throughput REST APIs, microservices architectures, and cloud-native infrastructure. Proficient in Go (Golang), Java, PostgreSQL, Docker, Kubernetes, and AWS.',
      'Proven track record of migrating legacy systems to modern stacks (achieving up to 75% faster response times), leading cross-functional teams, and shipping production systems serving 50k+ users. Strong focus on clean architecture, observability, and CI/CD best practices.',
    ],
    pt: [
      'Engenheiro de Software com 5+ anos de experi\u00eancia projetando e construindo APIs REST de alta performance, arquiteturas de microsservi\u00e7os e infraestrutura cloud-native. Proficiente em Go (Golang), Java, PostgreSQL, Docker, Kubernetes e AWS.',
      'Hist\u00f3rico comprovado em migra\u00e7\u00e3o de sistemas legados para stacks modernas (alcan\u00e7ando tempos de resposta at\u00e9 75% mais r\u00e1pidos), lideran\u00e7a de times multidisciplinares e entrega de sistemas em produ\u00e7\u00e3o servindo 50k+ usu\u00e1rios. Foco em arquitetura limpa, observabilidade e pr\u00e1ticas de CI/CD.',
    ],
  },

  skills: {
    languages: ['Go (Golang)', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'SQL'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Amazon RDS'],
    frameworks: ['Gin', 'SQLC', 'GORM', 'Spring Boot', 'React', 'FastAPI', 'Next.js'],
    devops: ['AWS (EC2, S3, SQS, SNS, RDS)', 'Docker', 'Kubernetes', 'Terraform', 'Nginx', 'GitHub Actions', 'ArgoCD', 'CI/CD Pipelines'],
    practices: {
      en: ['Microservices Architecture', 'REST API Design', 'Event-Driven Architecture', 'Infrastructure as Code', 'GitOps', 'Observability (OpenTelemetry, Jaeger)', 'Agile / Scrum'],
      pt: ['Arquitetura de Microsservi\u00e7os', 'Design de APIs REST', 'Arquitetura Orientada a Eventos', 'Infraestrutura como C\u00f3digo', 'GitOps', 'Observabilidade (OpenTelemetry, Jaeger)', '\u00c1gil / Scrum'],
    },
  },

  education: [
    {
      degree: {
        en: 'Bachelor of Computer Science',
        pt: 'Bacharelado em Ci\u00eancia da Computa\u00e7\u00e3o',
      },
      institution: 'Afya Unima',
      period: '2022 \u2013 2026',
    },
  ],

  experience: [
    {
      slug: 'yes',
      company: 'Yes Technology',
      period: '2025 \u2013 Present',
      role: {
        en: 'Backend Developer | Software Engineer',
        pt: 'Desenvolvedor Backend | Engenheiro de Software',
      },
      highlights: {
        en: [
          'Designed and built microservices in Go for PDF/XLS report generation integrated with a BPMN engine, handling 1000+ daily reports',
          'Implemented event-driven communication via AWS SQS/SNS across distributed services',
          'Deployed services on Kubernetes via ArgoCD (GitOps) with Terraform-managed infrastructure',
          'Established observability stack with OpenTelemetry and Jaeger, reducing incident resolution time by 40%',
        ],
        pt: [
          'Projetei e constru\u00ed microsservi\u00e7os em Go para gera\u00e7\u00e3o de relat\u00f3rios PDF/XLS integrados a motor BPMN, processando 1000+ relat\u00f3rios di\u00e1rios',
          'Implementei comunica\u00e7\u00e3o orientada a eventos via AWS SQS/SNS entre servi\u00e7os distribu\u00eddos',
          'Deploy de servi\u00e7os em Kubernetes via ArgoCD (GitOps) com infraestrutura gerenciada por Terraform',
          'Estabeleci stack de observabilidade com OpenTelemetry e Jaeger, reduzindo tempo de resolu\u00e7\u00e3o de incidentes em 40%',
        ],
      },
    },
    {
      slug: 'guia',
      company: 'guIA Travel Hub',
      type: { en: 'Freelance', pt: 'Freelance' },
      period: '2025',
      role: {
        en: 'Freelance Backend Developer',
        pt: 'Desenvolvedor Backend Freelance',
      },
      highlights: {
        en: [
          'Hired to architect and deliver the MVP backend in Go/Java for an AI-powered travel itinerary platform',
          'Built dynamic itinerary generation engine integrating external tourism APIs and AI recommendations',
          'Designed PostgreSQL schema for multi-profile user management (travelers, agencies)',
          'Deployed on AWS EC2 with S3 for asset storage and automated CI/CD pipelines',
        ],
        pt: [
          'Contratado para arquitetar e entregar o MVP backend em Go/Java para plataforma de roteiros de viagem com IA',
          'Constru\u00ed motor de gera\u00e7\u00e3o din\u00e2mica de itiner\u00e1rios integrando APIs externas de turismo e recomenda\u00e7\u00f5es de IA',
          'Projetei schema PostgreSQL para gest\u00e3o de usu\u00e1rios multi-perfil (viajantes, ag\u00eancias)',
          'Deploy em AWS EC2 com S3 para armazenamento de assets e pipelines CI/CD automatizados',
        ],
      },
    },
    {
      slug: 'vergo',
      company: 'Vergo',
      type: { en: 'Personal Project', pt: 'Projeto Pessoal' },
      period: '2025',
      role: {
        en: 'Creator & Lead Developer',
        pt: 'Criador & Desenvolvedor L\u00edder',
      },
      highlights: {
        en: [
          'Created a production-grade SaaS foundation in Go featuring multi-tenancy, RBAC, JWT auth, and Stripe billing — designed as a reusable base for any SaaS product',
          'Implemented secure file handling with AWS S3 presigned URLs and project CRUD with full audit logging',
          'Engineered CI/CD with GitHub Actions, Dependabot, and CodeQL security scanning; open-sourced as a reference architecture',
        ],
        pt: [
          'Criei uma base SaaS production-grade em Go com multi-tenancy, RBAC, auth JWT e billing Stripe — projetada como fundação reutilizável para qualquer produto SaaS',
          'Implementei manipula\u00e7\u00e3o segura de arquivos com AWS S3 presigned URLs e CRUD de projetos com audit log completo',
          'Configurei CI/CD com GitHub Actions, Dependabot para atualiza\u00e7\u00f5es e CodeQL para an\u00e1lise de seguran\u00e7a',
        ],
      },
    },
    {
      slug: 'registartt',
      company: 'Registartt',
      period: '2024 \u2013 2025',
      role: {
        en: 'Backend Developer | Software Engineer',
        pt: 'Desenvolvedor Backend | Engenheiro de Software',
      },
      highlights: {
        en: [
          'Built the entire backend from scratch in Go (Gin + SQLC), delivering a high-performance RESTful API',
          'Designed authentication/authorization system and distributed caching layer for improved throughput',
          'Implemented asynchronous task processing and structured logging with monitoring dashboards',
          'Created interactive API documentation enabling seamless frontend integration',
        ],
        pt: [
          'Constru\u00ed todo o backend do zero em Go (Gin + SQLC), entregando API RESTful de alta performance',
          'Projetei sistema de autentica\u00e7\u00e3o/autoriza\u00e7\u00e3o e camada de cache distribu\u00eddo para melhor throughput',
          'Implementei processamento ass\u00edncrono de tarefas e logs estruturados com dashboards de monitoramento',
          'Criei documenta\u00e7\u00e3o interativa da API possibilitando integra\u00e7\u00e3o seamless com frontend',
        ],
      },
    },
    {
      slug: 'oxetech',
      company: 'OxeTech (State Government of Alagoas)',
      period: '2021 \u2013 2025',
      role: {
        en: 'Backend Developer | Team Lead',
        pt: 'Desenvolvedor Backend | Team Lead',
      },
      highlights: {
        en: [
          'Migrated legacy JavaScript API to Go, achieving 75% faster response times and improved maintainability',
          'Led a cross-functional team of 5+ developers, coordinating backend, frontend, and DevOps workflows',
          'Designed and maintained microservices in Go, Java, and Node.js with PostgreSQL and MongoDB',
          'Managed Docker/Kubernetes deployments on AWS with automated CI/CD pipelines',
        ],
        pt: [
          'Migrei API legada em JavaScript para Go, alcan\u00e7ando tempos de resposta 75% mais r\u00e1pidos e melhor manutenibilidade',
          'Liderei time multidisciplinar de 5+ devs, coordenando workflows de backend, frontend e DevOps',
          'Projetei e mantive microsservi\u00e7os em Go, Java e Node.js com PostgreSQL e MongoDB',
          'Gerenciei deploys Docker/Kubernetes na AWS com pipelines CI/CD automatizados',
        ],
      },
    },
  ],

  languages: [
    { lang: { en: 'Portuguese', pt: 'Português' }, level: { en: 'Native', pt: 'Nativo' } },
    { lang: { en: 'English', pt: 'Inglês' }, level: { en: 'Fluent', pt: 'Fluente' } },
    { lang: { en: 'Mandarin Chinese', pt: 'Mandarim' }, level: { en: 'Beginner (studying)', pt: 'Iniciante (estudando)' } },
  ],

  projects: projects.map((p) => ({
    title: p.title,
    slug: p.slug,
    technologies: p.technologies.map((t) => t.name),
    demoLink: p.demoLink && p.demoLink !== '#' ? p.demoLink : null,
  })),
};
