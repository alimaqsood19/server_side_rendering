import express from 'express';
import renderer from './helpers/renderer';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(renderer()); //Calls our renderer function, which  renders the Home component into a string, stick into our
  //html template in helpers folder
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
