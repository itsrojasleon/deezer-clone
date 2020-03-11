import { Artist } from './Artist';
import { Track } from './Tracks';

export interface Album {
  id: number;
  title: string;
  cover_medium: string;
  artist: Artist;
  tracks: { data: Track[] };
}
