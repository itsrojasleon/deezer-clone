import { Request, Response, NextFunction } from 'express';
import util from 'util';
import { User } from '../models/User';
import jwt from 'jsonwebtoken';

interface UserPayload {
  userId: string;
  iat: number;
}

declare global {
  namespace Express {
    interface Request {
      user?: any;
    }
  }
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).send({ error: 'You must be logged in' });
  }

  const token = authorization.replace('Bearer ', '');

  console.log(util.inspect(token, false, null, true /* enable colors */));
  console.log(JSON.stringify(token, null, 4));

  try {
    const payload = jwt.verify(token, 'MY_SECRET_KEY_YOLO') as UserPayload;

    const user = await User.findById(payload.userId);
    req.user = user;

    next();
  } catch (err) {
    console.log(err);
  }

  next();
};
