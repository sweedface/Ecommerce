// src/Componentes/Atomos/Logonavbar.jsx
import React from 'react';
import logo from '/src/assets/logonavbar.png';
import './Logonavbar.css';

function Logonavbar() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Games & Devices Market Logo" className="logo" />
    </div>
  );
}

export default Logonavbar;