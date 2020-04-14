import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import PlaylistDetails from './PlaylistDetails';
import Subtitle from '../Subtitle';
import { StyledContainer } from '../../styles/playlists/Playlists';

const Playlists = (): JSX.Element => {
  const { state } = useContext<TrackState>(TracksContext);

  return (
    <>
      {state.playlists.length ? (
        <Subtitle title="Playlists" type="playlists" />
      ) : null}

      <StyledContainer>
        {state.playlists.map((playlist) => (
          <PlaylistDetails key={playlist.id} playlist={playlist} />
        ))}
      </StyledContainer>
    </>
  );
};

export default Playlists;
