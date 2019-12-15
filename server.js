'use strict';
//define packages needed
//require packages
require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

//define port to listen to
const PORT = process.env.PORT || 3000;

app.use(cors());
//define default routes and error
app.use(express.static('./public'));

//define functional routes
app.get('/', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/hello/natalie', (request, response) => {
  response.status(200).send('Hello');
});

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained',
    name: 'Calvin\'s dog, Sadie',
    school: 'ACME School of Airplane Flying'
  }
  response.status(200).json(airplanes);
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

//define listening port and actually listen
app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
