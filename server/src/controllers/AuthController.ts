import passport from 'passport';
import { Request, Response } from 'express';
import { get, controller, bodyValidator, post, use } from './decorators';

@controller('/auth')
export class AuthController {
  @get('/google')
  @use(() => {
    passport.authenticate('google', {
      scope: ['profile', 'email']
    });
  })
  doNothing() {}

  @get('/google/callback')
  @use(() => {
    passport.authenticate('google');
  })
  getCallback(req: Request, res: Response) {
    res.redirect('/');
  }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}
