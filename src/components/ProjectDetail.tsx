import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import '../assets/styles/ProjectDetail.scss';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find((proj) => proj.id === id);

  if (!project) {
    return (
      <div className="project-detail">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="project-missing">
          <h1>Project not found</h1>
          <p>It looks like the project you are looking for does not exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="project-header">
        <h1>{project.title}</h1>
        {project.date && <span className="muted">{project.date}</span>}
        <div className="project-technologies">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-summary">
        <p>{project.shortDescription}</p>
      </div>

      <div className="project-details">
        {project.details && <p>{project.details}</p>}
        {project.bullets && project.bullets.length > 0 && (
          <ul>
            {project.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="project-links">
        {project.externalLink && (
          <a
            href={project.externalLink}
            target="_blank"
            rel="noreferrer"
            className="external-link"
          >
            {project.externalLinkLabel || "View Project"}
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectDetail;