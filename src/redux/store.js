import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import wallet from './reducers/wallet';
import rates from './reducers/rates';
import app from './reducers/app';

const client = axios.create({ baseURL: 'https://api.coindesk.com/v1/bpi/', responseType: 'json' });


export const history = createHistory();

const reducers = combineReducers({
  wallet,
  rates,
  app,
  router: routerReducer,
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(
  applyMiddleware(axiosMiddleware(client), thunk, routerMiddleware(history)),
);
export const store = createStore(reducers, enhancers);
