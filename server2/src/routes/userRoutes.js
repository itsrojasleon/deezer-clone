import express from 'express';
import { User } from '../models/User';

const router = express.Router();

router.post('/user/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const newData = req.body;
    console.log('New data: ', newData);
    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      { ...newData },
      { upsert: true }
    );
    console.log(updatedUser);

    res.status(200).send(updatedUser);
  } catch (err) {
    res.status(422).send(err.message);
  }
});

export default router;
