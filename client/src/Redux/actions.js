import axios from "axios";
export const GET_POKEMONS = "GET_POKEMONS";
export const GET_POKEMONS_ID = "GET_POKEMONS_ID";
export const GET_POKEMONS_NAME = "GET_POKEMONS_NAME";

export const getAllPokemons = () => {
  return async (dispatch) => {
    const pokemons = await axios.get("http://localhost:3001/pokemons");
    dispatch({ type: GET_POKEMONS, payload: pokemons.data });
  };
};

export const getPokemonId = (id) => {
  return async (dispatch) => {
    const pokemon = await axios.get(`http://localhost:3001/pokemons/id/${id}`);
    // console.log("aaaa", pokemon);
    dispatch({ type: GET_POKEMONS_ID, payload: pokemon.data });
  };
};

export const searchName = (name) => {
  return async (dispatch) => {
    const pokemon = await axios.get(
      `http://localhost:3001/pokemons?name=${name}`
    );
    dispatch({ type: GET_POKEMONS_NAME, payload: pokemon.data });
  };
};

// export const createRecipe = (payload) => {
//   return {
//     type: CREATE_RECIPE,
//     payload,
//   };
// };
