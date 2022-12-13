import { GET_POKEMONS, GET_POKEMONS_ID, GET_POKEMONS_NAME } from "./actions";
// const { Pokemon } = require("../../../api/src/db");
export let initialState = {
  pokemons: [],
  pokemonById: [],
  pokemonByName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS: {
      return {
        ...state,
        pokemons: action.payload,
      };
    }
    case GET_POKEMONS_ID: {
      return {
        ...state,
        pokemonById: action.payload,
      };
    }
    case GET_POKEMONS_NAME: {
      return {
        ...state,
        pokemonByName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
