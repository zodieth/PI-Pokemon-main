import { GET_POKEMONS, GET_POKEMONS_ID } from "./actions";

export let initialState = {
  pokemons: [],
  pokemonById: [],
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
    default:
      return state;
  }
};

export default rootReducer;
