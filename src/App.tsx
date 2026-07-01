import { useEffect, useState } from "react";
import "./App.css";

const stats = [
  { value: "4+", label: "featured builds" },
  { value: "1 page", label: "clean portfolio flow" },
  { value: "100%", label: "static-hosting ready" },
];

const codeLines = [
  "import curiosity from 'portfolio'",
  "const profile = new Builder({",
  "  Languages: [ 'C++', 'java', 'GoLang',",
  "       'TypeScript', 'JavaScript', 'PHP'];",
  "  Web Technologies: ['Node.js', 'NestJS', 'React', 'Kafka',",
  "       'Rabbit Mq', 'Express.js', 'REST APIs',' Microservices'];",
  "  Databases: ['PostgreSQL', 'MySQL', 'MongoDB','Redis'];",
  "  Concepts: ['System Design', 'Distributed Systems',",
  "       'BFF Pattern','API Optimization'];",
  "})",
  "",
  "export default profile",
];

const codeScript = codeLines.join("\n");

const skillGroups = [
  {
    title: "Frontend",
    items: ["React", "TypeScript", "Vite", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Go",
      "PHP",
      "Express.js",
      "REST APIs",
      "Microservices",
      "Docker",
    ],
  },
  {
    title: "Databases & Messaging",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "RabbitMQ",
      "AWS",
    ],
  },
  {
    title: "System Design",
    items: [
      "Low-Level Design (LLD)",
      "High-Level Design (HLD)",
      "Distributed Systems",
      "Scalable Architecture",
      "API Design",
    ],
  },
  {
    title: "AI & Developer Tools",
    items: [
      "ChatGPT",
      "GitHub & Copilot",
      "Claude",
      "Codex",
      "Cursor",
      "New Relic",
    ],
  },
];

const timeline = [
  {
    year: "Sep 2025 - Jul 2026",
    title: "Full Stack Developer at Gokwik",
    detail:
      "Worked as a Full-Stack Developer at GoKwik, contributing to checkout enhancements by implementing discounting, partial payment, and Buy Now Pay Later (BNPL) features, improving the overall customer payment experience.",
  },
  {
    year: "Sep 2025 - Jul 2026",
    title: "Software Developer ",
    detail:
      "Worked as a Software Developer at InsuranceDekho, where I built and optimized backend services for insurance journeys, implemented role-based access control (RBAC), and developed scalable microservices to improve platform performance and reliability.",
  },
  {
    year: "Internship",
    title: "EvriKart & Doubtnut",
    detail:
      "At EvriKart Worked as a Frontend Development Intern, developing responsive user interfaces using HTML, CSS, Bootstrap, and JavaScript while collaborating with the team to enhance the user experience. At Doubtnut worked as a content Creator helping students solve IIT_JEE problems",
  },
];

const projects = [
  {
    name: "Portfolio OS",
    status: "Completed",
    summary:
      "A premium personal portfolio featuring a clean hero section, interactive project showcases, and seamless navigation. Designed with a strong focus on UI/UX, responsiveness, and an engaging user experience across all devices. including a Dark and light Theme feature",
    stack: ["React", "TypeScript", "Vite", "UI/UX"],
    liveUrl: "#home",
    codeUrl: "https://github.com/your-username/portfolio-os",
  },
  {
    name: "URL Shortener",
    status: "Ongoing",
    summary:
      "Built a scalable URL Shortener that generates unique short links, tracks analytics, and efficiently redirects users to the original URLs. Designed with a focus on performance, reliability, and a clean, intuitive user experience.",
    stack: [
      "Low-Level Design (LLD)",
      "High-Level Design (HLD)",
      "MySQL",
      "NodeJs",
    ],
    // liveUrl: 'https://example.com',
    // codeUrl: 'https://github.com/your-username/tiny-url-studio',
  },
  {
    name: "Relation Based auth service",
    status: "Ongoing",
    summary:
      "Developed a Role-Based Access System (RBAC) to provide secure authentication and authorization across multiple organizations. Implemented JWT-based authentication, role and permission management, and scalable access control to support multi-tenant applications.",
    stack: ["Frontend", "Static host", "Interaction"],
    // liveUrl: 'https://example.com',
    // codeUrl: 'https://github.com/your-username/tiny-url-studio',
  },
];

const isExternalLink = (href: string) =>
  href.startsWith("http://") || href.startsWith("https://");

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [typedCode, setTypedCode] = useState("");
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });
  const resumeUrl = `https://drive.google.com/file/d/1wCTdV29286XsdQVOInjS7uh1g0OgHf_g/view?usp=sharing`;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateProgress = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      setScrollProgress(Math.min(1, Math.max(0, progress)));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    let index = 0;
    const typingInterval = window.setInterval(() => {
      index += 1;
      setTypedCode(codeScript.slice(0, index));

      if (index >= codeScript.length) {
        window.clearInterval(typingInterval);
      }
    }, 28);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.clearInterval(typingInterval);
    };
  }, []);

  return (
    <div className="page-shell">
      <div className="progress-bar" aria-hidden="true">
        <span style={{ transform: `scaleX(${scrollProgress})` }} />
      </div>

      <header className="topbar">
        <a className="brand" href="#home">
          <span className="brand-mark">H</span>
          <span className="brand-copy">
            <strong>Hemant Singh Adhikari</strong>
            <span>Full-Stack Developer</span>
          </span>
        </a>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          aria-pressed={theme === "dark"}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {theme === "dark" ? "☀" : "☾"}
          </span>
          <span>{theme === "dark" ? "Light mode" : "Dark mode"}</span>
        </button>
      </header>

      <main className="main">
        <section className="hero" id="home">
          <div className="hero-copy reveal">
            <p className="eyebrow">Hemant's Portfolio web</p>
            <h1>
              Clean, premium portfolio design for work that deserves to be taken
              seriously.
            </h1>
            <p className="lede">
              Software Engineer with 3+ years of experience building scalable
              backend systems using Node.js, Go, and cloud technologies.
              Passionate about distributed systems, AI, and clean architecture.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
              >
                View resume
              </a>
              <a className="button button-secondary" href="#contact">
                Contact
              </a>
              <a className="button button-secondary" href="#projects">
                View projects
              </a>
            </div>
          </div>

          <aside className="hero-panel reveal" aria-label="Highlights">
            <div className="hero-card hero-feature">
              <p className="panel-label">Focus</p>
              <strong>
                Restrained visuals, strong hierarchy, subtle motion.
              </strong>
              <span>
                Built for a professional impression on desktop, laptop, and 4K
                ultrawide displays.
              </span>
            </div>

            <div className="hero-grid">
              {stats.map((item) => (
                <article className="metric" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </aside>
        </section>

        {/* <section className="section split" id="about" data-section>
          <div className="section-heading reveal">
            <p className="section-kicker">About</p>
            <h2>Structured like a product page, but still personal.</h2>
          </div>

          <div className="split-grid">
            <p className="reveal">
              This portfolio is designed to feel premium without being flashy.
              The layout stays open, readable, and calm while still giving your
              work enough space to breathe on large screens.
            </p>
            <div className="info-card reveal">
              <h3>What it does well</h3>
              <ul>
                <li>Highlights your story quickly.</li>
                <li>Keeps project links obvious.</li>
                <li>Feels consistent on every screen size.</li>
                <li>Deploys cleanly to GitHub Pages.</li>
              </ul>
            </div>
          </div>
        </section> */}

        <section className="section code-section" id="code">
          <div className="section-heading reveal">
            <p className="section-kicker">About Me</p>
            <h2>A coded identity block with a calm, editorial feel.</h2>
          </div>

          <div className="code-layout">
            <article className="code-window reveal">
              <div className="code-toolbar" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>

              <div className="code-frame">
                <div className="code-meta">
                  <span>Hello, it&apos;s Hemant</span>
                  <span>Portfolio / React / UI Craft</span>
                </div>

                <pre aria-label="Portfolio identity code">
                  <code>
                    {typedCode.split("\n").map((line, index, lines) => {
                      const isLastLine = index === lines.length - 1;
                      const isTypingComplete =
                        typedCode.length === codeScript.length;

                      return (
                        <span key={`${index}-${line}`} className="code-row">
                          <span className="line-number">{index + 1}</span>
                          <span className="line-text">
                            {line || "\u00A0"}
                            {isLastLine && !isTypingComplete ? (
                              <span
                                className="typing-cursor"
                                aria-hidden="true"
                              >
                                |
                              </span>
                            ) : null}
                          </span>
                        </span>
                      );
                    })}
                  </code>
                </pre>
              </div>
            </article>

            <aside className="code-panel reveal">
              <div className="code-card">
                <p className="section-kicker">My Qualification</p>
                <p>
                  I joined IIT Roorkee in 2018 and graduated in 2023 with an
                  Integrated M.Tech (B.Tech + M.Tech) in Geophysical Technology.
                  During my studies, I worked extensively with remote sensing
                  and seismic data, developing strong analytical and
                  data-processing skills. This experience sparked my interest in
                  data-driven problem solving and ultimately led me to pursue a
                  career in software development.
                </p>
              </div>

              <div className="code-card">
                <p className="section-kicker">Location preference</p>
                <p>
                  I am originally from Almora, Uttarakhand, and currently based
                  in Gurugram, India. I am open to relocating for the right
                  opportunity and enjoy working in collaborative, fast-paced
                  environments that foster growth and innovation.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading reveal">
            <p className="section-kicker">Skills</p>
            <h2>Technologies and tools I use to build scalable software.</h2>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group, index) => (
              <article
                className="card reveal"
                key={group.title}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="timeline">
          <div className="section-heading reveal">
            <p className="section-kicker">Timeline</p>
            <h2>A short history of My professional journey.</h2>
          </div>

          <div className="timeline">
            {timeline.map((item, index) => (
              <article
                className="timeline-item reveal"
                key={item.year}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <span className="timeline-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section" id="projects">
          <div className="section-heading reveal">
            <p className="section-kicker">Projects</p>
            <h2> Live Demos and Ongoing Project plans</h2>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className="card project-card reveal"
                key={project.name}
                style={{ animationDelay: `${index * 70}ms` }}
              >
                <div className="project-topline">
                  <span>{project.name}</span>
                  <span className="project-badge">{project.status}</span>
                </div>
                <p>{project.summary}</p>

                <ul className="tag-row" aria-label={`${project.name} stack`}>
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                {(project.liveUrl || project.codeUrl) && (
                  <div className="project-links">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target={
                          isExternalLink(project.liveUrl) ? "_blank" : undefined
                        }
                        rel={
                          isExternalLink(project.liveUrl) ? "noreferrer" : undefined
                        }
                      >
                        Live demo
                      </a>
                    )}

                    {project.codeUrl && (
                      <a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="section-heading reveal">
            <p className="section-kicker">Contact</p>
            <h2>Make the next click obvious.</h2>
          </div>

          <div className="contact-card card reveal">
            <p>
              I'm always open to discussing new opportunities, exciting
              projects, or innovative ideas. Feel free to reach out - I'd be happy
              to connect and collaborate.
            </p>

            <div className="contact-links">
              <a href="mailto:adhikarihemant88@gmail.com">Email</a>
              <a
                href="https://github.com/adhikarihemant88-bot"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/hemant-singh-adhikari-51b761156/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

