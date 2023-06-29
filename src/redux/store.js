import {createStore , applyMiddleware , compose} from 'redux';
// import rootReducer from './reducer';
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
// import { Reducer } from 'redux';
import reducer from './reducer';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunkMiddleware ))) 



const store = createStore(reducer , applyMiddleware(thunk))

export default store