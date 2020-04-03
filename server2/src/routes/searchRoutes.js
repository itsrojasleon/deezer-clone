import express from 'express';
import axios from 'axios';

const API_URL = 'https://api.deezer.com';

const router = express.Router();

router.get('/search/tracks/:track/:limit', async (req, res) => {
  try {
    const { track, limit } = req.params;
    const {
      data: { data: tracks }
    } = await axios.get(`${API_URL}/search/track?q=${track}&limit=${limit}`);
    res.status(200).json({ tracks, user: req.user });
  } catch (err) {
    res.status(403).send('Something went wrong');
  }
});

router.get('/search/artists/:artist/:limit', async (req, res) => {
  try {
    const { artist, limit } = req.params;
    const {
      data: { data: artists }
    } = await axios.get(`${API_URL}/search/artist?q=${artist}&limit=${limit}`);
    res.status(200).json({ artists });
  } catch (err) {
    res.status(403).send(ERROR_MESSAGE);
  }
});

router.get('/search/albums/:album/:limit', async (req, res) => {
  try {
    const { album, limit } = req.params;
    const {
      data: { data: albums }
    } = await axios.get(`${API_URL}/search/album?q=${album}&limit=${limit}`);
    res.status(200).json({ albums });
  } catch (err) {
    res.status(403).send(ERROR_MESSAGE);
  }
});

export default router;
