import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import axios from 'axios';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';


import wallet from './reducers/wallet';
import rates from './reducers/rates';
import app from './reducers/app';

const client = axios.create({ baseURL: 'https://api.coindesk.com/v1/bpi/', responseType: 'json' });

const persistConfig = {
  key: 'root',
  storage,
};

export const history = createHistory();

const reducers = combineReducers({
  wallet,
  rates,
  app,
  router: routerReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

// eslint-disable-next-line
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers =
  composeEnhancers(applyMiddleware(axiosMiddleware(client), thunk, routerMiddleware(history)));
export const store = createStore(persistedReducer, enhancers);
export const persistor = persistStore(store);
