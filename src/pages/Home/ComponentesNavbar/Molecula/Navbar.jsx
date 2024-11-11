// src/components/Navbar.jsx
import React from 'react';
import Logonavbar from '../Atomos/Logonavbar';
import GamesDropdown from '../Atomos/GamesDropdown';
import DevicesDropdown from '../Atomos/DevicesDropdown';
import AboutDropdown from '../Atomos/AboutDropdown';
import Discounts from '../Atomos/Discounts';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      {/* Este será solo el recuadro negro */}
      <Logonavbar />
      {/* Aquí irán los demás elementos del navbar */}
      <div style={{ marginTop: '71px' }}/> {/* Espacio de 71px debajo del logo */}
{/* Elementos del navbar con espaciado uniforme */}
<div className="navbar-item">
        <GamesDropdown />
      </div>
      <div className="navbar-item">
        <DevicesDropdown />
      </div>
      <div className="navbar-item">
        <AboutDropdown />
      </div>
      <div className="navbar-item">
        <Discounts />
      </div>
    </nav>
  );
}
export default Navbar;
