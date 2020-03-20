import React, { memo, useContext } from 'react';
import {
  Context as TracksContext,
  State as TracksState
} from '../../contexts/tracks';
import AlbumDetails from './AlbumDetails';
import { Album } from '../../types/Albums';
import Subtitle from '../Subtitle';
import { StyledContainer } from '../../styles/albums/Albums';

const Albums = () => {
  const { state } = useContext<TracksState>(TracksContext);
  return (
    <>
      {state.tracks.length ? <Subtitle title="Albums" type="albums" /> : null}
      <StyledContainer>
        {state.albums.map((album: Album) => (
          <AlbumDetails key={album.id} album={album} />
        ))}
      </StyledContainer>
    </>
  );
};
export default memo(Albums);
