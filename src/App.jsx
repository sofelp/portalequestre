import { useMemo } from 'react';
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import {
  events,
  news,
  participants,
  results,
  modalities,
  sponsors,
  regulations,
} from './data';

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

function AppShell() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const term = (form.get('search') || '').toString().trim();

    if (!term) {
      navigate('/eventos');
      return;
    }

    const currentPath = location.pathname;
    if (currentPath.startsWith('/noticias')) {
      navigate(`/noticias?search=${encodeURIComponent(term)}`);
      return;
    }

    if (currentPath.startsWith('/participantes')) {
      navigate(`/participantes?search=${encodeURIComponent(term)}`);
      return;
    }

    navigate(`/eventos?search=${encodeURIComponent(term)}`);
  };

  return (
    <div className="page-shell">
      <header className="topbar">
        <Link className="brand" to="/" aria-label="Portal Equestre home">
          <span className="brand-mark">P</span>
          <span>Portal Equestre</span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          <NavLink to="/">Início</NavLink>
          <NavLink to="/eventos">Eventos</NavLink>
          <NavLink to="/resultados">Resultados</NavLink>
          <NavLink to="/noticias">Notícias</NavLink>
          <NavLink to="/modalidades">Modalidades</NavLink>
          <NavLink to="/participantes">Participantes</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </nav>

        <form className="search-box" onSubmit={handleSearch}>
          <input type="search" name="search" placeholder="Buscar eventos, notícias, participantes" aria-label="Buscar conteúdo" />
          <button type="submit">Buscar</button>
        </form>
      </header>

      <Breadcrumbs />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/eventos" element={<EventsPage />} />
        <Route path="/eventos/:eventId" element={<EventDetailPage />} />
        <Route path="/eventos/:eventId/corridas/:raceId" element={<RaceDetailPage />} />
        <Route path="/eventos/:eventId/corridas/:raceId/provas/:proofId" element={<ProofDetailPage />} />
        <Route path="/resultados" element={<ResultsPage />} />
        <Route path="/noticias" element={<NewsPage />} />
        <Route path="/noticias/:newsId" element={<NewsDetailPage />} />
        <Route path="/participantes" element={<ParticipantsPage />} />
        <Route path="/participantes/:participantId" element={<ParticipantDetailPage />} />
        <Route path="/modalidades" element={<ModalitiesPage />} />
        <Route path="/regulamentos" element={<RegulationsPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/patrocinadores" element={<SponsorsPage />} />
        <Route path="/sobre" element={<AboutPage />} />
        <Route path="/contato" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <footer className="footer">
        <p>Portal Equestre</p>
        <a href="mailto:contato@portalequestre.com">contato@portalequestre.com</a>
      </footer>
    </div>
  );
}

function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  if (pathnames.length === 0) {
    return null;
  }

  const labels = {
    eventos: 'Eventos',
    corridas: 'Corridas',
    provas: 'Provas',
    resultados: 'Resultados',
    noticias: 'Notícias',
    participantes: 'Participantes',
    modalidades: 'Modalidades',
    regulamentos: 'Regulamentos',
    galeria: 'Galeria',
    patrocinadores: 'Patrocinadores',
    sobre: 'Sobre',
    contato: 'Contato',
  };

  const crumbs = [{ label: 'Início', to: '/' }];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    crumbs.push({
      label: labels[segment] || segment.replace(/-/g, ' '),
      to: currentPath,
    });
  });

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {crumbs.map((crumb, index) => (
        <span key={crumb.to}>
          {index > 0 && <span className="crumb-separator">›</span>}
          {index === crumbs.length - 1 ? (
            <span className="crumb-current">{crumb.label}</span>
          ) : (
            <Link to={crumb.to}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
}

function HomePage() {
  const latestResults = results.slice(0, 3);
  const topNews = news.slice(0, 3);

  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Portal oficial de competições equestres</p>
          <h1>O palco digital para eventos, provas e resultados.</h1>
          <p className="lead">
            Acompanhe competições, conheça categorias, consulte resultados e descubra o melhor do esporte equestre em um único lugar.
          </p>

          <div className="hero-actions">
            <Link className="primary" to="/eventos">Ver eventos</Link>
            <Link className="secondary" to="/resultados">Resultados</Link>
          </div>

          <ul className="stats" aria-label="Estatísticas do portal">
            <li><strong>24</strong><span>eventos</span></li>
            <li><strong>08</strong><span>provas</span></li>
            <li><strong>340+</strong><span>competidores</span></li>
            <li><strong>18</strong><span>patrocinadores</span></li>
          </ul>
        </div>

        <div className="hero-card" aria-label="Destaque de evento">
          <div className="card-badge">Evento destaque</div>
          <div className="card-visual">
            <div className="horse-scene" aria-hidden="true">
              <span className="sun" />
              <span className="terrain" />
              <span className="horse-body" />
              <span className="horse-head" />
              <span className="horse-leg" />
              <span className="horse-leg" />
              <span className="horse-leg" />
              <span className="horse-leg" />
            </div>
          </div>
          <div className="card-footer">
            <div>
              <strong>Troféu Três Tambores</strong>
              <span>Final da temporada</span>
            </div>
            <span className="status-pill">Ao vivo</span>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Agenda</p>
            <h2>Próximos eventos</h2>
          </div>
          <Link className="text-link" to="/eventos">Ver todos</Link>
        </div>

        <div className="events-grid">
          {events.slice(0, 3).map((event) => (
            <Link key={event.id} className="event-card" to={`/eventos/${event.id}`}>
              <div className="event-topline">
                <span className="tag">{event.category}</span>
                <span className="status">{event.status}</span>
              </div>
              <h3>{event.title}</h3>
              <ul>
                <li>{event.date}</li>
                <li>{event.location}</li>
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="info-panel">
        <div className="panel-copy">
          <p className="eyebrow alt">Experiência de portal</p>
          <h2>Informações claras para público, organizadores e competidores.</h2>
          <p>
            O portal reúne provas, calendário, documentos e classificação em uma interface fácil de navegar, com foco em conteúdo confiável e experiência esportiva moderna.
          </p>
        </div>

        <div className="panel-list">
          {modalities.map((item) => (
            <div key={item.id} className="mini-chip">{item.title}</div>
          ))}
        </div>
      </section>

      <section className="results-section">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Resultados</p>
            <h2>Últimas classificações</h2>
          </div>
          <Link className="text-link" to="/resultados">Ver todas</Link>
        </div>

        <div className="results-table">
          <div className="table-header">
            <span>Posição</span>
            <span>Competidor</span>
            <span>Cavalo</span>
            <span>Tempo</span>
          </div>

          {latestResults.map((item) => (
            <div key={`${item.eventId}-${item.rider}-${item.position}`} className="table-row">
              <span>{item.position}º</span>
              <span>{item.rider}</span>
              <span>{item.horse}</span>
              <span>{item.time}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Notícias</p>
            <h2>Últimas novidades</h2>
          </div>
          <Link className="text-link" to="/noticias">Ver feed</Link>
        </div>

        <div className="news-grid">
          {topNews.map((item) => (
            <Link key={item.id} className="news-card" to={`/noticias/${item.id}`}>
              <span className="news-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="partners">
        <p className="eyebrow alt">Patrocinadores</p>
        <div className="partner-grid">
          {sponsors.map((sponsor) => (
            <span key={sponsor}>{sponsor}</span>
          ))}
        </div>
      </section>
    </main>
  );
}

function EventsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';

  const filteredEvents = useMemo(() => {
    if (!query) return events;
    return events.filter((event) => {
      const text = `${event.title} ${event.location} ${event.category}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Eventos</p>
          <h1>Calendário e competições</h1>
        </div>
      </div>

      <div className="filter-row">
        <span className="filter-pill active">Todos</span>
        <span className="filter-pill">Futuros</span>
        <span className="filter-pill">Em andamento</span>
        <span className="filter-pill">Encerrados</span>
      </div>

      {filteredEvents.length === 0 ? (
        <div className="empty-state">Nenhum evento encontrado para esta busca.</div>
      ) : (
        <div className="event-list">
          {filteredEvents.map((event) => (
            <Link key={event.id} className="event-detail-card" to={`/eventos/${event.id}`}>
              <div className="event-detail-top">
                <span className="tag">{event.category}</span>
                <span className="status">{event.status}</span>
              </div>
              <h2>{event.title}</h2>
              <p>{event.summary}</p>
              <ul>
                <li>{event.date}</li>
                <li>{event.location}</li>
              </ul>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

function EventDetailPage() {
  const { eventId } = useParams();
  const event = events.find((item) => item.id === eventId);

  if (!event) {
    return <NotFoundPage />;
  }

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Evento</p>
          <h1>{event.title}</h1>
        </div>
      </div>

      <section className="detail-hero">
        <div>
          <span className="tag">{event.category}</span>
          <span className="status">{event.status}</span>
        </div>
        <p>{event.description}</p>
        <ul className="meta-list">
          <li><strong>Data:</strong> {event.date}</li>
          <li><strong>Local:</strong> {event.location}</li>
        </ul>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Corridas</p>
            <h2>Etapas da competição</h2>
          </div>
        </div>

        <div className="event-list">
          {event.races.map((race) => (
            <Link key={race.id} className="event-detail-card" to={`/eventos/${event.id}/corridas/${race.id}`}>
              <div className="event-detail-top">
                <span className="status">{race.status}</span>
              </div>
              <h3>{race.title}</h3>
              <p>{race.description}</p>
              <ul>
                <li>{race.date}</li>
                <li>{race.time}</li>
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function RaceDetailPage() {
  const { eventId, raceId } = useParams();
  const event = events.find((item) => item.id === eventId);
  const race = event?.races.find((item) => item.id === raceId);

  if (!event || !race) {
    return <NotFoundPage />;
  }

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Corrida</p>
          <h1>{race.title}</h1>
        </div>
      </div>

      <section className="detail-hero">
        <p>{race.description}</p>
        <ul className="meta-list">
          <li><strong>Evento:</strong> <Link to={`/eventos/${event.id}`}>{event.title}</Link></li>
          <li><strong>Data:</strong> {race.date}</li>
          <li><strong>Horário:</strong> {race.time}</li>
          <li><strong>Status:</strong> {race.status}</li>
        </ul>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Provas</p>
            <h2>Disputas relacionadas</h2>
          </div>
        </div>

        <div className="event-list">
          {race.proofs.map((proof) => (
            <Link key={proof.id} className="event-detail-card" to={`/eventos/${event.id}/corridas/${race.id}/provas/${proof.id}`}>
              <div className="event-detail-top">
                <span className="tag">Prova</span>
              </div>
              <h3>{proof.title}</h3>
              <p>{proof.description}</p>
              <ul>
                <li>{proof.participants.length} participantes</li>
                <li>{proof.results.length} resultados registrados</li>
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProofDetailPage() {
  const { eventId, raceId, proofId } = useParams();
  const event = events.find((item) => item.id === eventId);
  const race = event?.races.find((item) => item.id === raceId);
  const proof = race?.proofs.find((item) => item.id === proofId);

  if (!proof || !event || !race) {
    return <NotFoundPage />;
  }

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Prova</p>
          <h1>{proof.title}</h1>
        </div>
      </div>

      <section className="detail-hero">
        <p>{proof.description}</p>
        <ul className="meta-list">
          <li><strong>Evento:</strong> <Link to={`/eventos/${event.id}`}>{event.title}</Link></li>
          <li><strong>Corrida:</strong> <Link to={`/eventos/${event.id}/corridas/${race.id}`}>{race.title}</Link></li>
        </ul>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Participantes</p>
            <h2>Inscritos</h2>
          </div>
        </div>

        <div className="participant-list">
          {proof.participants.length === 0 ? (
            <div className="empty-state">Ainda não há participantes registrados para esta prova.</div>
          ) : (
            proof.participants.map((participant) => (
              <div key={`${participant.name}-${participant.horse}`} className="mini-card">
                <strong>{participant.name}</strong>
                <span>{participant.horse}</span>
                <em>{participant.status}</em>
                <small>{participant.time}</small>
              </div>
            ))
          )}
        </div>
      </section>

      <section className="results-section">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Resultado</p>
            <h2>Classificação</h2>
          </div>
        </div>

        <div className="results-table">
          <div className="table-header">
            <span>Posição</span>
            <span>Competidor</span>
            <span>Cavalo</span>
            <span>Status</span>
          </div>

          {proof.results.length === 0 ? (
            <div className="empty-state">Resultados ainda não disponíveis para esta prova.</div>
          ) : (
            proof.results.map((item) => (
              <div key={`${item.position}-${item.rider}`} className="table-row">
                <span>{item.position}º</span>
                <span>{item.rider}</span>
                <span>{item.horse}</span>
                <span>{item.status}</span>
              </div>
            ))
          )}
        </div>
      </section>
    </main>
  );
}

function ResultsPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Resultados</p>
          <h1>Classificações e desempenho</h1>
        </div>
      </div>

      <div className="results-note">Dados de demonstração. Resultados fictícios e não oficiais.</div>

      <div className="results-table">
        <div className="table-header">
          <span>Evento</span>
          <span>Prova</span>
          <span>Competidor</span>
          <span>Tempo</span>
          <span>Status</span>
        </div>

        {results.map((item) => (
          <div key={`${item.eventId}-${item.proof}-${item.position}`} className="table-row table-row-wide">
            <span>{item.eventName}</span>
            <span>{item.proof}</span>
            <span>{item.rider}</span>
            <span>{item.time}</span>
            <span>{item.status}</span>
          </div>
        ))}
      </div>
    </main>
  );
}

function NewsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';

  const filteredNews = useMemo(() => {
    if (!query) return news;
    return news.filter((item) => {
      const text = `${item.title} ${item.category} ${item.summary}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Notícias</p>
          <h1>Feed editorial do portal</h1>
        </div>
      </div>

      <div className="filter-row">
        <span className="filter-pill active">Todos</span>
        <span className="filter-pill">Regulamento</span>
        <span className="filter-pill">Competidores</span>
        <span className="filter-pill">Estratégia</span>
      </div>

      {filteredNews.length === 0 ? (
        <div className="empty-state">Nenhuma notícia encontrada.</div>
      ) : (
        <div className="news-grid news-grid-page">
          {filteredNews.map((item) => (
            <Link key={item.id} className="news-card" to={`/noticias/${item.id}`}>
              <span className="news-tag">{item.category}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <small>{item.date}</small>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

function NewsDetailPage() {
  const { newsId } = useParams();
  const article = news.find((item) => item.id === newsId);

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <main className="content-page article-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Notícia</p>
          <h1>{article.title}</h1>
        </div>
      </div>

      <div className="article-meta">
        <span>{article.category}</span>
        <span>{article.date}</span>
      </div>

      <article className="article-body">
        {article.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      {article.relatedEventId && (
        <div className="related-box">
          <strong>Evento relacionado:</strong>
          <Link to={`/eventos/${article.relatedEventId}`}>{events.find((event) => event.id === article.relatedEventId)?.title}</Link>
        </div>
      )}
    </main>
  );
}

function ParticipantsPage() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('search') || '';

  const filteredParticipants = useMemo(() => {
    if (!query) return participants;
    return participants.filter((item) => {
      const text = `${item.name} ${item.horse} ${item.category}`.toLowerCase();
      return text.includes(query.toLowerCase());
    });
  }, [query]);

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Participantes</p>
          <h1>Competidores e cavalos</h1>
        </div>
      </div>

      {filteredParticipants.length === 0 ? (
        <div className="empty-state">Nenhum participante encontrado.</div>
      ) : (
        <div className="participant-grid">
          {filteredParticipants.map((participant) => (
            <Link key={participant.id} className="participant-card" to={`/participantes/${participant.id}`}>
              <div className="avatar">{participant.avatar}</div>
              <strong>{participant.name}</strong>
              <span>{participant.horse}</span>
              <small>{participant.category}</small>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}

function ParticipantDetailPage() {
  const { participantId } = useParams();
  const participant = participants.find((item) => item.id === participantId);

  if (!participant) {
    return <NotFoundPage />;
  }

  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Perfil</p>
          <h1>{participant.name}</h1>
        </div>
      </div>

      <section className="profile-panel">
        <div className="avatar large">{participant.avatar}</div>
        <div>
          <p><strong>Cavalo:</strong> {participant.horse}</p>
          <p><strong>Categoria:</strong> {participant.category}</p>
          <p><strong>Cidade:</strong> {participant.city}</p>
          <p>{participant.bio}</p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-header">
          <div>
            <p className="eyebrow alt">Histórico</p>
            <h2>Participações recentes</h2>
          </div>
        </div>

        <ul className="history-list">
          {participant.history.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}

function ModalitiesPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Modalidades</p>
          <h1>Provas e especialidades</h1>
        </div>
      </div>

      <div className="pattern-grid">
        {modalities.map((item) => (
          <div key={item.id} className="pattern-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link to="/eventos">Ver eventos</Link>
          </div>
        ))}
      </div>
    </main>
  );
}

function RegulationsPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Regulamentos</p>
          <h1>Documentos e orientações</h1>
        </div>
      </div>

      <div className="pattern-grid">
        {regulations.map((item) => (
          <div key={item.title} className="pattern-card">
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

function GalleryPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Galeria</p>
          <h1>Fotos e vídeos</h1>
        </div>
      </div>

      <div className="gallery-grid">
        <div className="gallery-card">Arena principal</div>
        <div className="gallery-card">Percurso</div>
        <div className="gallery-card">Competição</div>
      </div>
    </main>
  );
}

function SponsorsPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Patrocinadores</p>
          <h1>Parceiros do portal</h1>
        </div>
      </div>

      <div className="partner-grid">
        {sponsors.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </main>
  );
}

function AboutPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Sobre</p>
          <h1>Portal Equestre</h1>
        </div>
      </div>

      <div className="article-body">
        <p>
          O Portal Equestre foi pensado para reunir informações, provas e resultados em uma experiência clara para público, competidores e organizadores.
        </p>
        <p>
          Este protótipo é uma demonstração front-end com conteúdo fictício e sem integração com banco de dados ou backend real.
        </p>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main className="content-page">
      <div className="page-header">
        <div>
          <p className="eyebrow alt">Contato</p>
          <h1>Entre em contato</h1>
        </div>
      </div>

      <div className="contact-card">
        <p><strong>Email:</strong> contato@portalequestre.com</p>
        <p><strong>WhatsApp:</strong> (31) 99999-0000</p>
        <p><strong>Local:</strong> Belo Horizonte · Minas Gerais</p>
      </div>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="content-page">
      <div className="empty-state">
        Página não encontrada. Volte para a <Link to="/">home</Link> e continue a navegação.
      </div>
    </main>
  );
}

export default App;
