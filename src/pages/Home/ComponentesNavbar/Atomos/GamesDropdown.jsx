// src/Componentes/Atomos/GamesDropdown.jsx
import React, { useState } from 'react';
import './GamesDropdown.css';
import pcIcon from '/src/assets/mouse-icon.png';
import consoleIcon from '/src/assets/controller-play.png';

function GamesDropdown() {
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const toggleGames = () => {
    setIsGamesOpen(!isGamesOpen);
  };

  return (
    <div className="dropdown-section">
      <div className="dropdown-header" onClick={toggleGames}>
        <span>Games</span>
        <span className={`triangle ${isGamesOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isGamesOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
          <img src={consoleIcon} alt="Console Icon" className="icon-console" /> Console
          </div>
          <div className="dropdown-item">
          <img src={pcIcon} alt="PC Icon" className="icon-pc" /> PC
          </div>
        </div>
      )}
    </div>
  );
}

export default GamesDropdown;
