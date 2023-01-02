import {
  GET_POKEMONS,
  GET_POKEMONS_ID,
  GET_POKEMONS_NAME,
  FILTER_ORDER,
  FILTER_TYPE,
  FILTER_POKEMONS,
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
      } else if (action.payload === "UP") {
        order = copyPokemons.sort((a, b) => {
          if (a.strenght > b.strenght) return 1;
          else return -1;
        });
      } else if (action.payload === "DOWN") {
        order = copyPokemons.sort((a, b) => {
          if (a.strenght > b.strenght) return -1;
          else return -1;
        });
      } else if (action.payload === "ATTACK") {
        order = [...state.pokemons];
      }

      return {
        // ...state,
        pokemons: order,
      };
    }
    case FILTER_TYPE: {
      let copy = [...state.pokemons];
      let types = [];

      copy.map((e) => {
        if (e.type) {
          e.type.forEach((type) => {
            if (type === action.payload) {
              types.push(e);
            }
          });
        } else if (action.payload === "TYPES") {
          types = [...state.pokemons];
        }
        return e.type;
        //capaz esto
      });

      return {
        pokemons: types,
      };
    }
    case FILTER_POKEMONS: {
      let copy = [...state.pokemons];
      let filterPoke;
      if (action.payload === "created") {
        filterPoke = copy.filter((e) => e.id.length > 5);
      }
      if (action.payload === "api") {
        filterPoke = copy.filter((e) => e.id.length < 3);
      }
      if (action.payload === "POKEMONS") {
        filterPoke = [...state.pokemons];
      }
      return {
        pokemons: filterPoke,
      };
    }
    default:
      return state;
  }
};

export default rootReducer;
