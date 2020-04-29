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

router.get('/search/playlists/:playlist/:limit', async (req, res) => {
  try {
    const { playlist, limit } = req.params;
    const {
      data: { data: playlists }
    } = await axios.get(
      `${API_URL}/search/playlist?q=${playlist}&limit=${limit}`
    );

    res.status(200).json({ playlists });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/search/users/:user/:limit', async (req, res) => {
  try {
    const { user, limit } = req.params;
    const {
      data: { data: users }
    } = await axios.get(`${API_URL}/search/user?q=${user}&limit=${limit}`);

    res.status(200).json({ users });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/artist/:artistId', async (req, res) => {
  try {
    const { artistId } = req.params;
    const { data: artist } = await axios.get(`${API_URL}/artist/${artistId}`);

    res.status(200).json({ ...artist });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/album/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const { data: album } = await axios.get(`${API_URL}/album/${albumId}`);

    res.status(200).json({ ...album });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/playlist/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { data: playlist } = await axios.get(
      `${API_URL}/playlist/${playlistId}`
    );

    res.status(200).json({ ...playlist });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const { data: user } = await axios.get(`${API_URL}/user/${userId}`);

    res.status(200).json({ ...user });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

export default router;
