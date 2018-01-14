//Function that renders our react app and returns a string
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';
import { Provider } from 'react-redux';

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  ); //This is the component we want to render as a string
  //JSX gets converted to ES5 code before it gets rendered to the users screen, so we need to compile this as we would usually on our client side server
  //Webpack -> Babel -> bundle.js (normally done on client side) but can also be done on server side
  return `
    <html>
      <head>
        <body>
          <div id="root">${content}</div>
          <script src="bundle.js"></script> 
        </body>
      </head>
    </html
  `;
  //Express automatically sees that we use the express.static middleware serving up the public folder with all its contents
  //Will look in public folder to see if bundle.js exists which it will and serve that up, thats why we dont need to append
  //something like "public/bundle.js" for example, express will grab it for us
};
