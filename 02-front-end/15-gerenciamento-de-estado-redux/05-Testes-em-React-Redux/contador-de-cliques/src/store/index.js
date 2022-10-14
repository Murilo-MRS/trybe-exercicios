// src/store/index.js
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from "@redux-devtools/extension";
import clickReducer from '../reducers';


const rootReducer = combineReducers({ clickReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;