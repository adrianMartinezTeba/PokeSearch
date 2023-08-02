import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getPokemonByName } from "../../features/pokemons/pokemonsSlice";
import './AllPokemons.scss'
import { useNavigate } from "react-router-dom";
const AllPokemons = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { poks, isLoading, pok } = useSelector((state) => state.poks);
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    dispatch(getAllPokemons(offset));
    console.log(pok);
  }, [offset]);

  const handlePrevPage = () => {
    setOffset(offset - 20)
  };

  const handleNextPage = () => {
    setOffset(offset + 20)
  };
  const handlePokemonClick = async (name) => {
    // Actualizar el estado con el nombre del pokémon seleccionado
    await dispatch(getPokemonByName(name));
  
    // Navegar a la ruta /pokInd
    navigate("/pokInd");
  };
  return (
    <div>
      <div className="">
        <div className="div-container">
          <div>
            {poks.map((pokemon) => (
              <div key={pokemon.id} onClick={() => handlePokemonClick(pokemon.name)}>
                <p>{pokemon.name}</p>
              </div>
            ))}
          </div>
          <div>
            <button onClick={handlePrevPage} disabled={offset === 0}>
              Prev
            </button>
            <button onClick={handleNextPage} disabled={offset >= 1000}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPokemons;
