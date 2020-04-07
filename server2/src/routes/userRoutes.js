import express from 'express';
import { User } from '../models/User';

const router = express.Router();

router.post('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const newData = req.body;
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { ...newData },
      { upsert: true }
    );
    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(422).send(err.message);
  }
});

export default router;
