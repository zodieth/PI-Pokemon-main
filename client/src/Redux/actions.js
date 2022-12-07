import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMONS, payload: pokemons.data });
  };
};
