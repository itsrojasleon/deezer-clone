const express = require('express');
const axios = require('axios').default;

const router = express.Router();

const URL = 'https://api.deezer.com';

router.get('/search/tracks/:track/:limit', async (req, res) => {
  try {
    const {
      data: { data: tracks }
    } = await axios.get(
      `${URL}/search/track?q=${req.params.track}&limit=${req.params.limit}`
    );
    res.json({ tracks });
  } catch (err) {
    res.send(err.message);
  }
});

router.get('/search/albums/:album/:limit', async (req, res) => {
  try {
    const {
      data: { data: albums }
    } = await axios.get(
      `${URL}/search/album?q=${req.params.album}&limit=${req.params.limit}`
    );
    res.json({ albums });
  } catch (err) {
    res.send(err.message);
  }
});

router.get('/search/artists/:artist/:limit', async (req, res) => {
  try {
    const {
      data: { data: artists }
    } = await axios.get(
      `${URL}/search/artist?q=${req.params.artist}&limit=${req.params.limit}`
    );
    res.json({ artists });
  } catch (err) {
    res.send(err.message);
  }
});

router.get('/artist/:artistId', async (req, res) => {
  try {
    const { data: artist } = await axios.get(
      `${URL}/artist/${req.params.artistId}`
    );
    res.json({ ...artist });
  } catch (err) {
    res.send(err.message);
  }
});

router.get('/album/:albumId', async (req, res) => {
  try {
    const { data: album } = await axios.get(
      `${URL}/album/${req.params.albumId}`
    );
    res.json({ ...album });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
