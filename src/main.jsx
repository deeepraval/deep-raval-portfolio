import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  X,
  Code2,
  Database,
  Smartphone,
  BrainCircuit,
  ExternalLink,
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  ChevronDown,
  Award,
  Trophy,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "Deep Raval",
  role: "MSc IT Student · Java & Spring Developer",
  intro:
    "I build practical software experiences across Java, Spring Boot, React, Android and data-driven applications. I enjoy turning real-world problems into clean, useful products.",
  location: "India",
  linkedin: "https://www.linkedin.com/in/deep-raval-6448b3319/",
  github: "https://github.com/deeepraval",
  email: "deepraval06012006@gmail.com",
};

const skills = [
  ["Java", "Backend & application development", Code2],
  ["Spring Boot", "REST APIs & web applications", BriefcaseBusiness],
  ["React.js", "Modern responsive interfaces", Code2],
  ["Python", "Programming & data work", BrainCircuit],
  ["SQL / DBMS", "Relational databases", Database],
  ["Android / Java", "Mobile application development", Smartphone],
];

const projects = [
  {
    title: "ZIDIOConnect",
    type: "Spring Boot · Java",
    description:
      "A role-based platform concept connecting students, recruiters and administrators with opportunities, hackathons and supporting workflows.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    accent: "violet",
  },
  {
    title: "Grocery Delivery with AI Shopping",
    type: "MSc IT · SRS Project",
    description:
      "A grocery delivery concept enhanced with recommendation features based on product demand, searches and user preferences.",
    tags: ["AI Recommendation", "DBMS", "SRS", "UX"],
    accent: "cyan",
  },
  {
    title: "Student Report",
    type: "Android · Java",
    description:
      "An Android application for student data and academic reports, including analysis, charts and PDF-oriented reporting workflows.",
    tags: ["Android", "Java", "Charts", "PDF"],
    accent: "orange",
  },
  {
    title: "Real-Time Sentiment Tracker",
    type: "MERN · Learning Project",
    description:
      "A dashboard concept for sentiment tracking with authentication, charts and a polished user experience.",
    tags: ["React", "Node.js", "MongoDB", "JWT"],
    accent: "pink",
  },
];

/* ================================
   ACHIEVEMENTS
================================ */

const achievements = [
  {
    title: "NFSU Cyber Security Entrance",
    value: "Rank 75",
    description:
      "Secured Rank 75 in the NFSU Cyber Security Entrance Examination.",
    icon: Trophy,
    type: "Entrance Achievement",
    accent: "violet",
  },
  {
    title: "DAIICT Entrance Examination",
    value: "AIR 380",
    description:
      "Achieved All India Rank 380 in the DAIICT Entrance Examination.",
    icon: Trophy,
    type: "Entrance Achievement",
    accent: "cyan",
  },
  {
    title: "Generative AI",
    value: "Oracle Certified",
    description:
      "Earned an Oracle certification in Generative AI.",
    icon: Sparkles,
    type: "Oracle Certification",
    accent: "orange",
  },
  {
    title: "Database Management",
    value: "Oracle Certified",
    description:
      "Earned an Oracle certification in Database Management.",
    icon: Database,
    type: "Oracle Certification",
    accent: "pink",
  },
  {
    title: "Cyber Security",
    value: "Oracle Certified",
    description:
      "Earned an Oracle certification in Cyber Security.",
    icon: Award,
    type: "Oracle Certification",
    accent: "green",
  },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const close = () => setMenu(false);

  return (
    <div className="site">
      <div className="noise" />

      {/* ================================
          NAVIGATION
      ================================= */}

      <header className={scrolled ? "nav scrolled" : "nav"}>
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark">DR</span>
          <span>Deep Raval</span>
        </a>

        <nav className={menu ? "nav-links open" : "nav-links"}>
          {[
            "About",
            "Skills",
            "Projects",
            "Achievements",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${ item.toLowerCase() } `}
              onClick={close}
            >
              {item}
            </a>
          ))}

          <a
            className="nav-cta"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <ArrowUpRight size={16} />
          </a>
        </nav>

        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </button>
      </header>

      <main>

        {/* ================================
            HERO
        ================================= */}

        <section id="home" className="hero section">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span className="pulse" />
              Available for learning & opportunities
            </div>

            <h1>
              Building digital
              <br />
              <span>ideas into reality.</span>
            </h1>

            <p>{profile.intro}</p>

            <div className="hero-actions">
              <a href="#projects" className="btn primary">
                Explore my work
                <ArrowUpRight size={18} />
              </a>

              <a href="#contact" className="btn secondary">
                Let's connect
                <Mail size={17} />
              </a>
            </div>

            <div className="social-row">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <span>
                <MapPin size={17} />
                {profile.location}
              </span>
            </div>
          </div>

          <div className="hero-art reveal delay">
            <div className="orb orb-one" />
            <div className="orb orb-two" />

            <div className="code-card">
              <div className="window-bar">
                <i />
                <i />
                <i />
                <span>deep-raval.java</span>
              </div>

              <pre>
                <code>
                  <span className="kw">public class</span>{" "}
                  <span className="name">Developer</span> {"{"}
                  {"\n"}
                  {"  "}
                  <span className="kw">String</span> focus ={" "}
                  <span className="str">"build"</span>;
                  {"\n"}
                  {"  "}
                  <span className="kw">String</span> mindset ={" "}
                  <span className="str">"learn"</span>;
                  {"\n"}
                  {"  "}
                  <span className="kw">boolean</span> curious ={" "}
                  <span className="bool">true</span>;
                  {"\n\n"}
                  {"  "}
                  <span className="kw">void</span>{" "}
                  <span className="fn">create</span>() {"{"}
                  {"\n"}
                  {"    "}solveProblems();
                  {"\n"}
                  {"    "}shipIdeas();
                  {"\n"}
                  {"  "}
                  {"}"}
                  {"\n"}
                  {"}"}
                </code>
              </pre>
            </div>

            <div className="floating-chip chip-one">
              <Code2 size={16} />
              Java
            </div>

            <div className="floating-chip chip-two">
              <Sparkles size={16} />
              Problem Solver
            </div>
          </div>

          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <ChevronDown size={18} />
          </a>
        </section>

        {/* ================================
            ABOUT
        ================================= */}

        <section id="about" className="section about">
          <div className="section-label">01 — About</div>

          <div className="about-grid">
            <div>
              <h2>
                Curious mind.
                <br />
                <em>Practical builder.</em>
              </h2>
            </div>

            <div className="about-copy">
              <p className="lead">
                I'm <strong>Deep Raval</strong>, currently pursuing MSc IT
                and building my foundation as a software developer.
              </p>

              <p>
                My work spans backend development with Java and Spring
                Boot, frontend development with React, mobile development
                with Android, and database-driven applications. I like
                projects where technology has a clear purpose and the
                result is easy for people to use.
              </p>

              <div className="stats">
                <div>
                  <strong>MSc IT</strong>
                  <span>Current program</span>
                </div>

                <div>
                  <strong>Java + Spring</strong>
                  <span>Core focus</span>
                </div>

                <div>
                  <strong>Build · Learn</strong>
                  <span>Mindset</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================================
            SKILLS
        ================================= */}

        <section id="skills" className="section">
          <div className="section-label">02 — Skills</div>

          <div className="section-heading">
            <h2>
              Tools I use to
              <br />
              <em>build things.</em>
            </h2>

            <p>
              A growing toolkit shaped by academic projects, application
              development and continuous learning.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map(([name, desc, Icon]) => (
              <div className="skill-card" key={name}>
                <div className="icon-box">
                  <Icon size={21} />
                </div>

                <h3>{name}</h3>
                <p>{desc}</p>

                <span className="card-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ================================
            PROJECTS
        ================================= */}

        <section id="projects" className="section projects">
          <div className="section-label">03 — Selected Work</div>

          <div className="section-heading">
            <h2>
              Projects with a
              <br />
              <em>purpose.</em>
            </h2>

            <p>
              A selection of academic and personal work. Replace the links
              below with your live demos or GitHub repositories.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((p, i) => (
              <article
                className={`project - card ${ p.accent } `}
                key={p.title}
              >
                <div className="project-top">
                  <span className="project-number">
                    0{i + 1}
                  </span>

                  <ExternalLink size={18} />
                </div>

                <div className="project-visual">
                  <div className="visual-grid" />
                  <span>{p.type}</span>
                </div>

                <div className="project-body">
                  <h3>{p.title}</h3>

                  <p>{p.description}</p>

                  <div className="tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================================
            ACHIEVEMENTS
        ================================= */}

        <section id="achievements" className="section achievements">
          <div className="section-label">
            04 — Achievements
          </div>

          <div className="section-heading">
            <h2>
              Milestones &
              <br />
              <em>certifications.</em>
            </h2>

            <p>
              Academic achievements, entrance examination results and
              professional certifications earned through continuous
              learning.
            </p>
          </div>

          {/* FEATURED NFSU ACHIEVEMENT */}

          <div className="achievement-feature">
            <div className="achievement-feature-icon">
              <Trophy size={28} />
            </div>

            <div>
              <span className="kicker">
                Entrance Achievement
              </span>

              <h3>NFSU Cyber Security Entrance</h3>

              <strong>Rank 75</strong>

              <p>
                Secured Rank 75 in the NFSU Cyber Security Entrance
                Examination.
              </p>
            </div>

            <div className="achievement-feature-side">
              <span>Academic</span>
              <ArrowUpRight size={20} />
            </div>
          </div>

          {/* OTHER ACHIEVEMENTS */}

          <div className="achievement-grid">
            {achievements.slice(1).map((achievement) => {
              const Icon = achievement.icon;

              return (
                <article
                  className={`achievement - card ${ achievement.accent } `}
                  key={achievement.title}
                >
                  <div className="achievement-card-top">
                    <div className="achievement-icon">
                      <Icon size={21} />
                    </div>

                    <span className="achievement-type">
                      {achievement.type}
                    </span>
                  </div>

                  <div className="achievement-content">
                    <h3>{achievement.title}</h3>

                    <strong>{achievement.value}</strong>

                    <p>{achievement.description}</p>
                  </div>

                  <div className="achievement-badge">
                    <Award size={15} />
                    Verified Achievement
                  </div>
                </article>
              );
            })}
          </div>

          {/* ORACLE BADGES */}

          <div className="oracle-badges">
            <div className="oracle-badges-heading">
              <div>
                <span className="kicker">
                  Oracle Certifications
                </span>

                <h3>
                  Three badges. One continuous learning journey.
                </h3>
              </div>

              <div className="badge-count">
                <Award size={18} />
                <span>3 Badges</span>
              </div>
            </div>

            <div className="badge-row">

              {/* Generative AI */}

              <div className="oracle-badge">
                <div className="oracle-badge-icon">
                  <Sparkles size={20} />
                </div>

                <div>
                  <strong>Generative AI</strong>
                  <span>Oracle Certified</span>
                </div>
              </div>

              {/* Database */}

              <div className="oracle-badge">
                <div className="oracle-badge-icon">
                  <Database size={20} />
                </div>

                <div>
                  <strong>Database Management</strong>
                  <span>Oracle Certified</span>
                </div>
              </div>

              {/* Cyber Security */}

              <div className="oracle-badge">
                <div className="oracle-badge-icon">
                  <Award size={20} />
                </div>

                <div>
                  <strong>Cyber Security</strong>
                  <span>Oracle Certified</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================================
            EDUCATION
        ================================= */}

        <section id="education" className="section education">
          <div className="section-label">
            05 — Education
          </div>

          <div className="education-card">
            <div className="edu-icon">
              <GraduationCap size={30} />
            </div>

            <div>
              <span className="kicker">Current</span>

              <h2>
                Master of Science in Information Technology
              </h2>

              <p>
                School of Computer Science · Semester 1
              </p>
            </div>

            <div className="edu-line" />

            <div className="edu-note">
              Focused on software development, databases, data science
              and modern computing.
            </div>
          </div>
        </section>

        {/* ================================
            CONTACT
        ================================= */}

        <section id="contact" className="section contact">
          <div className="contact-panel">
            <div>
              <div className="section-label">
                06 — Contact
              </div>

              <h2>
                Have an idea?
                <br />
                <em>Let's build it.</em>
              </h2>

              <p>
                I'm open to connecting about projects, internships,
                learning opportunities and software development.
              </p>
            </div>

            <div className="contact-actions">
              <a
                className="btn primary big"
                href={`mailto:${ profile.email } `}
              >
                <Mail size={19} />
                {profile.email}
              </a>

              <a
                className="btn secondary big"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={19} />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ================================
          FOOTER
      ================================= */}

      <footer>
        <div className="brand">
          <span className="brand-mark">DR</span>
          <span>Deep Raval</span>
        </div>

        <p>
          Designed & built with curiosity ·{" "}
          {new Date().getFullYear()}
        </p>

        <div className="footer-links">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={17} />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={17} />
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);