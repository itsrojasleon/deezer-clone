import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import PlaylistDetails from './PlaylistDetails';
import { StyledContainer } from '../../styles/playlists/Playlists';

const Playlists = (): JSX.Element => {
  const {
    state: { playlists, isLoading }
  } = useContext<TrackState>(TracksContext);

  const loading = playlists.length === 0 && isLoading;

  return (
    <>
      {loading && <div>Loading...</div>}
      <StyledContainer>
        {playlists.map((playlist) => (
          <PlaylistDetails key={playlist.id} playlist={playlist} />
        ))}
      </StyledContainer>
    </>
  );
};

export default Playlists;
