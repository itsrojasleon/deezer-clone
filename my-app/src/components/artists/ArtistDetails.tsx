import React from 'react';
import { Artist } from '../../types/Artist';
import { StyledImage, StyledArtist } from '../../styles/artists/ArtistDetails';

interface Props {
  artist: Artist;
}

const ArtistDetails = ({ artist }: Props) => {
  return (
    <StyledArtist>
      <StyledImage src={artist.picture_medium} alt={artist.name} />
      <p>{artist.name}</p>
    </StyledArtist>
  );
};
export default ArtistDetails;
