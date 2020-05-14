import express, { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { body } from 'express-validator';

import { User } from '../models/User';
import { validateRequest } from '../middlewares/validateRequest';
import { BadRequestError } from '../errors/badRequestError';

const router = express.Router();

router.post(
  '/signup',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password')
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage('Password must be between 4 and 20 characters')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new BadRequestError('Email in use');
    }

    const user: any = new User({ email, password });
    await user.save();

    const userJwt = jwt.sign(
      {
        userId: user._id
      },
      'MY_SECRET_KEY_YOLO'
    );

    res.status(201).send({ userJwt });
  }
);

router.post(
  '/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage
  ],
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const existingUser: any = await User.findOne({ email });

    if (!existingUser) {
      throw new BadRequestError('Invalid credentials');
    }

    const passwordsMatch = await existingUser.comparePassword(password);

    if (!passwordsMatch) {
      throw new BadRequestError('Invalid credentials');
    }

    // Generate JWT
    const userJwt = jwt.sign(
      {
        userId: existingUser._id
      },
      'MY_SECRET_KEY_YOLO'
    );

    res.status(200).send({ userJwt });
  }
);

export default router;
