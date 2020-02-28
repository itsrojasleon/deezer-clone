import React from 'react';
import { Album } from '../../types/Albums';
import { StyledAlbum, StyledImage } from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
}

const AlbumDetails = ({ album }: Props) => {
  return (
    <StyledAlbum>
      <StyledImage src={album.cover_medium} alt={album.title} />
      <p>{album.title}</p>
    </StyledAlbum>
  );
};
export default AlbumDetails;
