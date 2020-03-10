import React from 'react';
import { Link } from 'react-router-dom';
import { Album } from '../../types/Albums';
import { StyledAlbum } from '../../styles/albums/AlbumDetails';

interface Props {
  album: Album;
  hideLink?: boolean;
}

const AlbumDetails = ({ album, hideLink }: Props) => {
  return (
    <StyledAlbum>
      {hideLink ? (
        <>
          <img src={album.cover_medium} alt={album.title} />
          <p>{album.title}</p>
        </>
      ) : (
        <Link to={`/album/${album.id}`}>
          <img src={album.cover_medium} alt={album.title} />
          <p>{album.title}</p>
        </Link>
      )}
    </StyledAlbum>
  );
};
export default AlbumDetails;
