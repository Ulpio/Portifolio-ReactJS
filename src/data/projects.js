export const projects = [
  {
    title: 'Plataforma Registartt',
    description:
      'Desenvolvimento de backend para a plataforma online da Registartt, proporcionando um sistema robusto e escalável para gerenciamento de registros.',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
      { name: 'Gin', badge: 'gin-badge' },
      { name: 'SQLC', badge: 'sqlc-badge' },
    ],
    features: [
      'API RESTful de alta performance',
      'Sistema de autenticação e autorização',
      'Cache distribuído para melhor desempenho',
      'Processamento assíncrono de tarefas',
      'Logs estruturados e monitoramento',
      'Documentação interativa da API',
    ],
    demoLink: '#',
    imageUrl: 'img-registartt.png',
  },
  {
    title: 'Vergo',
    description:
      'Boilerplate SaaS open source em Go, com foco em multi-tenant, RBAC, autenticação JWT, integração com Postgres/sqlc, S3 e Stripe. Projetado para demonstrar boas práticas de arquitetura, segurança e CI/CD.',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
      { name: 'Gin', badge: 'gin-badge' },
      { name: 'SQLC', badge: 'sqlc-badge' },
      { name: 'Stripe', badge: 'stripe-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'GitHub Actions', badge: 'github-actions-badge' },
    ],
    features: [
      'Autenticação JWT (login, signup, refresh)',
      'RBAC (controle de acesso baseado em papéis)',
      'Multi-tenant (isolamento de organizações)',
      'Integração com AWS S3 via presigned URLs',
      'Integração com Stripe para billing',
      'CRUD de projetos com audit log',
      'CI/CD com GitHub Actions (build + test)',
      'Dependabot e CodeQL para segurança e atualização',
    ],
    demoLink: 'https://github.com/Ulpio/vergo',
    imageUrl: 'Vergo.png',
    external: true,
  },
  {
    title: 'OxeTech',
    description:
      'Plataforma do Programa do Governo do Estado de Alagoas, democratizando o acesso ao ensino de tecnologia e desenvolvimento.',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'JavaScript', badge: 'js-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
    ],
    features: [
      'Transcrição da API original de JS para Go',
      'Processamento de dados em tempo real',
      'Diferentes níveis de acesso e lógicas de negócio',
      'Tempos de resposta até 75% mais velozes',
      'API organizada e de fácil manutenção',
    ],
    demoLink: 'https://oxetech.al.gov.br',
    imageUrl: 'oxetechlab.png',
    external: true,
  },
  {
    title: 'guIA Travel Hub',
    description:
      'Hub de turismo inteligente que utiliza IA para montar roteiros de viagem personalizados a partir do perfil do viajante.',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'React', badge: 'react-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
      { name: 'GORM', badge: 'gorm-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'AWS EC2', badge: 's3-badge' },
    ],
    features: [
      'Criação de roteiros dinâmicos com base em preferências e orçamento',
      'Exportação de itinerários completos em PDF',
      'Cadastro e gestão de perfis de viajantes',
      'Sugestões inteligentes de hotéis, restaurantes e atrações',
      'Integração com APIs externas para dados atualizados de turismo',
      'Organização diária do roteiro com dicas locais',
    ],
    demoLink: '#',
    imageUrl: 'guIA.png',
  },
  {
    title: 'Yes Technology',
    description:
      'Plataforma corporativa de microsserviços em Go para geração de relatórios (PDF/XLS) integrada a um motor BPMN, com arquitetura distribuída e deploy automatizado em Kubernetes na AWS.',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'TypeScript', badge: 'ts-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
      { name: 'AWS SQS', badge: 's3-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'Kubernetes', badge: 'k8s-badge' },
      { name: 'Terraform', badge: 'terraform-badge' },
    ],
    features: [
      'Motor BPMN para orquestração de processos de negócio',
      'Geração assíncrona de relatórios em PDF e XLS',
      'Comunicação entre microsserviços via AWS SQS/SNS',
      'Armazenamento de artefatos em AWS S3',
      'Deploy em Kubernetes via ArgoCD (GitOps)',
      'Infraestrutura como código com Terraform',
      'Observabilidade com OpenTelemetry e Jaeger',
    ],
    demoLink: 'https://yes.technology/pt-BR',
    imageUrl: 'Yes Full.jpg',
    external: true,
  },
  {
    title: 'SonorIA',
    description:
      'Plataforma web com IA para análise automatizada de exames eletrofisiológicos auditivos (PEATE, PEAC, VEMP), auxiliando profissionais de saúde na tomada de decisão clínica.',
    technologies: [
      { name: 'Node.js', badge: 'node-badge' },
      { name: 'TypeScript', badge: 'ts-badge' },
      { name: 'Python', badge: 'python-badge' },
      { name: 'FastAPI', badge: 'fastapi-badge' },
      { name: 'Next.js', badge: 'react-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
    ],
    features: [
      'Análise automatizada de exames auditivos com IA (modelo CRNN)',
      'Upload e processamento de arquivos de exame (.txt)',
      'Marcação de picos e ondas manual e assistida por IA',
      'Visualização interativa de formas de onda',
      'Autenticação com perfis (profissional, estudante, professor)',
      'Migração de dados de sistemas legados (EPWin)',
    ],
    demoLink: 'https://sonoria.com.br',
    imageUrl: 'Sonoria.png',
    external: true,
  },
];

const FEATURED_TITLES = ['Vergo', 'Plataforma Registartt', 'Yes Technology'];
export const previewProjects = FEATURED_TITLES.map(
  (title) => projects.find((p) => p.title === title)
).filter(Boolean);
