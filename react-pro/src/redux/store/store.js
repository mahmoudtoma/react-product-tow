import { createStore } from "redux";
import { moviesReducer } from "../reducer/movieReducer"
import { composeWithDevTools } from 'redux-devtools-extension';

// create store
export const store = createStore(moviesReducer,composeWithDevTools())