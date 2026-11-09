import React, { useEffect, useState } from 'react';
import {
  AlertCircle, ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BriefcaseBusiness,
  CheckCircle2, Code2, Download, ExternalLink, GraduationCap, Laptop, Loader2,
  Mail, MapPin, Menu, MonitorCog, Palette, Send, ShieldCheck, X, Wrench, Utensils, Youtube, QrCode,
  ZoomIn, ChevronLeft, ChevronRight
} from 'lucide-react';
import { designs, galleryCategories } from './data/gallery.js';

// ---- Contact configuration (single place to edit) -------------------------
const CONTACT_EMAIL = 'kingsson128@gmail.com';
const WHATSAPP_NUMBER = '254795163826'; // international format, no "+" or spaces
const WHATSAPP_MESSAGE = 'Hello Michael, I visited your portfolio and would like to discuss a project or opportunity with you.';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mjgwwvva';

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

const projects = [
  {
    number: '01',
    artCode: 'EDU_PLATFORM',
    name: 'KINGTECH EDU',
    liveUrl: 'https://kingtech-edu.vercel.app/',
    type: 'Education platform · Web application',
    status: 'Completed',
    statusClass: 'completed',
    footerLabel: 'Completed project',
    description: 'An educational resource platform for downloadable technology notes and selected past papers, with resource management and a payment-oriented purchase workflow.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: GraduationCap,
    accent: 'mint'
  },
  {
    number: '02',
    artCode: 'EVENT_SYSTEM',
    name: 'MUST GOT TALENT',
    liveUrl: 'https://must-got-talent.vercel.app/',
    type: 'Event platform · Full-stack web app',
    status: 'Completed',
    statusClass: 'completed',
    footerLabel: 'Completed project',
    description: 'A university talent-event management platform developed to support event participation and administration, with registration, announcements, countdowns and PDF export functionality.',
    stack: ['React', 'Vite', 'Django', 'PostgreSQL'],
    icon: Laptop,
    accent: 'gold'
  },
  {
    number: '03',
    artCode: 'CYBER_SERVICES',
    name: 'Cyber Online Services',
    liveUrl: 'https://cyber-online-services.vercel.app/',
    type: 'Cyber café services · Web application',
    status: 'Live website',
    statusClass: 'completed',
    footerLabel: 'Live website',
    description: 'An online platform for accessing cyber café and digital services.',
    stack: [],
    icon: Laptop,
    accent: 'mint'
  },
  {
    number: '04',
    artCode: 'SCHOOL_SYSTEM',
    name: 'KINGTECH School Management',
    liveUrl: 'https://kingtech-school-management.vercel.app/',
    type: 'Education · School management system',
    status: 'Live website',
    statusClass: 'completed',
    footerLabel: 'Live website',
    description: 'A school management web application. Visit the live website to explore its available functionality.',
    stack: [],
    icon: GraduationCap,
    accent: 'blue'
  },
  {
    number: '05',
    artCode: 'CAFETERIA_SYSTEM',
    name: 'Cafeteria Management System',
    type: 'Food ordering · Management system',
    status: 'Completed',
    statusClass: 'completed',
    footerLabel: 'Completed project',
    description: 'A full-stack cafeteria website combining customer food ordering with administrative management. Recalled features include a menu, cart, order management, meal management, stock, sales and payment functionality.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    icon: Utensils,
    accent: 'gold'
  },
  {
    number: '06',
    artCode: 'MEDIA_TOOL',
    name: 'KingTech YouTube Downloader',
    type: 'Desktop utility · Media tool',
    status: 'Working version',
    statusClass: 'completed',
    footerLabel: 'Working version reported',
    description: 'A branded desktop utility built with a Tkinter interface and FFmpeg support for downloading YouTube videos.',
    stack: ['Python', 'Tkinter', 'FFmpeg'],
    icon: Youtube,
    accent: 'blue'
  },
  {
    number: '07',
    artCode: 'QR_GENERATOR',
    name: 'Python QR Code Generator',
    type: 'Python · Utility application',
    status: 'Built',
    statusClass: 'completed',
    footerLabel: 'Built',
    description: 'A utility project for generating QR codes from user-provided information. Specific supported data types and interface features can be confirmed when the original project is available.',
    stack: ['Python'],
    icon: QrCode,
    accent: 'mint'
  },
  {
    number: '08',
    artCode: 'URL_HEURISTICS',
    name: 'Phishing Detection Extension',
    type: 'Cybersecurity · Browser extension',
    status: 'Ongoing',
    statusClass: 'planned',
    footerLabel: 'Final-year project · Ongoing',
    name_full: 'Heuristic-Based Browser Extension for Detecting Phishing Websites in Real Time',
    description: 'My ongoing final-year project: a heuristic-based Chrome extension that analyses website characteristics and public phishing URL reputation sources to flag potentially suspicious websites in real time. Currently in development, not yet completed.',
    stack: ['JavaScript', 'Chrome Manifest V3', 'URL heuristics'],
    icon: ShieldCheck,
    accent: 'blue'
  }
];

const skillCategories = [
  {
    title: 'Software Development',
    icon: Code2,
    skills: ['HTML & CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Python', 'Django', 'PostgreSQL']
  },
  {
    title: 'Graphic Design',
    icon: Palette,
    skills: ['Logo Design', 'Brand Identity', 'Poster Design', 'Promotional Graphics', 'Social Media Design', 'Digital Content Creation']
  },
  {
    title: 'Tools & IT Support',
    icon: MonitorCog,
    skills: ['Git & GitHub', 'IT support', 'Computer packages', 'Troubleshooting', 'Digital marketing']
  }
];

const designServices = [
  'Logo design',
  'Brand identity design',
  'Business branding',
  'Education & technology branding',
  'Poster & promotional design',
  'Social media graphics',
  'Visual communication'
];

const experience = [
  {
    date: '2026',
    role: 'Industrial Attachment',
    place: 'Vertex Technical Training College',
    details: 'Supported digital marketing and design tasks, computer repair, reception duties, ID preparation and other day-to-day ICT activities.',
    tags: ['IT support', 'Design support', 'Customer service']
  },
  {
    date: 'May – Aug 2025',
    role: 'Cyber Café Assistant',
    place: 'Cyber café',
    details: 'Assisted customers with printing, scanning, typing, online government-service applications and general computer support.',
    tags: ['Customer service', 'Document services', 'IT support']
  },
  {
    date: 'Feb – Aug 2023',
    role: 'BOM Teacher',
    place: 'Mulangoni Secondary School',
    details: 'Taught Agriculture and Kiswahili, helping learners understand lessons and complete classroom activities.',
    tags: ['Teaching', 'Communication', 'Planning']
  }
];

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {text && <p className="section-intro">{text}</p>}
    </div>
  );
}

function DesignGallery() {
  const [filter, setFilter] = useState('All');
  const [activeId, setActiveId] = useState(null);

  // Only show filter buttons for categories that actually contain designs.
  const usedCategories = galleryCategories.filter((c) => designs.some((d) => d.category === c));
  const visible = filter === 'All' ? designs : designs.filter((d) => d.category === filter);
  const activeIndex = visible.findIndex((d) => d.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  const step = (dir) => {
    if (!visible.length) return;
    setActiveId(visible[(activeIndex + dir + visible.length) % visible.length].id);
  };

  useEffect(() => {
    if (!active) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveId(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  });

  return (
    <>
      {usedCategories.length > 1 && (
        <div className="gallery-filters" role="group" aria-label="Filter designs by category">
          {['All', ...usedCategories].map((c) => (
            <button key={c} type="button" className={filter === c ? 'filter-chip active' : 'filter-chip'} aria-pressed={filter === c} onClick={() => setFilter(c)}>{c}</button>
          ))}
        </div>
      )}
      <div className="design-grid">
        {visible.map((d) => (
          <figure className="design-card" key={d.id}>
            <button type="button" className="design-thumb" onClick={() => setActiveId(d.id)} aria-label={`View ${d.title} full size`}>
              <img src={d.image} alt={d.alt || d.title} loading="lazy" />
              <span className="design-zoom"><ZoomIn size={16} /></span>
            </button>
            <figcaption>
              <span className="design-tag">{d.tag || d.category}</span>
              <h3>{d.title}</h3>
              {d.description && <p>{d.description}</p>}
            </figcaption>
          </figure>
        ))}
      </div>
      {active && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActiveId(null)}>
          <button type="button" className="lightbox-close" aria-label="Close preview" onClick={() => setActiveId(null)}><X size={22} /></button>
          {visible.length > 1 && <button type="button" className="lightbox-nav prev" aria-label="Previous design" onClick={(e) => { e.stopPropagation(); step(-1); }}><ChevronLeft size={24} /></button>}
          <div className="lightbox-body" onClick={(e) => e.stopPropagation()}>
            <img src={active.image} alt={active.alt || active.title} />
            <p><strong>{active.title}</strong> <span>{active.tag || active.category}</span></p>
          </div>
          {visible.length > 1 && <button type="button" className="lightbox-nav next" aria-label="Next design" onClick={(e) => { e.stopPropagation(); step(1); }}><ChevronRight size={24} /></button>}
        </div>
      )}
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [gotcha, setGotcha] = useState(''); // honeypot: real visitors never fill this in
  // status: 'idle' | 'sending' | 'success' | 'error'
  const [formStatus, setFormStatus] = useState({ state: 'idle', message: '' });

  const closeMenu = () => setMenuOpen(false);

  // Submits to Formspree with fetch so the page does not reload, and only
  // shows success after Formspree itself confirms (HTTP 2xx).
  async function handleContactSubmit(event) {
    event.preventDefault();
    if (formStatus.state === 'sending') return;
    if (gotcha) { // bot detected: pretend nothing happened
      setFormStatus({ state: 'idle', message: '' });
      return;
    }
    setFormStatus({ state: 'sending', message: 'Sending your message…' });
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message })
      });
      let data = {};
      try { data = await response.json(); } catch { /* non-JSON response */ }
      if (response.ok) {
        setForm({ name: '', email: '', message: '' });
        setFormStatus({ state: 'success', message: "Thank you! Your message has been sent. I'll get back to you soon." });
      } else {
        const detail = Array.isArray(data.errors) && data.errors.length
          ? data.errors.map((e) => e.message).join(' ')
          : 'Something went wrong while sending your message.';
        setFormStatus({ state: 'error', message: `${detail} Please try again, or contact me directly by email or WhatsApp.` });
      }
    } catch {
      setFormStatus({ state: 'error', message: 'Network error: your message was not sent. Please check your connection and try again, or contact me directly by email or WhatsApp.' });
    }
  }

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="Michael Kilonzo home">
            <span className="brand-mark"><Code2 size={21} /></span>
            <span className="brand-text">MICHAEL<span>.</span></span>
          </a>
          <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#design" onClick={closeMenu}>Design</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="hero-glow glow-one" />
          <div className="hero-glow glow-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="pulse-dot" /> OPEN TO OPPORTUNITIES</div>
              <p className="eyebrow hero-eyebrow">SOFTWARE DEVELOPER · GRAPHIC DESIGNER · CREATIVE PROBLEM SOLVER</p>
              <h1>Building useful<br />digital <span>experiences.</span></h1>
              <p className="hero-lead">I'm <strong>Michael Musyoka Kilonzo</strong>, a fourth-year BSc Computer Science student at Meru University of Science and Technology, Kenya. I develop web-based software solutions and create professional visual designs, logos and brand identities.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
                <a className="button button-secondary" href="#design">View designs <Palette size={17} /></a>
                <a className="button button-secondary" href="/Michael-Musyoka-Kilonzo-CV.pdf" download><Download size={17} /> Download CV</a>
              </div>
              <div className="hero-meta">
                <span><MapPin size={15} /> Kenya</span>
                <span><GraduationCap size={16} /> Meru University of Science and Technology</span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="visual-topline"><span>PORTFOLIO / 2026</span><span className="visual-live"><span /> BUILDING & LEARNING</span></div>
              <div className="code-window">
                <div className="window-controls"><i /><i /><i /><span>michael.js</span></div>
                <div className="code-content">
                  <p><span className="code-muted">01</span> <span className="code-purple">const</span> developer = {'{'}</p>
                  <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">'Michael Kilonzo'</span>,</p>
                  <p><span className="code-muted">03</span> &nbsp; roles: [<span className="code-green">'Developer'</span>, <span className="code-green">'Designer'</span>],</p>
                  <p><span className="code-muted">04</span> &nbsp; learning: <span className="code-green">'Every day'</span>,</p>
                  <p><span className="code-muted">05</span> &nbsp; mindset: <span className="code-green">'Solve problems'</span></p>
                  <p><span className="code-muted">06</span> {'}'};</p>
                  <div className="code-cursor" />
                </div>
              </div>
              <div className="visual-bottom">
                <div className="mini-stat"><Code2 size={18} /><div><strong>Web</strong><span>Development</span></div></div>
                <div className="mini-stat"><Palette size={18} /><div><strong>Graphic</strong><span>Design</span></div></div>
                <div className="mini-stat"><Wrench size={18} /><div><strong>Solve</strong><span>Problems</span></div></div>
              </div>
              <div className="floating-badge"><span className="badge-icon"><CheckCircle2 size={17} /></span><span><strong>Always learning</strong><small>One project at a time</small></span></div>
            </div>
          </div>
          <a href="#about" className="scroll-cue"><span /> SCROLL TO DISCOVER <ArrowDown size={14} /></a>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div className="about-side">
              <p className="eyebrow">01 / ABOUT ME</p>
              <div className="about-monogram">MK<span>.</span></div>
              <p className="about-side-note">Curious mind.<br />Practical solutions.</p>
            </div>
            <div className="about-content">
              <SectionHeading eyebrow="A LITTLE INTRODUCTION" title={<>Technology with a <span>purpose.</span></>} />
              <p className="body-large">I am a fourth-year BSc Computer Science student at Meru University of Science and Technology, Kenya. I develop web-based software solutions and also create professional visual designs, logos and brand identities.</p>
              <p className="body-copy">My experience spans assisting customers with digital services, supporting computer users, teaching, and contributing to day-to-day activities during my industrial attachment. I enjoy learning by building and improving real projects.</p>
              <p className="body-copy">I'm interested in junior software development roles, internships, graphic design and branding commissions, IT support opportunities and freelance projects where I can contribute, learn and grow.</p>
              <div className="about-facts">
                <div><span className="fact-number">01</span><span>Problem-solving mindset</span></div>
                <div><span className="fact-number">02</span><span>Developer + designer</span></div>
                <div><span className="fact-number">03</span><span>Client-focused support</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="02 / SELECTED WORK" title={<>Projects I've <span>built.</span></>} text="A selection of software and web projects spanning education technology, event management, food ordering, desktop utilities and cybersecurity. Status labels distinguish completed work from my ongoing final-year project." />
            <div className="project-grid">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className={`project-card ${project.accent}`} key={project.number}>
                    <div className="project-card-top">
                      <span className="project-number">{project.number} / PROJECT</span>
                      <span className={`status-pill ${project.statusClass}`}><i />{project.status}</span>
                    </div>
                    <div className="project-art">
                      <div className="art-grid" />
                      <div className="project-icon"><Icon size={33} strokeWidth={1.5} /></div>
                      <span className="art-code">{project.artCode}</span>
                      <ArrowUpRight className="art-arrow" size={20} />
                    </div>
                    <div className="project-info">
                      <p className="project-type">{project.type}</p>
                      <h3>{project.name}</h3>
                      {project.name_full && <p className="project-fullname">{project.name_full}</p>}
                      <p className="project-description">{project.description}</p>
                      <div className="tech-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                      {project.liveUrl && <a className="project-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit live website <ExternalLink size={14} /></a>}
                      <div className="project-footer"><span>{project.footerLabel}</span><span className={`project-indicator ${project.statusClass}`}><i /></span></div>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="project-note"><span>NOTE</span> The phishing detection extension is my ongoing final-year project and is not yet complete. Live website links are shown only for projects that have been deployed.</p>
          </div>
        </section>

        <section className="design section" id="design">
          <div className="container">
            <SectionHeading eyebrow="03 / CREATIVE WORK" title={<>Graphic Design &amp; <span>Brand Identity.</span></>} text="Beyond code, I design logos and brand identities that give businesses, schools and technology ventures a clear, memorable visual voice. Select any design to view it full size." />
            <ul className="design-services" aria-label="Design services">
              {designServices.map((name) => <li key={name}><CheckCircle2 size={14} /> {name}</li>)}
            </ul>
            <DesignGallery />
            <p className="project-note"><span>NEED A LOGO?</span> I take on logo, branding, poster and social media design work. <a className="inline-link" href="#contact">Get in touch</a>.</p>
          </div>
        </section>

        <section className="skills section" id="skills">
          <div className="container skills-layout">
            <div className="skills-intro">
              <SectionHeading eyebrow="04 / TOOLKIT" title={<>Skills I'm <span>growing.</span></>} text="A practical toolkit for building software and designing brands, built through study, project work and hands-on experience." />
              <div className="learning-card"><span className="learning-icon"><Code2 size={20} /></span><div><strong>Always expanding</strong><p>My skills develop as I work on projects and learn new tools.</p></div></div>
            </div>
            <div className="skills-panel">
              {skillCategories.map(({ title, icon: GroupIcon, skills }) => (
                <div className="skill-group" key={title}>
                  <h3><GroupIcon size={14} /> {title}</h3>
                  <div className="skill-list">{skills.map((name) => <span className="skill-chip" key={name}><span />{name}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="05 / EXPERIENCE & EDUCATION" title={<>Learning by <span>doing.</span></>} text="Experience across education, customer service and practical ICT support." />
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.role}>
                  <div className="timeline-marker">{index === 0 ? <MonitorCog size={17} /> : <BriefcaseBusiness size={17} />}</div>
                  <div className="timeline-date">{item.date}</div>
                  <div className="timeline-content">
                    <h3>{item.role}</h3><p className="timeline-place">{item.place}</p><p>{item.details}</p>
                    <div className="tech-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
              <article className="timeline-item">
                <div className="timeline-marker"><GraduationCap size={18} /></div>
                <div className="timeline-date">Sep 2023 – Present</div>
                <div className="timeline-content">
                  <h3>BSc Computer Science</h3><p className="timeline-place">Meru University of Science and Technology</p>
                  <p>Building a foundation in computing, software development and problem-solving.</p>
                  <div className="tech-tags"><span>Computer Science</span><span>Software Development</span></div>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container cta-inner">
            <div><p className="eyebrow">HAVE AN OPPORTUNITY?</p><h2>Let's build something<br /><span>worth sharing.</span></h2></div>
            <a className="button button-primary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            <div className="cta-decoration"><ArrowDownRight size={78} strokeWidth={0.7} /></div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionHeading eyebrow="05 / CONTACT" title={<>Have a project or role in <span>mind?</span></>} text="I'm open to suitable entry-level opportunities, internships, IT support work, design commissions and freelance projects. Send a message to start a conversation." />
              <div className="contact-detail">
                <div className="contact-detail-icon"><Mail size={18} /></div>
                <div><small>EMAIL</small><strong><a className="contact-link" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></strong><p>Click to open your email app.</p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon whatsapp"><WhatsAppIcon size={19} /></div>
                <div><small>WHATSAPP</small><strong><a className="contact-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">0795 163 826</a></strong><p>Chat with me directly on WhatsApp.</p></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-icon"><MapPin size={18} /></div>
                <div><small>COUNTRY</small><strong>Kenya</strong><p>Open to suitable remote opportunities.</p></div>
              </div>
              <a className="button whatsapp-button" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={18} /> Chat on WhatsApp</a>
            </div>
            <form className="contact-form" id="contactForm" action={FORMSPREE_ENDPOINT} method="POST" onSubmit={handleContactSubmit} aria-busy={formStatus.state === 'sending'}>
              <div className="form-heading"><span>LET'S CONNECT</span><Send size={18} /></div>
              <label htmlFor="name">Your Name</label>
              <input id="name" name="name" type="text" autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your Name" required disabled={formStatus.state === 'sending'} />
              <label htmlFor="email">Your Email</label>
              <input id="email" name="email" type="email" autoComplete="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your Email" required disabled={formStatus.state === 'sending'} />
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Your Message" rows={5} required disabled={formStatus.state === 'sending'} />
              {/* Honeypot field for spam bots; hidden from people and assistive tech */}
              <div className="hp-field" aria-hidden="true">
                <label htmlFor="_gotcha">Leave this field empty</label>
                <input id="_gotcha" type="text" name="_gotcha" tabIndex={-1} autoComplete="off" value={gotcha} onChange={(e) => setGotcha(e.target.value)} />
              </div>
              <button className="button button-primary form-submit" type="submit" disabled={formStatus.state === 'sending'}>
                {formStatus.state === 'sending' ? <><Loader2 size={17} className="spin" /> Sending…</> : <>Send Message <ArrowRight size={17} /></>}
              </button>
              <div className="form-status-region" role="status" aria-live="polite">
                {formStatus.state === 'sending' && <p className="form-notice sending">{formStatus.message}</p>}
                {formStatus.state === 'success' && <p className="form-notice success"><CheckCircle2 size={15} /> {formStatus.message}</p>}
              </div>
              {formStatus.state === 'error' && <p className="form-notice error" role="alert"><AlertCircle size={15} /> {formStatus.message}</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="brand" href="#home"><span className="brand-mark"><Code2 size={19} /></span><span className="brand-text">MICHAEL<span>.</span></span></a>
          <p>Software Developer | Graphic Designer | Creative Problem Solver</p>
          <a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={14} /></a>
          <span className="copyright">© {new Date().getFullYear()} Michael Musyoka Kilonzo</span>
        </div>
      </footer>

      <a className="whatsapp-float" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="Chat with Michael on WhatsApp">
        <WhatsAppIcon size={26} />
        <span className="whatsapp-float-label">Chat on WhatsApp</span>
      </a>
    </>
  );
}

export default App;