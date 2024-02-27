import React from 'react';
import { Pokemon } from '../../models/Pokemon';
import TypeBadge from '../PokemonTypes/PokeTypes';
import { Stats } from 'fs';

type StatsCardProps = {
  pokemon: Pokemon;
  isShiny: boolean;
};

const StatsCard: React.FC<StatsCardProps> = ({ pokemon, isShiny }) => {
  return (
    <div className="bg-red-600 p-4 max-w-sm rounded-lg shadow-md text-white">

      {isShiny && (
        <div className="bg-yellow-400 text-black py-1 px-3 rounded-full mb-4 self-start">
          SHINY
        </div>
      )}

      <div className="relative bg-white rounded-lg p-3 mb-4 shadow-lg">
        <div className="stats-container space-y-1">
          {pokemon.stats.map((stat) => (
            <div key={stat.stat.name} className="stat">
              <span className="stat-name">{stat.stat.name.replace('-', ' ').toUpperCase()}</span>
              <span className="stat-value">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default StatsCard;