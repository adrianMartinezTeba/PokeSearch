import axios from "axios";

const getAllPokemons = async (offset) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=20`);
    return res.data;
};

const getPokemonByName = async (name) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    return res.data;
};

const pokemonsService = {
    getAllPokemons,
    getPokemonByName
};

export default pokemonsService;
