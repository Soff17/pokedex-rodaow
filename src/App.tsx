import React from 'react';
import './App.css';
import Button from './components/Button';
import PokemonComponent from './components/pokemonComponent';
import Search from './components/search';
import {Pokemon} from './models/Pokemon';
import {PokeApi} from './api/PokeApi';
// import PokemonComponent from './components/pokemonComponent';
// import PokedexCard from './components/PokedexCard/PokedexCard';

function App() {
  return (
    <div className="App">
      {/* <p>Hello World {pokemonNumber}</p>

      <center>
        <PokedexCard/>
      </center>

      <input onChange={(event)=>{setPokemonNumber(event.target.value)}} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={pokemonNumber}></input>
      <Button label="Buscar" color='green' onClick={()=>buscar()}></Button>

      <center>
        {loading && <p>Cargando...</p>}
        {(!loading && pokemon &&!error) && <>
          <PokemonComponent pokemon={pokemon}></PokemonComponent>
        </>}
        {error && <p>{error}</p>}
      </center> */}
      <Search></Search>
    </div>

  );
}

export default App;