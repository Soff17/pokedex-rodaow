import React from 'react';

type TypeBadgeProps = {
  type: string;
};

const typeColors: { [key: string]: string } = {
    bug: 'bg-green-800',
    dark: 'bg-gray-900',
    dragon: 'bg-blue-800',
    electric: 'bg-yellow-500',
    fairy: 'bg-pink-800',
    fighting: 'bg-orange-700',
    fire: 'bg-red-600',
    flying: 'bg-gray-500',
    ghost: 'bg-indigo-800',
    grass: 'bg-green-500',
    ground: 'bg-yellow-800',
    ice: 'bg-blue-300',
    normal: 'bg-pink-200',
    poison: 'bg-purple-600',
    psychic: 'bg-pink-600',
    rock: 'bg-yellow-900',
    steel: 'bg-teal-400',
    water: 'bg-blue-600',  
};

const TypeBadge: React.FC<TypeBadgeProps> = ({ type }) => {
    const colorClass = typeColors[type.toLowerCase()];
    // Establece un ancho fijo y utiliza flex y justify-center para centrar el texto
    return (
      <span className={`text-xs font-semibold mr-2 px-2.5 py-1 flex justify-center items-center rounded ${colorClass}`} style={{ width: '80px' }}>
        {type.toUpperCase()}
      </span>
    );
};

export default TypeBadge;
