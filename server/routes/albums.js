const express = require('express');
const axios = require('axios').default;

const router = express.Router();

const URL = 'https://api.deezer.com';

router.get('/search/albums/:album', async (req, res) => {
  try {
    const {
      data: { data: albums }
    } = await axios.get(`${URL}/search?q=album:"${req.params.album}"`);
    res.json({ albums });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
