import React from 'react';
import { Pokemon } from '../../models/Pokemon';

type PokedexCardProps = {
  pokemon: Pokemon;
  isShiny: boolean;
};

const PokedexCard: React.FC<PokedexCardProps> = ({ pokemon, isShiny }) => {
  return (
    <div className="bg-red-600 p-4 max-w-sm rounded-lg shadow-md text-white">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-lg font-bold">{pokemon.name.toUpperCase()}</h1>
        <span className="text-sm font-bold">No. {pokemon.id}</span>
      </div>
      <div className="relative bg-white rounded-lg p-3 mb-4 shadow-lg">
        <div className="bg-indigo-300 w-full aspect-w-1 aspect-h-1 rounded-lg">
          <img
            src={pokemon.sprites.other['official-artwork'].front_default}
            alt={pokemon.name}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {isShiny && (
        <div className="bg-yellow-400 text-black py-1 px-3 rounded-full mb-4 self-start">
          SHINY
        </div>
      )}

      <div className="relative bg-white rounded-lg p-3 mb-4 shadow-lg"> 
        <h1 className='px-4 py-2 max-w-sm rounded-lg shadow-md text-white bg-red-400 p-3 mb-2 text-black text-lg font-bold'>
          ABILITIES
        </h1>
        <div className="text-sm space-y-1 text-black">
          {pokemon.abilities.map((ability) => (
            <div key={ability.ability.name}>{ability.ability.name}</div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PokedexCard;







