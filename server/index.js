const express = require('express');
const tracksRouter = require('./routes/tracks');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(tracksRouter);

app.listen(4000, () => {
  console.log('Listening...');
});
