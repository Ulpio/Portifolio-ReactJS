export const projects = [
  {
    slug: 'registartt',
    title: 'Plataforma Registartt',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
      { name: 'Gin', badge: 'gin-badge' },
      { name: 'SQLC', badge: 'sqlc-badge' },
    ],
    demoLink: '#',
    imageUrl: 'img-registartt.png',
  },
  {
    slug: 'vergo',
    title: 'Vergo',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
      { name: 'Gin', badge: 'gin-badge' },
      { name: 'SQLC', badge: 'sqlc-badge' },
      { name: 'Stripe', badge: 'stripe-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'GitHub Actions', badge: 'github-actions-badge' },
    ],
    demoLink: 'https://github.com/Ulpio/vergo',
    imageUrl: 'Vergo.png',
    external: true,
  },
  {
    slug: 'oxetech',
    title: 'OxeTech',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'JavaScript', badge: 'js-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
    ],
    demoLink: 'https://oxetech.al.gov.br',
    imageUrl: 'oxetechlab.png',
    external: true,
  },
  {
    slug: 'guia',
    title: 'guIA Travel Hub',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'React', badge: 'react-badge' },
      { name: 'Postgres', badge: 'postgres-badge' },
      { name: 'GORM', badge: 'gorm-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'AWS EC2', badge: 'ec2-badge' },
    ],
    demoLink: '#',
    imageUrl: 'guIA.png',
  },
  {
    slug: 'yes',
    title: 'Yes Technology',
    technologies: [
      { name: 'Go', badge: 'go-badge' },
      { name: 'TypeScript', badge: 'ts-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
      { name: 'AWS SQS', badge: 'sqs-badge' },
      { name: 'AWS S3', badge: 's3-badge' },
      { name: 'Kubernetes', badge: 'k8s-badge' },
      { name: 'Terraform', badge: 'terraform-badge' },
    ],
    demoLink: 'https://yes.technology/pt-BR',
    imageUrl: 'yes-technology.jpg',
    external: true,
  },
  {
    slug: 'sonoria',
    title: 'SonorIA',
    technologies: [
      { name: 'Node.js', badge: 'node-badge' },
      { name: 'TypeScript', badge: 'ts-badge' },
      { name: 'Python', badge: 'python-badge' },
      { name: 'FastAPI', badge: 'fastapi-badge' },
      { name: 'Next.js', badge: 'nextjs-badge' },
      { name: 'PostgreSQL', badge: 'postgres-badge' },
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
