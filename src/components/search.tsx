import React, { useState } from 'react';
import Button from './Button';
import { Pokemon } from '../models/Pokemon';
import { PokeApi } from '../api/PokeApi';
import PokedexEntry from '../components/PokemonCard/PokemonCard';
import StatsCard from '../components/StatsCard/StatsCard';
import PokedexCard from './PokedexCard/PokedexCard';

interface NumericKeyboardProps {
  onKeyPress: (key: string) => void;
  onDelete: () => void;
  onSearch: () => void;
}

function NumericKeyboard() {
  const [pokemonNumber, setPokemonNumber] = useState<string | undefined>(undefined);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>(undefined);

  function buscar() {
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber)
      .then((response) => {
        setPokemon(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setError("Pokemon no encontrado");
      });
  }

  return (
    <div className="space-y-4">
        <center className="flex w-1/2 p-4 items-center justify-center space-x-4">
        <input
            onChange={(event) => {
            setPokemonNumber(event.target.value);
            }}
            className="shadow border rounded-full w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            value={pokemonNumber}
        />
        <Button color="green" onClick={() => buscar()} imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/601px-Pokebola-pokeball-png-0.png" />
        </center>
        <div className="pokedex-area flex justify-center flex-wrap gap-2">
            {loading && <p>Cargando...</p>}
            {!loading && pokemon && !error && (
            <>
                <PokedexEntry pokemon={pokemon} isShiny={false} />
                <StatsCard pokemon={pokemon} isShiny={true} />
            </>
            )}
            {error && <p>{error}</p>}
        </div>
    </div>
  );
}

export default NumericKeyboard;
