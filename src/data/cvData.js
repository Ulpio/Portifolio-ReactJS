import { projects } from './projects.js';

export const cvData = {
  name: 'Ulpio Netto',
  title: 'Desenvolvedor Backend | Engenheiro de Software',
  /** Headline para preview/scoring em ATS (cargo + tecnologias em uma linha) */
  headline: 'Desenvolvedor Backend · Go (Golang) · Java · AWS · Microsserviços · APIs REST · Kubernetes · Docker · CI/CD',

  summary: [
    'Desenvolvedor Backend e Engenheiro de Software com foco em Go (Golang), Java, APIs REST e arquitetura de microsserviços. Experiência com Docker, Kubernetes, AWS, PostgreSQL e pipelines de CI/CD. Construí backends de plataformas como Registartt e guIA Travel Hub; atuo em projetos como OxeTech, SonorIA e Yes Technology.',
    'Atuação em migração de bases legadas, design de APIs REST e gestão de times (team lead). Stack: Go, Java, Node.js, PostgreSQL, MongoDB, AWS, Docker, Kubernetes, Terraform e práticas de DevOps para entregas seguras e previsíveis.',
  ],

  contact: {
    email: 'ulpionetto0@gmail.com',
    linkedin: 'https://linkedin.com/in/ulpionetto',
    github: 'https://github.com/Ulpio',
  },

  skills: {
    languages: ['Go', 'Java', 'JavaScript', 'TypeScript', 'Python', 'Node.js'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'RDS'],
    frameworks: ['Gin', 'SQLC', 'GORM', 'Spring', 'React', 'FastAPI'],
    devops: ['AWS', 'Docker', 'K8s', 'Terraform', 'Nginx', 'CI/CD'],
  },

  /** Formação acadêmica (curso, instituição, período). */
  education: [
    { degree: 'Ciência da Computação', institution: 'Afya Unima', period: '2026' },
  ],

  /** Experiência profissional: cargo, empresa, período e highlights com palavras-chave para ATS. Ordem: mais recente primeiro. */
  experience: [
    {
      role: 'Desenvolvedor Backend | Engenheiro de Software',
      company: 'Yes Technology',
      period: '2025 – Atual',
      highlights: [
        'Backend em Go (Golang) e Java; APIs REST; microsserviços; Docker e Kubernetes; AWS; CI/CD.',
      ],
    },
    {
      role: 'Desenvolvedor Backend | Engenheiro de Software',
      company: 'Guia',
      period: '2025',
      highlights: [
        'Backend do guIA Travel Hub; APIs REST; Go/Java; PostgreSQL; microsserviços; AWS.',
      ],
    },
    {
      role: 'Desenvolvedor Backend | Engenheiro de Software',
      company: 'Vergo',
      period: '2025',
      highlights: [
        'Desenvolvimento backend; APIs REST; arquitetura de microsserviços; Docker; CI/CD.',
      ],
    },
    {
      role: 'Desenvolvedor Backend | Engenheiro de Software',
      company: 'Registartt',
      period: '2024 – 2025',
      highlights: [
        'Backend da plataforma do zero; Go (Golang); APIs REST; PostgreSQL; Docker; AWS.',
      ],
    },
    {
      role: 'Desenvolvedor Backend | Engenheiro de Software',
      company: 'OxeTech',
      period: '2021 – 2025',
      highlights: [
        'Backend e microsserviços; Go, Java e Node.js; APIs REST; PostgreSQL; Docker; Kubernetes; AWS; CI/CD; atuação como team lead.',
      ],
    },
  ],

  projects: projects.map((p) => ({
    title: p.title,
    description: p.description,
    technologies: p.technologies.map((t) => t.name),
    demoLink: p.demoLink && p.demoLink !== '#' ? p.demoLink : null,
  })),
};
