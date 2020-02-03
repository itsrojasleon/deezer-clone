const express = require('express');
const songsRouter = require('./routes/songs');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(songsRouter);

app.listen(4000, () => {
  console.log('Listening...');
});
