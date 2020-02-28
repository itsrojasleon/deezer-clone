import { Album } from './Albums';
import { Artist } from './Artist';

export interface Track {
  id: number;
  title: string;
  preview: string;
  artist: Artist;
  album: Album;
}

export interface Tracks {
  tracks: Track[];
}
