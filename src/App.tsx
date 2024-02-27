import React from 'react';
import './App.css';
import Button from './components/Button';
import Search from './components/search';
import {Pokemon} from './models/Pokemon';
import {PokeApi} from './api/PokeApi';
import PokemonComponent from './components/pokemonComponent';
import PokedexCard from './components/PokedexCard/PokedexCard';
import PokedexEntry from './components/PokemonCard/PokemonCard';
import StatsCard from './components/StatsCard/StatsCard';

function App() {
  return (
    <div className="App">
      {/* <p>Hello World {pokemonNumber}</p>

      <div className="pokedex-area flex justify-center flex-wrap gap-2">
        {loading && <p>Cargando...</p>}
        {(!loading && pokemon &&!error) && <>
          <PokedexEntry pokemon={pokemon} isShiny={false}></PokedexEntry>
          <StatsCard pokemon={pokemon} isShiny={true}></StatsCard>
        </>}
        {error && <p>{error}</p>}
      </div>


      <input onChange={(event)=>{setPokemonNumber(event.target.value)}} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={pokemonNumber}></input>
      <Button label="Buscar" color='green' onClick={()=>buscar()}></Button>

      <center>
        {loading && <p>Cargando...</p>}
        {(!loading && pokemon &&!error) && <>
          <PokedexCard pokemon={pokemon}></PokedexCard>
        </>}
        {error && <p>{error}</p>}
      </center> */}
      <Search></Search>
    </div>

  );
}

export default App;