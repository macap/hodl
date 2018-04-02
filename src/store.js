import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';

import wallet from './reducers/wallet';
import rates from './reducers/rates';
import app from './reducers/app';

const client = axios.create({ baseURL: 'https://api.coindesk.com/v1/bpi/', responseType: 'json' });

const reducers = combineReducers({
  wallet,
  rates,
  app,
});

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(applyMiddleware(axiosMiddleware(client), thunk));
export default createStore(reducers, enhancers);
