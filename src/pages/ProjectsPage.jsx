// src/pages/ProjectsPage.jsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap';
import { projects as allProjects } from '../data/projects';
import './projects-carousel.css';

const ProjectCard = ({ title, description, technologies, features, demoLink, imageUrl, external }) => (
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
      {demoLink === '#' ? null : external ? (
        <a href={demoLink} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
          Ver projeto →
        </a>
      ) : (
        <Link to={demoLink} className="text-decoration-none">
          Ver demonstração interativa →
        </Link>
      )}
    </Card.Body>
  </Card>
);

const calcPerPage = (width) => (width >= 992 ? 3 : width >= 768 ? 2 : 1);

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = useMemo(() => allProjects, []);

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
    const start = headClones;
    setCurrentIndex(start);
    setPage(0);
    const id = requestAnimationFrame(() => scrollToIndex(start, 'auto'));
    return () => cancelAnimationFrame(id);
  }, [headClones, renderList.length]);

  // atualiza "page" (dot) conforme scroll; normaliza tirando os clones
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      const raw = Math.round(track.scrollLeft / track.clientWidth);
      const logical = ((raw - 1) % pages + pages) % pages;
      setPage(logical);
    };

    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [pages]);

  // infinito: quando o scroll termina na zona de clones, reposiciona sem animação (invisível)
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScrollEnd = () => {
      const left = track.scrollLeft;
      const refs = itemRefs.current;
      const firstReal = refs[headClones];
      const lastReal = refs[headClones + projects.length - 1];
      const tailStartEl = refs[headClones + projects.length];
      if (!firstReal || !lastReal || !tailStartEl) return;
      const tailStart = tailStartEl.offsetLeft;
      const realStart = firstReal.offsetLeft;
      const realEnd = lastReal.offsetLeft;
      const threshold = 20;
      if (left >= tailStart - threshold) {
        track.scrollTo({ left: realStart, behavior: 'auto' });
        setCurrentIndex(headClones);
        setPage(0);
      } else if (headClones > 0 && left <= realStart - threshold) {
        track.scrollTo({ left: realEnd, behavior: 'auto' });
        setCurrentIndex(headClones + projects.length - 1);
        setPage(pages - 1);
      }
    };

    const handleScrollEnd = () => requestAnimationFrame(onScrollEnd);

    if ('onscrollend' in window) {
      track.addEventListener('scrollend', handleScrollEnd);
      return () => track.removeEventListener('scrollend', handleScrollEnd);
    }
    let timeoutId;
    const debounced = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScrollEnd, 120);
    };
    track.addEventListener('scroll', debounced, { passive: true });
    return () => {
      clearTimeout(timeoutId);
      track.removeEventListener('scroll', debounced);
    };
  }, [headClones, pages, projects.length]);

  // navegação
  const goToPage = (p) => {
    const normalized = ((p % pages) + pages) % pages;
    const startIdx = headClones + normalized * perPage;
    setCurrentIndex(startIdx);
    scrollToIndex(startIdx);
    setPage(normalized);
  };

  const next = () => {
    const target = currentIndex + 1;
    setCurrentIndex(target);
    scrollToIndex(target);
    // o reposicionamento na zona de clones é feito no scrollend (invisível)
  };

  const prev = () => {
    const target = currentIndex - 1;
    setCurrentIndex(target);
    scrollToIndex(target);
    // o reposicionamento na zona de clones é feito no scrollend (invisível)
  };

  // dots → pula para a página escolhida
  const handleDot = (i) => goToPage(i);

  return (
    <div className="py-5 bg-light">
      <Container>
        <h1 className="text-center fw-bold mb-2">Projetos</h1>
        <p className="text-center text-muted mb-5 mx-auto" style={{ maxWidth: '700px' }}>
          Conheça os principais projetos que desenvolvi utilizando Go, TypeScript, Python e outras tecnologias
          modernas para criar soluções robustas e escaláveis.
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
