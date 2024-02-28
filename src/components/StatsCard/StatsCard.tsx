import React from 'react';
import { Pokemon } from '../../models/Pokemon';
import TypeBadge from '../PokemonTypes/PokeTypes';

type StatsCardProps = {
    pokemon: Pokemon;
    isShiny: boolean;
    image: string;
};

const StatsCard: React.FC<StatsCardProps> = ({ pokemon, isShiny, image }) => {
    return (
        <div className="bg-red-600 p-4 max-w-sm rounded-lg shadow-md text-white">

            {isShiny && (
                <div className="bg-yellow-400 text-black py-1 px-3 rounded-full mb-4 self-start">
                    SHINY
                </div>
            )}

            <div className="relative bg-white rounded-lg p-3 mb-4 shadow-lg bg-blue-500">
                <h1 className='px-4 py-2 max-w-sm rounded-lg shadow-md text-white bg-blue-400 p-3 mb-2 text-black text-lg font-bold'>
                    TYPES
                </h1>
                <div className="flex justify-center flex-wrap gap-2 bg-blue-500"> {/* Agrega flex-wrap para manejar múltiples elementos */}
                    {pokemon.types && pokemon.types.map((typeInfo) => (
                        <TypeBadge key={typeInfo.type.name} type={typeInfo.type.name} />
                    ))}
                </div>
            </div>

            <div className="relative bg-yellow-300 rounded-lg p-3 mb-4 shadow-lg">
                <h1 className='px-4 py-2 max-w-sm rounded-lg shadow-md text-white bg-red-400 p-3 mb-2 text-lg font-bold bg-yellow-600'>
                    STATS
                </h1>
                <div className="stats-container space-y-1">
                    {pokemon.stats.map((stat) => (
                        <div key={stat.stat.name} className="stat">
                            <span className="stat-name">{stat.stat.name.replace('-', ' ').toUpperCase()}</span>
                            <span className="stat-value">{stat.base_stat}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <img src={image} alt="Pokemon" className="h-16 md:h-24 lg:h-32 transform -scale-x-100" />
            </div>

        </div>
    );
};

export default StatsCard;