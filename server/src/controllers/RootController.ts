import axios from 'axios';
import { Request, Response } from 'express';
import { controller, get } from './decorators';
import { API_URL, ERROR_MESSAGE, statusCodes } from '../utils/helpers';

@controller('')
export class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    res.send({ hello: 'Welcome to this amazing API' });
  }

  @get('/artist/:artistId')
  async getArtist(req: Request, res: Response): Promise<any> {
    try {
      const { artistId } = req.params;
      const { data: artist } = await axios.get(`${API_URL}/artist/${artistId}`);
      res.status(statusCodes.ok).json({ ...artist });
    } catch (err) {
      res.status(statusCodes.unprocessableEntity).send(ERROR_MESSAGE);
    }
  }

  @get('/album/:albumId')
  async getAlbum(req: Request, res: Response): Promise<any> {
    try {
      const { albumId } = req.params;
      const { data: album } = await axios.get(`${API_URL}/album/${albumId}`);
      res.status(statusCodes.ok).json({ ...album });
    } catch (err) {
      res.status(statusCodes.unprocessableEntity).send(ERROR_MESSAGE);
    }
  }
}
