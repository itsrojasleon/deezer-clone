import React from 'react';

interface Album {
  id: number;
  title: string;
  cover_medium: string;
}

interface Artist {
  id: number;
  name: string;
}

interface Track {
  id: number;
  title: string;
  preview: string;
  artist: Artist;
  album: Album;
}

interface Props {
  tracks: Track[];
}

const Tracks = ({ tracks }: Props): JSX.Element => {
  return (
    <div>
      {tracks.map(track => (
        <div key={track.id}>
          <h2>{track.title}</h2>
          <img src={track.album.cover_medium} alt={track.album.title} />
        </div>
      ))}
    </div>
  );
};
export default Tracks;
