const express = require('express');
const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const Home = require('./client/components/Home').default;
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const content = renderToString(<Home />); //This is the component we want to render as a string
  //JSX gets converted to ES5 code before it gets rendered to the users screen, so we need to compile this as we would usually on our client side server
  //Webpack -> Babel -> bundle.js (normally done on client side) but can also be done on server side
  res.send(content);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});