import React from 'react';
import './App.css';
import Search from './components/search';
import PokemonBanner from './components/Banner/Banner';
import FirstPokemon from './elements/bulbasaur.png';
import Logo from './elements/PokemonLogo.png';
import SecondPokemon from './elements/squirtle.png';


function App() {
  return (
    <div className="App">
      <PokemonBanner imageUrl_1={FirstPokemon} imageUrl_2={SecondPokemon} imageUrlCenter={Logo}></PokemonBanner>
      <center>
        <Search></Search>
      </center>
    </div>

  );
}

export default App;