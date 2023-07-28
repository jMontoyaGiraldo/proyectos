// export const GET_CHARACTERS = 'GET_CHARACTERS'
import axios from "axios";
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

const URL = 'http://localhost:3001/rickandmorty/fav'

export const addFav = (character) => {
    return async function(dispatch){
      try {
        const { data } = await axios.post(`${URL}`, character)
        return dispatch({
            type:ADD_FAV,
            payload: data
        })
      } catch (error) {
        console.log(error);
      }
       
    }
}

export const removeFav = (id) => {
    return async(dispatch) => {
        try {
            const { data } = await axios.delete(`${URL}/${id}`)

        return dispatch({
            type:REMOVE_FAV,
            payload:data
        })
        } catch (error) {
            console.log(error);
        }
       
    }
}

export const filterCards= (gender) => {
  return { type: FILTER, payload: gender}
};

export const orderCards = (order) => {
  return {type : ORDER , payload: order }
}