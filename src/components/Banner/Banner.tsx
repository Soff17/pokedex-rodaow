import React from 'react';

type PokemonBannerProps = {
  imageUrl_1: string; // URL de la imagen del Pokémon a la izquierda
  imageUrlCenter: string; // URL de la imagen del logo de Pokémon en el centro
  imageUrl_2: string; // URL de la imagen del Pokémon a la derecha
};

const PokemonBanner: React.FC<PokemonBannerProps> = ({ imageUrl_1, imageUrlCenter, imageUrl_2 }) => {
  return (
    <div className="flex items-center justify-between bg-red-600 p-2 px-8">
      <img src={imageUrl_1} alt="Pokemon" className="h-16 md:h-14 lg:h-22 transform -scale-x-100" />
      <img src={imageUrlCenter} alt="Pokemon" className="h-24 md:h-22 lg:h-38 transform-scale-x-100" />
      <img src={imageUrl_2} alt="Pokemon" className="h-16 md:h-14 lg:h-22 transform -scale-x-100" />
    </div>
  );
};

export default PokemonBanner;