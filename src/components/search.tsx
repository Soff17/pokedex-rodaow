import React, {useEffect, useState } from 'react';
import Button from './Button';
import PokemonComponent from './pokemonComponent';
import {Pokemon} from '../models/Pokemon';
import {PokeApi} from '../api/PokeApi';

interface SearchProps {

}

function Search(){
    const [pokemonNumber, setPokemonNumber] = React.useState<string|undefined>(undefined);
    const [pokemon,setPokemon]=React.useState<Pokemon|undefined>(undefined);
    const [loading,setLoading]=React.useState<boolean>(false);
    const [error,setError]=React.useState<string|undefined>(undefined);
    function buscar(){
    setLoading(true);
    setError(undefined);
    PokeApi.getPokemonById(pokemonNumber).then((response)=>{
        setPokemon(response.data);
        setLoading(false);
    }).catch((error)=>{
        console.log(error)
        setLoading(false);
        setError("Pokemon no encontrado");
    });
    }
    return (
    <div className="flex">
        <div className="flex-none w-55 h-14">
            {loading && <p>Cargando...</p>}
            {(!loading && pokemon &&!error) && <>
                <PokemonComponent pokemon={pokemon}></PokemonComponent>
            </>}
            {error && <p>{error}</p>}
        </div>
        <div className="flex-initial w-14 h-14">
            <input onChange={(event)=>{setPokemonNumber(event.target.value)}} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={pokemonNumber}></input>
        </div>
        <div className="flex-initial w-14 h-14">
            <Button label="Buscar" color='green' onClick={()=>buscar()}></Button>
        </div>
    </div>
    );
};

export default Search;
