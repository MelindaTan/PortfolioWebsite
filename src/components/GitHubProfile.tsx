import React, { useState } from 'react';
import { Link, NavLink, Navigate, Route, Routes } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import BookOutlined from '@mui/icons-material/BookOutlined';
import MenuBookOutlined from '@mui/icons-material/MenuBookOutlined';
import WorkOutline from '@mui/icons-material/WorkOutline';
import MailOutline from '@mui/icons-material/MailOutline';
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined';
import BusinessOutlined from '@mui/icons-material/BusinessOutlined';
import LightModeOutlined from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import profile from '../assets/images/MelindaTranHeadshot.jpeg';
import { projects, Project } from '../data/projects';
import { experiences } from '../data/experiences';
import ProjectDetail from './ProjectDetail';
import ExperienceDetail from './ExperienceDetail';
import About from './About';
import PersonOutline from '@mui/icons-material/PersonOutline';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';
import ScrollReveal from './ScrollReveal';
import TypewriterGreeting from './TypewriterGreeting';
import '../assets/styles/GitHubProfile.scss';

function ProjectCard({ project }: { project: Project }) {
  return <ScrollReveal as="article" className="repo-card">
    <div className="repo-heading"><BookOutlined /><Link to={`/project/${project.id}`}>{project.title}</Link><span className="badge">Portfolio</span></div>
    {project.date && <div className="project-card-date">{project.date}</div>}
    <p>{project.shortDescription}</p>
    <div className="repo-meta"><span className={`language-dot ${project.category}`} />{project.technologies[0]}<span className="repo-category">{project.category === 'ai-data' ? 'AI & data' : project.category === 'hardware' ? 'Hardware' : 'Software'}</span></div>
  </ScrollReveal>;
}
function Overview() {
  return <>
    <article className="readme panel">
      <div className="file-label"><BookOutlined fontSize="small" /><span>MelindaTan / <strong>README.md</strong></span></div>
      <div className="readme-body"><div className="eyebrow">HELLO, WORLD</div><h2 className="animated-greeting"><TypewriterGreeting /></h2>
        <p className="readme-lead">Building <strong>software and AI for robotics.</strong></p>
        <p>I’m a Computer Engineering and Computer Science student at Boston University with a concentration in machine learning. My journey has taken me from mechanical design to software design. I love working on computer vision in robotics and building software and AI that help robots perceive and interact with the world.</p>
        <div className="readme-notes"><p><span>⌘</span> Exploring computer vision, machine learning, and robotics software.</p><p><span>◎</span> Helping robots turn visual information into action.</p><p><span>↗</span> Always learning, building, and looking for opportunities to collaborate.</p></div>
        <h3>My toolbox</h3><div className="topics">{['Python', 'React', 'Java', 'Machine Learning', 'Computer Vision', 'ROS', 'CAD', 'Embedded Systems'].map(s => <span key={s}>{s}</span>)}</div>
        <Link className="readme-more" to="/about">A little more about me →</Link>
      </div>
    </article>
    <div className="section-heading"><h2>Pinned projects</h2><Link to="/projects">View all projects →</Link></div>
    <div className="repo-grid">{projects.slice(0, 6).map(p => <ProjectCard key={p.id} project={p} />)}</div>
    <div className="section-heading"><h2>Recent experience</h2><Link to="/experience">View all →</Link></div>
    <div className="panel activity-list">{experiences.slice(0, 3).map(e => <ScrollReveal key={e.id} className="activity"><span className="activity-dot" /><div><Link to={`/experience/${e.id}`}>{e.title}</Link><p>{e.company}</p></div><small>{e.date}</small></ScrollReveal>)}</div>
  </>;
}
function Repositories() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const matches = projects.filter(p => `${p.title} ${p.shortDescription} ${p.technologies.join(' ')}`.toLowerCase().includes(query.toLowerCase()) && (category === 'all' || p.category === category));
  return <><div className="section-heading"><h2>Projects <span className="count">{projects.length}</span></h2></div><div className="repo-filters"><input aria-label="Find a project" placeholder="Find a project…" value={query} onChange={e => setQuery(e.target.value)} /><select aria-label="Project category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">All categories</option><option value="full-stack">Software</option><option value="ai-data">AI & data</option><option value="hardware">Hardware</option></select></div><p className="result-count" aria-live="polite">{matches.length} projects</p><div className="repo-grid">{matches.map(p => <ProjectCard key={p.id} project={p} />)}</div>{!matches.length && <div className="panel empty-state">No projects match your search. Try another keyword or category.</div>}</>;
}
export default function GitHubProfile() {
  const [dark, setDark] = useState(true);
  return <div className={`github-profile ${dark ? 'github-dark dark-mode' : 'github-light light-mode'}`}>
    <ScrollToTop /><a className="skip-link" href="#profile-content">Skip to content</a>
    <header className="github-header"><Link to="/" className="header-brand" aria-label="Melinda Tran home"><GitHubIcon /><strong>MelindaTan</strong><span className="header-divider">/</span><span>portfolio</span></Link><div className="header-actions"><a href="https://github.com/MelindaTan" target="_blank" rel="noreferrer">View GitHub ↗</a><button className="icon-button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setDark(!dark)}>{dark ? <LightModeOutlined /> : <DarkModeOutlined />}</button><img src={profile} alt="" /></div></header>
    <nav className="profile-tabs" aria-label="Portfolio navigation"><div><NavLink end to="/"><MenuBookOutlined />Overview</NavLink><NavLink to="/about"><PersonOutline />About Me</NavLink><NavLink to="/experience"><WorkOutline />Experience <span className="count">{experiences.length}</span></NavLink><NavLink to="/projects"><BookOutlined />Projects <span className="count">{projects.length}</span></NavLink><NavLink to="/contact"><MailOutline />Contact</NavLink></div></nav>
    <div className="profile-layout"><aside className="profile-sidebar"><div className="avatar-wrap"><img className="profile-avatar" src={profile} alt="Melinda Tran" /></div><h1>Melinda Tran</h1><div className="username">MelindaTan</div><p className="profile-bio">Computer engineer passionate about software and AI for robotics, with a focus on computer vision.</p><a className="profile-button" href={`${process.env.PUBLIC_URL}/resume.pdf`} target="_blank" rel="noreferrer">View résumé</a><ul className="profile-facts"><li><BusinessOutlined /><span>Boston University <span className="muted">’27</span></span></li><li><LocationOnOutlined /><span>Boston, MA · Portland, OR</span></li><li><MailOutline /><a href="mailto:meltran@bu.edu">meltran@bu.edu</a></li><li><span className="linkedin-icon">in</span><a href="https://www.linkedin.com/in/melintran" target="_blank" rel="noreferrer">in/melintran</a></li></ul><div className="sidebar-section"><h2>Focus areas</h2><div className="topics"><span>robotics</span><span>machine-learning</span><span>computer-vision</span><span>robotics-software</span></div></div><div className="sidebar-section"><h2>Let’s build something.</h2><p className="muted">Have an idea or a project in mind?</p><Link className="contact-link" to="/contact">Get in touch →</Link></div></aside>
    <main id="profile-content" className="profile-content"><Routes><Route path="/" element={<Overview />} /><Route path="/about" element={<About />} /><Route path="/projects" element={<Repositories />} /><Route path="/experience" element={<><div className="section-heading"><h2>Experience</h2></div><div className="experience-list">{experiences.map(e => <ScrollReveal as="article" className="panel experience-row" key={e.id}><div className="experience-date">{e.date}</div><h3><Link to={`/experience/${e.id}`}>{e.title}</Link></h3><strong>{e.company}</strong>{e.location && <span className="muted"> · {e.location}</span>}<p>{e.shortDescription}</p><Link to={`/experience/${e.id}`}>Read more →</Link></ScrollReveal>)}</div></>} /><Route path="/project/:id" element={<ProjectDetail />} /><Route path="/experience/:id" element={<ExperienceDetail />} /><Route path="/personal" element={<Navigate to="/about" replace />} /><Route path="/contact" element={<Contact />} /><Route path="*" element={<div className="panel empty-state"><h2>Page not found</h2><Link to="/">Back to overview</Link></div>} /></Routes></main></div>
    <footer className="github-footer"><GitHubIcon /><span>© {new Date().getFullYear()} Melinda Tran</span><span>Built with curiosity & React</span><a href="mailto:meltran@bu.edu">Contact</a><a href="https://github.com/MelindaTan">GitHub</a></footer>
  </div>;
}
