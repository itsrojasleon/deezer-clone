export interface Album {
  id: number;
  title: string;
  cover_medium: string;
}

export interface Artist {
  id: number;
  name: string;
}

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
