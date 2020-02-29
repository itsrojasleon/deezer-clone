import React from 'react';
import { Artist } from '../../types/Artist';

interface Props {
  artist: Artist;
}

const ArtistDetails = ({ artist }: Props) => {
  return (
    <div>
      <div>{artist.name}</div>
    </div>
  );
};
export default ArtistDetails;
