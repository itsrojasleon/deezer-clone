import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { controller, get, use } from './decorators';
import { API_URL, ERROR_MESSAGE, statusCodes } from '../utils/helpers';

const User = mongoose.model('users');

interface MongoUser {
  id: string;
  googleId: string;
  displayName: string;
  __v: number;
}

@controller('/api')
export class ApiController {
  @get('/current_user')
  getCurrentUser(req: Request, res: Response) {
    res.send(req.user);
  }

  @get('/fetch_user')
  fetchUser(req: Request, res: Response) {
    res.send(req.user);
    // try {
    //   if (req.user) {
    //     // I don't feel quite good doing this, but it works and I'm stressed ("as" keyword)
    //     const { googleId } = req.user as MongoUser;
    //     const user = await User.findOne({ googleId });
    //     if (user) {
    //       return res.status(200).send({ hey: 'sodoskd' });
    //     }
    //     res.send({ not: 'found' });
    //   }
    // } catch (err) {
    //   console.log(err);
    //   console.log(ERROR_MESSAGE);
    // }
  }

  @get('/logout')
  logout(req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}
