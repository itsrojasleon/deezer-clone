import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { User } from '../models/User';

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, 'MY_SECRET_KEY_YOLO', async (err: any, payload: any) => {
    if (err) {
      return res.status(401).send({ error: 'You must be logged in' });
    }

    const { userId } = payload;

    const user = await User.findById(userId);
    // Come here and fix this.
    req.user = user;
    next();
  });
};
