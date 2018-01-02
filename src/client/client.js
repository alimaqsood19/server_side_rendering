//Startup point for the client side application

import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

ReactDOM.hydrate(<Home />, document.querySelector('#root'));

// When this code gets rendered on client side, there is already content inside of that div with id Root from the
//server, when we call this ReactDOM.hydrate we are not replacing that code we are adding to it, setuping all the
//event handlers and anything else thats required for React
