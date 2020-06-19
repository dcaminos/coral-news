/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import {name as appName} from './app.json';
import newsReducer from './src/reducers/news';
import userReducer from './src/reducers/user';

const rootReducer = combineReducers({
  news: newsReducer,
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const RNRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => RNRedux);
