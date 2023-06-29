// export const GET_CHARACTERS = 'GET_CHARACTERS'
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = 'FILTER'
export const ORDER = 'ORDER'
// export const getCharacters = () => {
//     return function(dispatch){
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(data => dispatch({type:GET_CHARACTERS , payload : data}))
//     };
// };

export const addFav = (personaje) => {
  return { type: ADD_FAV, payload: personaje };
};

export const removeFav = (id) => {
  return { type: REMOVE_FAV, payload: id };
};

export const filterCards= (gender) => {
  return { type: FILTER, payload: gender}
};

export const orderCards = (order) => {
  return {type : ORDER , payload: order }
}