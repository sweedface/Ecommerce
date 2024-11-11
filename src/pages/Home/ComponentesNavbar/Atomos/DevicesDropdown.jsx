// src/Componentes/Atomos/DevicesDropdown.jsx
import React, { useState } from 'react';
import './DevicesDropdown.css';
import DevicesController from '/src/assets/devices-console-icon.png';
import DevicesPC from '/src/assets/controller-play.png';

function DevicesDropdown() {
  const [isGamesOpen, setIsGamesOpen] = useState(false);

  const toggleGames = () => {
    setIsGamesOpen(!isGamesOpen);
  };

  return (
    <div className="dropdown-section">
      <div className="dropdown-header" onClick={toggleGames}>
        <span>Electronic Devices</span>
        <span className={`triangle ${isGamesOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isGamesOpen && (
        <div className="dropdown-content">
          <div className="dropdown-item">
          <img src={DevicesController} alt="Console Icon" className="icon-console" /> Console
          </div>
          <div className="dropdown--item">
          <img src={DevicesPC} alt="PC Icon" className="icon-pc" /> PC
          </div>
        </div>
      )}
    </div>
  );
}

export default DevicesDropdown;
