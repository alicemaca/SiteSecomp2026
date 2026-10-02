import { useState } from "react";
import logoImg from './assets/logo_secomp_2026.svg';
import heroImage from './assets/background.png';
import fundo1 from './assets/fundo_1.png';
import fundo2 from './assets/fundo_2.png';


type IconName =
  | "arrow"
  | "book"
  | "calendar"
  | "chevron"
  | "clock"
  | "code"
  | "cpu"
  | "instagram"
  | "location"
  | "mail"
  | "menu"
  | "monitor"
  | "spark"
  | "users";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11v16H6.5A2.5 2.5 0 0 0 4 21.5v-16Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H13v16h4.5a2.5 2.5 0 0 1 2.5 2.5v-16Z" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  chevron: <path d="m8 10 4 4 4-4" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  code: (
    <>
      <path d="M9 3H7a2 2 0 0 0-2 2v4a3 3 0 0 1-3 3 3 3 0 0 1 3 3v4a2 2 0 0 0 2 2h2M15 3h2a2 2 0 0 1 2 2v4a3 3 0 0 0 3 3 3 3 0 0 0-3 3v4a2 2 0 0 1-2 2h-2" />
    </>
  ),
  cpu: (
    <>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
      <circle cx="12" cy="12" r="2.5" />
      <path d="M9.5 9.5 8 8M14.5 9.5 16 8M9.5 14.5 8 16M14.5 14.5 16 16" />
    </>
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </>
  ),
  spark: <path d="m12 2 1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z" />,
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </>
  ),
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      {iconPaths[name]}
    </svg>
  );
}

function Logo() {
  return (
    <a className="logo" href="#inicio" aria-label="Secomp — início">
      <img 
        src={logoImg}
        alt="Logo Secomp" 
        className="logo-image" 
      />
      <span>secomp</span>
    </a>
  );
}

const schedule = {
  minicursos: [
    {
      date: "13",
      weekday: "Terça",
      image: fundo1,
      items: [
        { time: "13:00 - 14:50", title: "Introdução a programação", tag: "Iniciante" },
        { time: "15:10 - 17:00", title: "introdução a MCP e LLM's", tag: "Prática" },
      ],
    },
    {
      date: "14",
      weekday: "Quarta",
      image: fundo2,
      items: [
        { time: "13:00 - 14:50", title: "Como usar IA do jeito certo no desenvolvimento de software?", tag: "Iniciante" },
        { time: "15:10 - 17:00", title: "introdução ao desenvolvimento de jogos", tag: "Prática" },
      ],
    },
    {
      date: "15",
      weekday: "Quinta",
      image: fundo1,
      items: [
        { time: "13:00 - 14:50", title: "Minicurso AWS", tag: "Iniciante" },
        { time: "15:10 - 17:00", title: "Fluxos de trabalho experimentais na concepção de interfaces do usuário", tag: "Prática" },
      ],
    },
    {
      date: "16",
      weekday: "Sexta",
      image: fundo2,
      items: [
        { time: "13:00 - 14:50", title: "Introdução ao Arduino", tag: "Iniciante" },
        { time: "15:10 - 17:00", title: "Do Preciso Disso ao Deploy: Como uma Necessidade Vira Software", tag: "Prática" },
      ],
    },
  ],
  talks: [
    {
      date: "13",
      weekday: "Terça",
      image: fundo1,
      items: [
        { time: "19:00", title: "IA para além do hype", tag: "Online" },
        { time: "20:00", title: "Carreiras que movem a tecnologia", tag: "Online" },
      ],
    },
    {
      date: "14",
      weekday: "Quarta",
      image: fundo2,
      items: [
        { time: "19:00", title: "Computação, sociedade e futuro", tag: "Online" },
        { time: "20:00", title: "Como começar na pesquisa", tag: "Online" },
      ],
    },
    {
      date: "15",
      weekday: "Quinta",
      image: fundo1,
      items: [
        { time: "19:00", title: "Tecnologia e impacto social", tag: "Online" },
        { time: "20:00", title: "Design também é computação", tag: "Online" },
      ],
    },
    {
      date: "16",
      weekday: "Sexta",
      image: fundo2,
      items: [
        { time: "19:00", title: "O que a máquina aprende?", tag: "Online" },
        { time: "20:00", title: "Encerramento e próximos passos", tag: "Online" },
      ],
    },
  ],
};

const faqs = [
  {
    question: "Preciso ter experiência?",
    answer: "Não! As atividades são destinadas a todos os públicos e foram pensadas para quem quer dar os primeiros passos.",
  },
  {
    question: "Vou receber certificado?",
    answer: "Sim. Os participantes receberão certificados das atividades das quais participarem.",
  },
  {
    question: "Como posso tirar dúvidas?",
    answer: (
      <>
        Escreva para <a href="mailto:secomp@cin.ufpe.br">secomp@cin.ufpe.br</a> ou mande uma mensagem no nosso{" "}
        <a href="https://www.instagram.com/secompufpe" target="_blank" rel="noreferrer">Instagram</a>.
      </>
    ),
  },
];

function SectionIntro({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-intro">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}

function App() {
  const [scheduleType, setScheduleType] = useState<keyof typeof schedule>("minicursos");
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container nav-wrap">
          <Logo />
          <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Navegação principal">
            <a href="#programacao" onClick={() => setMenuOpen(false)}>Programação</a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre o evento</a>
            <a 
              className="nav-cta" 
              href="#inscricao" 
              onClick={() => setMenuOpen(false)}
            >
              Inscreva-se
          </a>
          </nav>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-pattern" aria-hidden="true"
            style={{
              backgroundImage: `url(${heroImage})`, /* 2. Use a variável do import aqui */
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              position: 'absolute',
              inset: 0,
              zIndex: 0,
              opacity: 0.9
            }} 
          />
          
          <div className="container hero-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div className="hero-copy">
              <div className="event-pill"><span />13–16 out · gratuito</div>
              <h1>Secomp <span>2026</span></h1>
              <p className="hero-tagline text-glow-bg">
                A máquina aprende,<br />nós aprendemos <em>o quê?</em>
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#inscricao">
                  Inscreva-se <Icon name="arrow" />
                </a>
                <a className="button button-secondary" href="#sobre">Conheça o evento</a>
              </div>
              <div className="hero-meta">
                <span><Icon name="calendar" />13 a 16 de outubro</span>
                <span><Icon name="location" />CIn-UFPE + online</span>
              </div>
            </div>

            <div className="hero-art" aria-label="Representação visual da Secomp 2026">
              <div className="glass-label label-top"><Icon name="spark" size={16} /> expandir ideias</div>
              <div className="ai-console">
                <div className="console-header">
                  <span /><span /><span />
                  <code>secomp.ai</code>
                </div>
                <div className="console-body">
                  <div className="console-code">
                    <span>machine.learn()</span>
                    <span>human.question()</span>
                    <strong>future.build()</strong>
                  </div>
                  <div className="chip-core">
                    <Icon name="code" size={82} />
                  </div>
                  <div className="console-status"><span /> sistema curioso</div>
                </div>
              </div>
              <div className="glass-label label-bottom"><span className="status-dot" /> novas conexões</div>
              <span className="code-fragment fragment-one">{"{ futuro }"}</span>
              <span className="code-fragment fragment-two">01 / 10</span>
            </div>
          </div>
          <div className="hero-ticker" aria-hidden="true">
            <div>MINICURSOS <span>✦</span> TALKS <span>✦</span> TECNOLOGIA <span>✦</span> CONEXÕES <span>✦</span> MINICURSOS <span>✦</span> TALKS</div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container about-grid">
            <div>
              <SectionIntro eyebrow="01 / Sobre" title="Computação para quem tem curiosidade." />
            </div>
            <div className="about-copy">
              <p>
                A <strong>Secomp</strong> é uma iniciativa gratuita do PET Informática e do CIn-UFPE. O evento busca aproximar o público de temas expressivos da computação por meio de minicursos e talks.
              </p>
              <div className="stat-row">
                <div><strong>4</strong><span>dias de evento</span></div>
                <div><strong>100%</strong><span>gratuito</span></div>
                <div><strong>2</strong><span>formatos</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="schedule section" id="programacao">
          <div className="container">
            <div className="schedule-heading">
              <SectionIntro
                eyebrow="02 / Programação"
                title="Quatro dias para explorar novas possibilidades."
                text="Escolha uma modalidade e confira o que preparamos."
              />
              <div className="segmented" role="tablist" aria-label="Tipo de programação">
                <button
                  role="tab"
                  aria-selected={scheduleType === "minicursos"}
                  className={scheduleType === "minicursos" ? "active" : ""}
                  onClick={() => setScheduleType("minicursos")}
                >
                  <Icon name="book" size={17} /> Minicursos
                </button>
                <button
                  role="tab"
                  aria-selected={scheduleType === "talks"}
                  className={scheduleType === "talks" ? "active" : ""}
                  onClick={() => setScheduleType("talks")}
                >
                  <Icon name="monitor" size={17} /> Talks
                </button>
              </div>
            </div>

            <div className="schedule-grid" role="tabpanel">
              {schedule[scheduleType].map((day) => (
                <article className="day-card" key={day.date}>
                  <header
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${day.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                  <span className="day-number" style={{ color: '#ffffff' }}>
                    {day.date}
                  </span>
    
                  <div>
                    <strong style={{ color: '#ffffff' }}>{day.weekday}</strong>
                    <span style={{ color: 'rgba(255, 255, 255, 0.8)' }}>outubro</span>
                  </div>
                  </header>
                  <div className="day-items">
                    {day.items.map((item) => (
                      <div className="schedule-item" key={item.title}>
                        <div className="time"><Icon name="clock" size={15} />{item.time}</div>
                        <h3>{item.title}</h3>
                        <span className="item-tag">{item.tag}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="audience section">
          <div className="container audience-grid">
            <div className="audience-panel">
              <div className="mini-orbit" aria-hidden="true"><span>+</span></div>
              <span className="panel-kicker">Este evento é para você</span>
              <h2>Não é preciso saber tudo para começar.</h2>
              <p>
                Estudantes do ensino médio, universitários de qualquer área e pessoas iniciantes são muito bem-vindas.
              </p>
              <div className="audience-tags">
                <span>Ensino médio</span><span>Universitários</span><span>Iniciantes</span>
              </div>
            </div>
            <div className="audience-side">
              <Icon name="users" size={30} />
              <p><strong>Conhecimento é melhor quando circula.</strong> Venha aprender, perguntar e encontrar pessoas que também estão começando.</p>
            </div>
          </div>
        </section>

        <section className="location section" id="localizacao">
          <div className="container location-grid">
            <SectionIntro
              eyebrow="03 / Onde"
              title="Do campus para qualquer lugar."
              text="A Secomp acontece em formato híbrido para você participar do jeito que funciona melhor."
            />
            <div className="location-cards">
              <article className="location-card featured">
                <div className="location-icon"><Icon name="location" /></div>
                <span>Minicursos · presencial</span>
                <h3>Centro de Informática<br />da UFPE</h3>
                <p>Av. Jornalista Aníbal Fernandes, Cidade Universitária, Recife.</p>
                <a href="https://maps.google.com/?q=Centro+de+Informática+UFPE" target="_blank" rel="noreferrer">
                  Ver no mapa <Icon name="arrow" size={17} />
                </a>
              </article>
              <article className="location-card">
                <div className="location-icon"><Icon name="monitor" /></div>
                <span>Talks · remoto</span>
                <h3>Ao vivo pelo<br />Google Meet</h3>
                <p>O link de acesso será enviado por e-mail para as pessoas inscritas.</p>
                <div className="online-status"><span /> Participe de onde estiver</div>
              </article>
            </div>
          </div>
        </section>

        <section className="faq section">
          <div className="container faq-grid">
            <SectionIntro eyebrow="04 / FAQ" title="Ainda ficou com alguma dúvida?" text="A gente responde as perguntas mais frequentes." />
            <div className="accordion">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div className={isOpen ? "faq-item open" : "faq-item"} key={faq.question}>
                    <button
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${index}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {faq.question}
                      <i><Icon name="chevron" /></i>
                    </button>
                    <div className="faq-answer" id={`faq-answer-${index}`} hidden={!isOpen}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="cta-section section" id="inscricao">
          <div className="container">
            <div className="cta-panel">
              <div className="cta-grid" aria-hidden="true" />
              <span className="eyebrow light">Inscrições abertas</span>
              <h2>Pronto para aprender mais sobre computação?</h2>
              <p>Quatro dias de troca, prática e novas ideias. Tudo gratuito.</p>
              <a className="button button-accent" href="https://www.sympla.com.br/evento/semana-da-computacao-ufpe-2026/3597214" target="_blank" rel="noreferrer">
                Inscreva-se agora <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-main">
          <div>
            <Logo />
            <p>Semana da Computação<br />13–16 de outubro de 2026</p>
          </div>
          <div className="footer-links">
            <div><span>Realização</span><a href="https://pet.cin.ufpe.br" target="_blank" rel="noreferrer">PET Informática</a><a href="https://portal.cin.ufpe.br" target="_blank" rel="noreferrer">CIn / UFPE</a></div>
            <div><span>Navegue</span><a href="#programacao">Programação</a><a href="#localizacao">Localização</a><a href="#sobre">Sobre</a></div>
            <div><span>Fale com a gente</span><a href="mailto:secomp@cin.ufpe.br"><Icon name="mail" size={17} />secomp@cin.ufpe.br</a><a href="https://www.instagram.com/secompufpe" target="_blank" rel="noreferrer"><Icon name="instagram" size={17} />Instagram</a></div>
          </div>
        </div>
        <div className="container footer-bottom"><span>© 2026 Secomp</span><span>Feito com curiosidade no Recife.</span></div>
      </footer>
    </div>
  );
}

export default App;
