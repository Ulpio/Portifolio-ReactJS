// src/pages/ProjectsPage.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import './projects-carousel.css';

const ProjectCard = ({ title, description, technologies, features, demoLink, imageUrl }) => (
  <Card className="h-100 project-card">
    {imageUrl && (
      <div className="bg-light" style={{ height: '200px' }}>
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={title}
          style={{ height: '100%', objectFit: 'contain' }}
        />
      </div>
    )}
    <Card.Body>
      <Card.Title as="h3" className="fw-bold mb-2">{title}</Card.Title>
      <Card.Text className="text-muted mb-3">{description}</Card.Text>
      <div className="mb-3">
        {technologies.map((tech, index) => (
          <span key={index} className={`tech-badge ${tech.badge || ''}`}>
            {tech.name}
          </span>
        ))}
      </div>
      <p className="fw-medium mb-2">Características principais:</p>
      <ul className="ps-4 mb-3 text-muted">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <Link to={demoLink} className="text-decoration-none">
        Ver demonstração interativa →
      </Link>
    </Card.Body>
  </Card>
);

const calcPerPage = (width) => (width >= 992 ? 3 : width >= 768 ? 2 : 1);

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = useMemo(() => ([
    {
      title: 'Plataforma Registartt',
      description: 'Desenvolvimento de backend para a plataforma online da Registartt, proporcionando um sistema robusto e escalável para gerenciamento de registros.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'PostgreSQL', badge: 'postgres-badge' },
        { name: 'Gin', badge: 'gin-badge' },
        { name: 'SQLC', badge: 'sqlc-badge' }
      ],
      features: [
        'API RESTful de alta performance',
        'Sistema de autenticação e autorização',
        'Cache distribuído para melhor desempenho',
        'Processamento assíncrono de tarefas',
        'Logs estruturados e monitoramento',
        'Documentação interativa da API'
      ],
      demoLink: '/playground#demo-registartt',
      imageUrl: 'img-registartt.png'
    },
    {
      title: 'Vergo',
      description: 'Boilerplate SaaS open source em Go, com foco em multi-tenant, RBAC, autenticação JWT, integração com Postgres/sqlc, S3 e Stripe. Projetado para demonstrar boas práticas de arquitetura, segurança e CI/CD.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'Postgres', badge: 'postgres-badge' },
        { name: 'Gin', badge: 'gin-badge' },
        { name: 'SQLC', badge: 'sqlc-badge' },
        { name: 'Stripe', badge: 'stripe-badge' },
        { name: 'AWS S3', badge: 's3-badge' },
        { name: 'GitHub Actions', badge: 'github-actions-badge' }
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
      imageUrl: 'Vergo.png'
    },
    {
      title: 'OxeTech',
      description: 'Plataforma do Programa do Governo do Estado de Alagoas, democratizando o acesso ao ensino de tecnologia e desenvolvimento.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'JavaScript', badge: 'js-badge' },
        { name: 'Postgres', badge: 'postgres-badge' }
      ],
      features: [
        'Transcrição da API original de JS para Go',
        'Processamento de dados em tempo real',
        'Diferentes niveis de acesso e lógicas diferentes de negócio',
        'Tempos de resposta até 75% mais velozes',
        'Api organizada e Simples'
      ],
      demoLink: 'https://oxetech.al.gov.br',
      imageUrl: 'oxetechlab.png'
    },
    {
      title: 'guIA Travel Hub',
      description: 'Hub de turismo inteligente que utiliza IA para montar roteiros de viagem personalizados a partir do perfil do viajante.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'React', badge: 'react-badge' },
        { name: 'Postgres', badge: 'postgres-badge' },
        { name: 'GORM', badge: 'sqlc-badge' },
        { name: 'AWS S3', badge: 'docker-badge' },
        { name: 'AWS EC2', badge: 'nginx-badge' }
      ],
      features: [
        'Criação de roteiros dinâmicos com base em preferências e orçamento',
        'Exportação de itinerários completos em PDF',
        'Cadastro e gestão de perfis de viajantes',
        'Sugestões inteligentes de hotéis, restaurantes e atrações',
        'Integração com APIs externas para dados atualizados de turismo',
        'Organização diária do roteiro com dicas locais'
      ],
      demoLink: 'https://guia.ulpiodev.com',
      imageUrl: 'guIA.png'
    },
    {
      title: 'Impulsa Hub',
      description: 'Hub educacional para escolas públicas, privadas e setores públicos.',
      technologies: [
        { name: 'Go', badge: 'go-badge' },
        { name: 'Postgres', badge: 'postgres-badge' },
        { name: 'GORM', badge: 'sqlc-badge' },
        { name: 'MongoDB', badge: 'mongo-badge' },
        { name: 'AWS S3', badge: 'docker-badge' },
        { name: 'AWS EC2', badge: 'nginx-badge' }
      ],
      features: [
        'Arquitetura de microsserviços',
        'Processamento de dados em tempo real',
        'Integrações com APIs de terceiros',
        'Dashboard analítico para métricas de negócios',
        'Sistema de notificações em tempo real',
        'Processamento de dados em lote'
      ],
      demoLink: 'https://guia.ulpiodev.com',
      imageUrl: 'impulsa-placeholder.png'
    }
  ]), []);

  // ----- Carrossel infinito com clones -----
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const [perPage, setPerPage] = useState(1);
  const [pages, setPages] = useState(1);       // nº de páginas reais (sem clones)
  const [page, setPage] = useState(0);         // página real ativa (0..pages-1)
  const [currentIndex, setCurrentIndex] = useState(1); // índice no array renderizado (com clones)

  // medidas / breakpoints
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const recompute = () => {
      const pp = calcPerPage(el.clientWidth);
      setPerPage(pp);
      setPages(Math.ceil(projects.length / pp));
    };

    recompute();
    const ro = new ResizeObserver(recompute);
    ro.observe(el);
    return () => ro.disconnect();
  }, [projects.length]);

  // monta lista com clones de borda conforme perPage
  const { renderList, headClones, tailClones } = useMemo(() => {
    const hc = projects.slice(Math.max(0, projects.length - perPage));
    const tc = projects.slice(0, perPage);
    const list = [...hc, ...projects, ...tc];
    return { renderList: list, headClones: hc.length, tailClones: tc.length };
  }, [projects, perPage]);

  // helper: garante ref por índice
  const setRef = (el, i) => {
    itemRefs.current[i] = el;
  };

  const scrollToIndex = (idx, behavior = 'smooth') => {
    const item = itemRefs.current[idx];
    const track = trackRef.current;
    if (item && track) {
      const left = item.offsetLeft;
      track.scrollTo({ left, behavior });
    }
  };

  // após (re)montagem ou mudança do perPage, posiciona no 1º item real
  useEffect(() => {
    const start = headClones; // primeiro índice real
    setCurrentIndex(start);
    setPage(0);
    // espera pintar o DOM para ter offsetLeft correto
    const id = requestAnimationFrame(() => scrollToIndex(start, 'auto'));
    return () => cancelAnimationFrame(id);
  }, [headClones, renderList.length]);

  // atualiza "page" (dot) conforme scroll; normaliza tirando os clones
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const raw = Math.round(track.scrollLeft / track.clientWidth); // índice "de página" visual
      // normaliza: remove deslocamento dos clones iniciais
      const logical = ((raw - 1) % pages + pages) % pages;
      setPage(logical);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [pages]);

  // navegação
  const goToPage = (p) => {
    const normalized = ((p % pages) + pages) % pages;
    const startIdx = headClones + normalized * perPage;
    setCurrentIndex(startIdx);
    scrollToIndex(startIdx);
    setPage(normalized);
  };

  const next = () => {
    const total = projects.length;
    const lastRealIndex = headClones + total - 1;        // último item real
    const tailAfter = headClones + total + tailClones - 1; // último índice renderizado

    const target = currentIndex + 1;
    setCurrentIndex(target);
    scrollToIndex(target);

    // se entrou na zona de clones do final, após a animação "teleporta" pro começo real
    if (target > lastRealIndex) {
      window.setTimeout(() => {
        const jumpTo = headClones; // primeiro real
        scrollToIndex(jumpTo, 'auto');
        setCurrentIndex(jumpTo);
      }, 350);
    }
  };

  const prev = () => {
    const firstRealIndex = headClones;                 // primeiro real
    const headBefore = headClones - 1;                 // último clone da esquerda
    const lastRealIndex = headClones + projects.length - 1;

    const target = currentIndex - 1;
    setCurrentIndex(target);
    scrollToIndex(target);

    // se entrou na zona de clones do início, após a animação "teleporta" pro fim real
    if (target <= headBefore) {
      window.setTimeout(() => {
        const jumpTo = lastRealIndex; // último real
        scrollToIndex(jumpTo, 'auto');
        setCurrentIndex(jumpTo);
      }, 350);
    }
  };

  // dots → pula para a página escolhida
  const handleDot = (i) => goToPage(i);

  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="text-center fw-bold mb-2">Projetos</h1>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Conheça os principais projetos que desenvolvi utilizando Go, Java e outras tecnologias modernas para
          criar soluções robustas e escaláveis.
        </p>

        <div className="projects-carousel position-relative">
          {/* Botões sempre ativos (loop real, direção preservada) */}
          <button
            type="button"
            className="pc-arrow pc-arrow-left"
            aria-label="Projetos anteriores"
            onClick={prev}
          >
            ‹
          </button>
          <button
            type="button"
            className="pc-arrow pc-arrow-right"
            aria-label="Próximos projetos"
            onClick={next}
          >
            ›
          </button>

          {/* Trilho com clones */}
          <div
            ref={trackRef}
            className="pc-track"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') next();
              if (e.key === 'ArrowLeft') prev();
            }}
          >
            {renderList.map((project, idx) => (
              <div key={idx} className="pc-item" ref={(el) => setRef(el, idx)}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>

          {/* Indicadores (páginas reais) */}
          <div className="pc-dots mt-3">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`pc-dot ${i === page ? 'active' : ''}`}
                aria-label={`Ir para página ${i + 1}`}
                onClick={() => handleDot(i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-5 text-center">
          <h2 className="fw-bold mb-3">Quer ver mais?</h2>
          <p className="text-muted mb-4 mx-auto" style={{ maxWidth: '700px' }}>
            Além destes projetos, trabalho constantemente em novas soluções e contribuições para código aberto.
            Visite meu GitHub para ver mais projetos ou entre em contato para conversarmos sobre colaborações.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Button
              href="https://github.com/Ulpio"
              target="_blank"
              rel="noopener noreferrer"
              variant="dark"
              size="lg"
            >
              Ver GitHub
            </Button>
            <Button as={Link} to="/contato" variant="primary" size="lg">
              Entre em contato
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProjectsPage;
