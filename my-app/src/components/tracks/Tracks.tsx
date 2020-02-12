import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/songs';

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

interface General {
  tracks: Track[];
}
interface Props {
  state: General;
}

const Tracks = (): JSX.Element => {
  const { state }: Props = useContext(TracksContext);
  console.log();
  return (
    <div>
      {state.tracks.map(track => (
        <div key={track.id}>
          <h2>{track.title}</h2>
          <img src={track.album.cover_medium} alt={track.album.title} />
        </div>
      ))}
    </div>
  );
};
export default Tracks;
