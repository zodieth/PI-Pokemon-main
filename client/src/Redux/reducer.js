import {
  GET_POKEMONS,
  GET_POKEMONS_ID,
  GET_POKEMONS_NAME,
  FILTER_ORDER,
} from "./actions";
export let initialState = {
  allPoke: [],
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
        allPoke: action.payload,
      };
    }
    case GET_POKEMONS_ID: {
      return {
        ...state,
        pokemonById: [action.payload],
      };
    }
    case GET_POKEMONS_NAME: {
      return {
        ...state,
        pokemonByName: [action.payload],
      };
    }

    case FILTER_ORDER: {
      let copyPokemons = [...state.pokemons];
      let order;
      if (action.payload === "A-Z") {
        order = copyPokemons.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
          else return -1;
        });
      } else if (action.payload === "Z-A") {
        order = copyPokemons.sort((a, b) => {
          if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
          else return -1;
        });
      } else if (action.payload === "FILTERS") {
        order = [...state.pokemons];
      }

      return {
        // ...state,
        pokemons: order,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
