const express = require('express');
const axios = require('axios').default;

const router = express.Router();

const URL = 'https://api.deezer.com';

router.get('/search/tracks/:track', async (req, res) => {
  try {
    const {
      data: { data: tracks }
    } = await axios.get(`${URL}/search/track?q=${req.params.track}`);
    res.json({ tracks });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
