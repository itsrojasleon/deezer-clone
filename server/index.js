const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.listen(4000, () => {
  console.log('Listening...');
});
