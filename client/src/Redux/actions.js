import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_ID = "GET_POKEMONS_ID";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMONS, payload: pokemons.data });
  };
};

export const getPokemonId = (id) => {
  return async (dispatch) => {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch({ type: GET_POKEMONS_ID, payload: pokemon.data });
  };
};
