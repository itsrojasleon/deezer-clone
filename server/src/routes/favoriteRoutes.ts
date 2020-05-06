import express from 'express';
import axios from 'axios';
import { Favorite } from '../models/Favorite';
import requireAuth from '../middlewares/requireAuth';

const API_URL = 'https://api.deezer.com';

const router = express.Router();

router.get('/favorites', requireAuth, async (req, res) => {
  const tracksInfo = await Favorite.find({ user_email: req.user.email });

  let tracks = [];

  for (let trackInfo of tracksInfo) {
    const { data } = await axios.get(`${API_URL}/track/${trackInfo.track_id}`);

    tracks.push(data);
  }

  res.json(tracks);
});

router.post('/favorites', requireAuth, async (req, res) => {
  try {
    const tracksLength = Favorite.countDocuments();

    if (tracksLength > 9) {
      return res.status(422).send('You only can save 10 tracks per user');
    }

    const favorite = await new Favorite({
      user_email: req.user.email,
      track_id: req.body.trackId
    });

    await favorite.save();

    res.status(200).send(favorite);
  } catch (err) {
    res.status(422).send('Something went wrong');
  }
});

export default router;
