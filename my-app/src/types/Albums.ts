import { Artist } from './Artist';

export interface Album {
  id: number;
  title: string;
  cover_medium: string;
  artist: Artist;
}
