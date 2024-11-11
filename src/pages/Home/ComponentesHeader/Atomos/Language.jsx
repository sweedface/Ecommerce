import React from 'react';
import usFlag from '../../../../assets/us-flag.png'; // Ajusta la ruta según la estructura
import './Language.css'; // Asegúrate de que la hoja de estilos existe

function Language() {
  console.log('Language component rendered'); // Prueba temporal
  return (
    <div className="language-container">
      <span className="language-text">Language Component</span>
      <img src={usFlag} alt="US Flag" className="language-flag" />
    </div>
  );
}

export default Language;