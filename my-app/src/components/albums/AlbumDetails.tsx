import React from 'react';
import { Album } from '../../types/Albums';
import { StyledAlbum } from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
}

const AlbumDetails = ({ album }: Props) => {
  return (
    <StyledAlbum>
      <img src={album.cover_medium} alt={album.title} />
      <p>{album.title}</p>
    </StyledAlbum>
  );
};
export default AlbumDetails;
