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

router.get('/search/podcasts/:podcast/:limit', async (req, res) => {
  try {
    const { podcast, limit } = req.params;
    const {
      data: { data: podcasts }
    } = await axios.get(
      `${API_URL}/search/podcast?q=${podcast}&limit=${limit}`
    );

    res.status(200).json({ podcasts });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/artist/:artistId', async (req, res) => {
  try {
    const { data: artist } = await axios.get(
      `${API_URL}/artist/${req.params.artistId}`
    );

    res.status(200).json({ ...artist });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/album/:albumId', async (req, res) => {
  try {
    const { data: album } = await axios.get(
      `${API_URL}/album/${req.params.albumId}`
    );

    res.status(200).json({ ...album });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/playlist/:playlistId', async (req, res) => {
  try {
    const { data: playlist } = await axios.get(
      `${API_URL}/playlist/${req.params.playlistId}`
    );

    res.status(200).json({ ...playlist });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/user/:userId', async (req, res) => {
  try {
    const { data: user } = await axios.get(
      `${API_URL}/user/${req.params.userId}`
    );

    res.status(200).json({ ...user });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

router.get('/podcast/:podcastId', async (req, res) => {
  try {
    const { data: podcast } = await axios.get(
      `${API_URL}/podcast/${req.params.podcastId}`
    );

    res.status(200).json({ ...podcast });
  } catch (err) {
    res.status(422).send(err.message);
  }
});

export default router;
