import { Request, Response } from 'express';
import { controller, get } from './decorators';

@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    res.send({ hello: 'Welcome to this amazing API' });
  }
}
