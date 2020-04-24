import React, { memo, useContext } from 'react';
import {
  Context as TracksContext,
  State as TracksState
} from '../../contexts/tracks';
import AlbumDetails from './AlbumDetails';
import { Album } from '../../types/Albums';
import { StyledContainer } from '../../styles/albums/Albums';

const Albums = () => {
  const {
    state: { albums, isLoading }
  } = useContext<TracksState>(TracksContext);

  const loading = albums.length === 0 && isLoading;

  return (
    <>
      {loading && <div>Loading...</div>}
      <StyledContainer>
        {albums.map((album: Album) => (
          <AlbumDetails key={album.id} album={album} />
        ))}
      </StyledContainer>
    </>
  );
};

export default memo(Albums);
