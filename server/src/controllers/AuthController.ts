import mongoose from 'mongoose';
import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';
import { ERROR_MESSAGE } from '../utils/helpers';

const User = mongoose.model('users');

@controller('/auth')
export class AuthController {
  @post('/signup')
  @bodyValidator('id', 'username')
  async getLogin(req: Request, res: Response): Promise<any> {
    const { id, username } = req.body;

    if (id === 'hey' && username === 'hey') {
      const newUser = new User({ id, username });
      await newUser.save();
      console.log('everything good bro');
    }

    res.status(422).send(ERROR_MESSAGE);
  }
}
