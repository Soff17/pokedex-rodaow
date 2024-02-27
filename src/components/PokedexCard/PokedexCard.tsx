import React from 'react';
import './PokedexCard.css'; // Asegúrate de crear este archivo CSS en la misma carpeta que tu componente
import { Pokemon } from '../../models/Pokemon';

interface PokedexCardProps {
  pokemon:Pokemon;
}

const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {
  return (
    <div className="pokedex-card">
      <div className="screen-container flex justify-center items-center">
        <div className="screen flex justify-center items-center"> 
          <img className="max-w-full h-auto" width={"150px"} src={pokemon?.sprites.other['official-artwork'].front_default} alt={pokemon?.name}></img>
        </div>
      </div>
      <div className="info-container">
        <h1> {pokemon.name} </h1>
        <p>  
          {pokemon.abilities.map((ability)=>{
            return(
              <div key={ability.ability.name}>{ability.ability.name}</div>
            )
          })}
        </p>
      </div>
    </div>
  );
};

export default PokedexCard;
