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
    phone: '+55 82 9 9811-8668',
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
    en: 'Go · Java · REST APIs · Microservices · AWS · Kubernetes',
    pt: 'Go · Java · APIs REST · Microsserviços · AWS · Kubernetes',
  },

  summary: {
    en: [
      'Software Engineer with 5+ years of experience designing and building REST APIs, microservices, and cloud-native infrastructure. Proficient in Go (Golang), Java, PostgreSQL/MySQL, Docker, Kubernetes, and AWS.',
      'Track record of migrating legacy systems to modern stacks (up to 75% faster response times), leading a backend team, and shipping production systems for enterprise clients. Strong focus on clean architecture, observability, and CI/CD.',
    ],
    pt: [
      'Engenheiro de Software com 5+ anos de experiência projetando e construindo APIs REST, microsserviços e infraestrutura cloud-native. Proficiente em Go (Golang), Java, PostgreSQL/MySQL, Docker, Kubernetes e AWS.',
      'Histórico de migração de sistemas legados para stacks modernas (respostas até 75% mais rápidas), liderança de time de backend e entrega de sistemas em produção para clientes corporativos. Foco em arquitetura limpa, observabilidade e CI/CD.',
    ],
  },

  skills: {
    languages: ['Go (Golang)', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Node.js', 'SQL'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Amazon RDS'],
    frameworks: ['Gin', 'SQLC', 'GORM', 'Spring Boot', 'React', 'FastAPI', 'Next.js'],
    devops: ['AWS (EC2, S3, SQS, SNS, RDS)', 'Docker', 'Kubernetes', 'Terraform', 'Nginx', 'GitHub Actions', 'ArgoCD', 'CI/CD Pipelines'],
    practices: {
      en: ['Microservices Architecture', 'REST API Design', 'Event-Driven Architecture', 'Infrastructure as Code', 'GitOps', 'Observability (OpenTelemetry, Jaeger)', 'Agile / Scrum'],
      pt: ['Arquitetura de Microsserviços', 'Design de APIs REST', 'Arquitetura Orientada a Eventos', 'Infraestrutura como Código', 'GitOps', 'Observabilidade (OpenTelemetry, Jaeger)', 'Ágil / Scrum'],
    },
  },

  education: [
    {
      degree: {
        en: 'Bachelor of Computer Science',
        pt: 'Bacharelado em Ciência da Computação',
      },
      institution: 'Afya Unima',
      period: '2022 – 2026',
    },
  ],

  experience: [
    {
      slug: 'yes',
      company: 'Yes Technology',
      period: '2025 – 2026',
      role: {
        en: 'Backend Developer | Software Engineer',
        pt: 'Desenvolvedor Backend | Engenheiro de Software',
      },
      highlights: {
        en: [
          'Designed and shipped a field-level privacy system (LGPD) that audits 100% of sensitive-data access, with a justified-access flow, masking, and an audit trail in Go, rolled out gradually behind a feature flag',
          'Built an asynchronous report-generation microservice in Go from scratch (PDF/XLS), processing hundreds of reports per month via AWS SQS/SNS, with S3 storage and a TypeScript CLI running on Kubernetes',
          "Implemented object-level access control that met the client's compliance requirement, covering the MySQL schema, business logic, and UUID-traceable error messages, validated by integration tests",
          'Evolved the MySQL master-data layer with dozens of versioned migrations (Objectclass/Relationclass model), fixing referential integrity and translations',
          'Maintained the Kubernetes (Istio) deployment on AWS via Terraform and GitOps (ArgoCD), with distributed tracing (OpenTelemetry/Jaeger) and structured logging',
        ],
        pt: [
          'Projetei e entreguei um sistema de privacidade a nível de campo (LGPD) que audita 100% dos acessos a dados sensíveis, com fluxo de acesso justificado, mascaramento e trilha de auditoria em Go, liberado gradualmente via feature-flag',
          'Criei do zero um microsserviço em Go de geração assíncrona de relatórios (PDF/XLS), processando centenas de relatórios por mês via AWS SQS/SNS, com storage em S3 e um CLI TypeScript rodando em Kubernetes',
          'Implementei controle de acesso a nível de objeto que atendeu a requisito de compliance do cliente, cobrindo schema MySQL, regra de negócio e erros rastreáveis por UUID, validado por testes de integração',
          'Evoluí a camada de master data em MySQL com dezenas de migrations versionadas (modelo Objectclass/Relationclass), corrigindo integridade referencial e traduções',
          'Sustentei o deploy em Kubernetes (Istio) na AWS via Terraform e GitOps (ArgoCD), com tracing distribuído (OpenTelemetry/Jaeger) e logs estruturados',
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
          'Construí motor de geração dinâmica de itinerários integrando APIs externas de turismo e recomendações de IA',
          'Projetei schema PostgreSQL para gestão de usuários multi-perfil (viajantes, agências)',
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
        pt: 'Criador & Desenvolvedor Líder',
      },
      highlights: {
        en: [
          'Created a production-grade SaaS foundation in Go featuring multi-tenancy, RBAC, JWT auth, and Stripe billing, designed as a reusable base for any SaaS product',
          'Implemented secure file handling with AWS S3 presigned URLs and project CRUD with full audit logging',
          'Engineered CI/CD with GitHub Actions, Dependabot, and CodeQL security scanning; open-sourced as a reference architecture',
        ],
        pt: [
          'Criei uma base SaaS production-grade em Go com multi-tenancy, RBAC, auth JWT e billing Stripe, projetada como fundação reutilizável para qualquer produto SaaS',
          'Implementei manipulação segura de arquivos com AWS S3 presigned URLs e CRUD de projetos com audit log completo',
          'Configurei CI/CD com GitHub Actions, Dependabot para atualizações e CodeQL para análise de segurança',
        ],
      },
    },
    {
      slug: 'registartt',
      company: 'Registartt',
      period: '2024 – 2025',
      role: {
        en: 'Backend Developer | Software Engineer',
        pt: 'Desenvolvedor Backend | Engenheiro de Software',
      },
      highlights: {
        en: [
          'Built the platform backend from scratch in Go (Gin, SQLC), delivering a REST API with authentication and authorization',
          'Designed a distributed caching layer and asynchronous task processing to improve throughput',
          'Added structured logging with monitoring dashboards and interactive API documentation',
        ],
        pt: [
          'Construí o backend da plataforma do zero em Go (Gin, SQLC), entregando uma API REST com autenticação e autorização',
          'Projetei uma camada de cache distribuído e processamento assíncrono de tarefas para melhorar o throughput',
          'Adicionei logs estruturados com dashboards de monitoramento e documentação interativa da API',
        ],
      },
    },
    {
      slug: 'oxetech',
      company: 'OxeTech (State Government of Alagoas)',
      period: '2021 – 2025',
      role: {
        en: 'Backend Developer | Team Lead',
        pt: 'Desenvolvedor Backend | Team Lead',
      },
      highlights: {
        en: [
          'Migrated a legacy JavaScript API to Go across 50+ endpoints, achieving up to 75% faster response times, as backend team lead',
          'Led the backend team, coordinating backend, frontend, and DevOps workflows',
          'Designed and maintained services in Go, Java, and Node.js with PostgreSQL and MongoDB',
          'Managed Docker/Kubernetes deployments on AWS with automated CI/CD pipelines',
        ],
        pt: [
          'Migrei uma API legada em JavaScript para Go em 50+ endpoints, alcançando tempos de resposta até 75% mais rápidos, como team lead do backend',
          'Liderei o time de backend, coordenando workflows de backend, frontend e DevOps',
          'Projetei e mantive serviços em Go, Java e Node.js com PostgreSQL e MongoDB',
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
