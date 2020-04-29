import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/Albums';
import {
  StyledAlbum,
  StyledTitle,
  StyledArtistName
} from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
}

const AlbumDetails = ({ album }: Props) => {
  return (
    <StyledAlbum>
      <Link to={`/album/${album.id}`}>
        <img src={album.cover_medium} alt={album.title} />
        <StyledTitle>{album.title}</StyledTitle>
        <StyledArtistName>By {album.artist.name}</StyledArtistName>
      </Link>
    </StyledAlbum>
  );
};

export default AlbumDetails;
