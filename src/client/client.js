//Startup point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //thunk handles async action creators
import { Provider } from 'react-redux';

const store = createStore(reducers, {}, applyMiddleware(thunk));

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);

// When this code gets rendered on client side, there is already content inside of that div with id Root from the
//server, when we call this ReactDOM.hydrate we are not replacing that code we are adding to it, setuping all the
//event handlers and anything else thats required for React
//React "takes over" the existing rendered apps, binds event handlers, etc through this hydrate method
