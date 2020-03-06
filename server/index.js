const express = require('express');
const mongoose = require('mongoose');
const tracksRouter = require('./routes/tracks');
const bodyParser = require('body-parser');
const cors = require('cors');

require('./models/User');

mongoose.connect(
  'mongodb://rojasleon:Lionelmessi10@ds163294.mlab.com:63294/deezer-clone',
  { useNewUrlParser: true }
);

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(tracksRouter);

app.listen(4000, () => {
  console.log('Listening...');
});
