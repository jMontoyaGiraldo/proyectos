import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialstate = {
  favorites: [],
  allCharacters: [],
};

const reducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    // case GET_CHARACTERS :
    //     return{...state, characters: action.payload}

    case ADD_FAV:
      return {
        ...state,
        favorites: payload,
        allCharacters: payload
      };

    case REMOVE_FAV:
      return { ...state, allCharacters:payload };

    case FILTER:
      return {
        ...state,
        favorites: state.allCharacters.filter((char) => char.gender === payload)
      };

    case ORDER :
      let todos = state.allCharacters;
      if(payload === 'A'){
      todos.sort((a , b) => a.id - b.id)
      } else if (payload === 'D'){
        todos.sort((a , b) => b.id - a.id  )
      }
      return {
        ...state,
        favorites: todos
      }

    default:
      return { ...state };
  }
};

export default reducer;
