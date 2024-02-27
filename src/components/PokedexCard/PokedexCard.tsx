import React from 'react';
import './PokedexCard.css'; // Asegúrate de crear este archivo CSS en la misma carpeta que tu componente

const PokedexCard = () => {
  return (
    <div className="pokedex-card">
      <div className="screen-container">
        <div className="screen">
          {/* Aquí podrías poner una imagen o animación de Pikachu */}
        </div>
      </div>
      <div className="info-container">
        <h1> Nombre </h1>
        <p> Descripcion </p>
      </div>
      {/* Puedes añadir más elementos de UI aquí si es necesario */}
    </div>
  );
};

export default PokedexCard;
