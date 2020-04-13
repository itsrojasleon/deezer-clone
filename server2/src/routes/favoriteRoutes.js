import express from 'express';
import { Favorite } from '../models/Favorite';
import requireAuth from '../middlewares/requireAuth';

const router = express.Router();

router.get('/favorites', requireAuth, async (req, res) => {
  const tracks = await Favorite.find({ user_email: req.user.email });
  res.send(tracks);
});

router.post('/favorites', requireAuth, async (req, res) => {
  try {
    const favorite = await new Favorite({
      user_email: req.user.email,
      track_id: req.body.trackId
    });

    console.log(favorite);
    await favorite.save();

    res.status(200).send(favorite);
  } catch (err) {
    res.status(422).send('Something went wrong');
  }
});

export default router;
