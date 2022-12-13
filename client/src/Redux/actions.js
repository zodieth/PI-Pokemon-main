import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_ID = "GET_POKEMONS_ID";
export const GET_POKEMONS_NAME = "GET_POKEMONS_NAME";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMONS, payload: pokemons.data[0] });
  };
};

export const getPokemonId = (id) => {
  return async (dispatch) => {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch({ type: GET_POKEMONS_ID, payload: pokemon.data });
    console.log(pokemon);
  };
};

export const searchName = (name) => {
  return async (dispatch) => {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/${name}`);
    dispatch({ type: GET_POKEMONS_NAME, payload: pokemon.data });
  };
};

// export const createRecipe = (payload) => {
//   return {
//     type: CREATE_RECIPE,
//     payload,
//   };
// };
