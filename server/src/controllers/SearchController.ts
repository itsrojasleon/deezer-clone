import axios from 'axios';
import { Request, Response } from 'express';
import { controller, get } from './decorators';
import { API_URL, ERROR_MESSAGE, statusCodes } from '../utils/helpers';

@controller('/search')
export class TracksController {
  @get('/tracks/:track/:limit')
  async getTracks(req: Request, res: Response) {
    try {
      const { track, limit } = req.params;
      const {
        data: { data: tracks }
      } = await axios.get(`${API_URL}/search/track?q=${track}&limit=${limit}`);
      res.status(statusCodes.ok).json({ tracks });
    } catch (err) {
      res.status(statusCodes.unprocessableEntity).send(ERROR_MESSAGE);
    }
  }

  @get('/artists/:artist/:limit')
  async getArtists(req: Request, res: Response) {
    try {
      const { artist, limit } = req.params;
      const {
        data: { data: artists }
      } = await axios.get(
        `${API_URL}/search/artist?q=${artist}&limit=${limit}`
      );
      res.status(statusCodes.ok).json({ artists });
    } catch (err) {
      res.status(statusCodes.unprocessableEntity).send(ERROR_MESSAGE);
    }
  }

  @get('/albums/:album/:limit')
  async getAlbums(req: Request, res: Response) {
    try {
      const { album, limit } = req.params;
      const {
        data: { data: albums }
      } = await axios.get(`${API_URL}/search/album?q=${album}&limit=${limit}`);
      res.status(statusCodes.ok).json({ albums });
    } catch (err) {
      res.status(statusCodes.unprocessableEntity).send(ERROR_MESSAGE);
    }
  }
}
