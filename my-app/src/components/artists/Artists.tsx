import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/tracks';
import ArtistDetails from './ArtistDetails';
import Subtitle from '../Subtitile';
import { Artist } from '../../types/Artist';

const Artists = () => {
  const { state } = useContext(TracksContext);
  console.log(state);

  return (
    <div>
      {state.artists.length ? <Subtitle title="Artists" /> : null}
      {state.artists.map((artist: Artist) => (
        <ArtistDetails artist={artist} />
      ))}
    </div>
  );
};
export default Artists;
