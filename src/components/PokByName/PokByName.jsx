import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemonByName, reset } from '../../features/pokemons/pokemonsSlice';

const PokByName = ({ searchValue }) => {
  const { pok, isLoading, isError, message } = useSelector((state) => state.poks);
  const dispatch = useDispatch();
  const [pokemonInd, setPokemonInd] = useState(null);

  useEffect(() => {
  if (searchValue) {
    console.log(searchValue);
    dispatch(reset())
    dispatch(getPokemonByName(searchValue));
    setPokemonInd(pok)
  }
  }, [searchValue]); // Agregamos searchValue a la lista de dependencias para que se actualice cuando cambie

  useEffect(() => {
    dispatch(reset())
    setPokemonInd(pok);
  }, [pok]);
useEffect(()=>{

},[])
  return (
    <div>
    {isError ? ( // Mostrar "Not Found" si isError es true
      <div>
        <p>{message}</p>
      </div>
    ) : isLoading ? ( // Mostrar "Loading..." si isLoading es true
      <div>
        <p>Loading...</p>
      </div>
    ) : pokemonInd ? ( // Mostrar los datos del pokémon individual si pokemonInd no es null
      <div>
        <h2>{pokemonInd.name}</h2>
        <img src={pokemonInd.sprites.front_default} alt={pokemonInd.name} />
      </div>
    ) : null}
  </div>
);
};

export default PokByName;
