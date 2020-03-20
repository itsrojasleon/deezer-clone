import axios from 'axios';
import { Request, Response } from 'express';
import { controller, get } from './decorators';

const API_URL = 'https://api.deezer.com';

// This is a bad explanation
// But I'm learning how to use Typescript with Express, so, don't pay in that sense 😊
const ERROR_MESSAGE = 'Something went wrong';

// HTTP Status Codes
const OK = 200;
const UNPROCESSABLE_ENTITY = 422;

@controller('/search')
export class TracksController {
  @get('/tracks/:track/:limit')
  async getTracks(req: Request, res: Response) {
    try {
      const { track, limit } = req.params;
      const {
        data: { data: tracks }
      } = await axios.get(`${API_URL}/search/track?q=${track}&limit=${limit}`);
      res.status(OK).json({ tracks });
    } catch (err) {
      res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
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
      res.status(OK).json({ artists });
    } catch (err) {
      res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
    }
  }

  @get('/albums/:album/:limit')
  async getAlbums(req: Request, res: Response) {
    try {
      const { album, limit } = req.params;
      const {
        data: { data: albums }
      } = await axios.get(`${API_URL}/search/album?q=${album}&limit=${limit}`);
      res.status(OK).json({ albums });
    } catch (err) {
      res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
    }
  }

  // All of these petitions are going to asnwer with "ONE" response (Artist and Album)

  @get('/artist/:artistId')
  async getArtist(req: Request, res: Response) {
    try {
      const { artistId } = req.params;
      const { data: artist } = await axios.get(`${API_URL}/artist/${artistId}`);
      res.status(OK).json({ ...artist });
    } catch (err) {
      res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
    }
  }

  @get('/album/:albumId')
  async getAlbum(req: Request, res: Response) {
    try {
      const { albumId } = req.params;
      const { data: album } = await axios.get(`${API_URL}/album/${albumId}`);
      res.status(OK).json({ ...album });
    } catch (err) {
      res.status(UNPROCESSABLE_ENTITY).send(ERROR_MESSAGE);
    }
  }
}
