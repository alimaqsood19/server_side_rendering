import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = createStore(); //redux store for the server side, some logic to initialize and load data into the store before passing to the renderer function
  //'*' express considers all routes, passes all routes to the renderer function where react router will take care of routing for us
  res.send(renderer(req, store)); //Calls our renderer function, which  renders the Home component into a string, stick into our
  //html template in helpers folder
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
