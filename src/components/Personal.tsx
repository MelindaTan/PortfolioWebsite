import React from "react";
import { useNavigate } from "react-router-dom";
import '../assets/styles/Personal.scss';

function Personal() {
  const navigate = useNavigate();

  return (
    <div className="personal-container">
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="personal-content">
        <h1>Another Side of Me !</h1>

        <div className="hobby-item">
          <div className="hobby-text">
            <h2>Hiking Adventures</h2>
            <p>
              Hiking is one of my greatest passions. There's something incredibly rejuvenating about being in nature,
              pushing my physical limits, and discovering breathtaking views.
            </p>
          </div>
          <div className="photo-placeholder">
            <img src="/PortfolioWebsite/images/IMG_0179.jpg" alt="Hiking adventure" />
          </div>
        </div>

        <div className="hobby-item">
          <div className="hobby-text">
            <h2>Trying New Things</h2>
            <p>
              I'm always eager to step outside my comfort zone and explore new experiences. Whether it's learning
              a new technology, trying a different cuisine, or traveling to unfamiliar places, I embrace new adventures.
            </p>
          </div>
          <div className="photo-placeholder">
            <img src="/PortfolioWebsite/images/IMG_1633.JPG" alt="New experience" />
          </div>
        </div>

        <div className="travel-section">
          <h2>Travel Adventures</h2>
          <p>
            Traveling allows me to explore new cultures, meet interesting people, and create unforgettable memories.
            I love discovering hidden gems, trying local food, and experiencing the unique beauty of different places around the world.
          </p>
          <div className="travel-photos-grid">
            <div className="travel-photo-placeholder">
              <img src="/PortfolioWebsite/images/IMG_1918.JPG" alt="Travel photo 1" />
            </div>
            <div className="travel-photo-placeholder">
              <img src="/PortfolioWebsite/images/IMG_2445.JPG" alt="Travel photo 2" />
            </div>
          </div>
        </div>

        <div className="favorite-color-note">
          <p>And of course, I love pink !</p>
        </div>
      </div>
    </div>
  );
}

export default Personal;