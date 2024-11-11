// src/Componentes/Atomos/AboutDropdown.jsx
import React, { useState } from 'react';
import './AboutDropdown.css';
import TeamIcon from '/src/assets/team-icon.png';
import ContactIcon from '/src/assets/contact-icon.png';

function AboutDropdown() {
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const toggleGames = () => {
    setIsGamesOpen(!isGamesOpen);
  };
  
  return (
    <div className="dropdown-section">
      <div className="dropdown-header" onClick={toggleGames}>
        <span>About us</span>
        <span className={`triangle ${isGamesOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isGamesOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
          <img src={TeamIcon} alt="Team Icon" className="TeamIcon" />Our Team
          </div>
          <div className="dropdown-item">
          <img src={ContactIcon} alt="Contact icon" className="ContactIcon" /> Contact us
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutDropdown;