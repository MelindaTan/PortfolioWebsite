import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { experiences } from "../data/experiences";
import '../assets/styles/ExperienceDetail.scss';

function ExperienceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const experience = experiences.find((exp) => exp.id === id);
  const presentationPdfUrl = experience?.presentationPdf
    ? `${process.env.PUBLIC_URL}${encodeURI(experience.presentationPdf)}`
    : null;

  if (!experience) {
    return (
      <div className="experience-detail">
        <button className="back-button" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <div className="experience-missing">
          <h1>Experience not found</h1>
          <p>It looks like the experience you are looking for does not exist yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="experience-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className="experience-header">
        <h1>{experience.title}</h1>
        <h2>{experience.company}</h2>
        {experience.location && <span className="muted">{experience.location}</span>}
        <span className="experience-date">{experience.date}</span>
        {experience.logo && (
          <div className={Array.isArray(experience.logo) ? "experience-logos" : "experience-logo"}>
            {Array.isArray(experience.logo) ? (
              experience.logo.map((logo, index) => (
                <div key={index} className="experience-logo">
                  <img src={logo} alt={`${experience.company} logo ${index + 1}`} />
                </div>
              ))
            ) : (
              <img src={experience.logo} alt={experience.company} />
            )}
          </div>
        )}
      </div>

      <div className="experience-summary">
        <p>{experience.shortDescription}</p>
      </div>

      <div className="experience-details">
        <p>{experience.details}</p>
        {experience.bullets && experience.bullets.length > 0 && (
          <ul>
            {experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>

      {presentationPdfUrl && (
        <div className="experience-presentation">
          <h3>Final Presentation</h3>
          <iframe
            title={`${experience.company} Final Presentation`}
            src={presentationPdfUrl}
            className="experience-presentation-frame"
          />
        </div>
      )}

      {experience.endPhotos && experience.endPhotos.length > 0 && (
        <div className="experience-end-photos">
          {experience.endPhotos.map((photo, index) => (
            <div key={photo} className="experience-end-photo">
              <img src={`${process.env.PUBLIC_URL}${encodeURI(photo)}`} alt={`${experience.company} photo ${index + 1}`} />
            </div>
          ))}
        </div>
      )}

      {experience.links && experience.links.length > 0 && (
        <div className="experience-links">
          {experience.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="experience-link-button"
            >
              {link.text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExperienceDetail;
