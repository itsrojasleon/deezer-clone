import passport from 'passport';
import { Request, Response } from 'express';
import { get, controller, use } from './decorators';

@controller('/auth')
export class AuthController {
  @get('/google')
  @use(
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  )
  something() {}

  // @get('/google/callback')
  // @use(passport.authenticate('google', { failureRedirect: '/login' }))
  // login(req: Request, res: Response) {
  //   console.log('HWta is wrong');
  //   res.redirect('/');
  // }

  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.logout();
    res.redirect('/');
  }
}
