const express = require('express');
const songsRouter = require('./routes/songs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(songsRouter);

app.listen(4000, () => {
  console.log('Listening...');
});
