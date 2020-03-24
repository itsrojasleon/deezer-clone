import axios from 'axios';
import { Request, Response } from 'express';
import { controller, get } from './decorators';
import { API_URL, ERROR_MESSAGE, statusCodes } from '../utils/helpers';

@controller('/api')
export class ApiController {
  @get('/current_user')
  getCurrentUser(req: Request, res: Response) {
    res.send(req.user);
  }
}
