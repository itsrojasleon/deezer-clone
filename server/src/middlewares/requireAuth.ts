import { Request, Response, NextFunction } from 'express';
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

  try {
    const payload = jwt.verify(token, 'MY_SECRET_KEY_YOLO') as UserPayload;

    const user = await User.findById(payload.userId);
    req.user = user;
  } catch (err) {}

  next();
};
