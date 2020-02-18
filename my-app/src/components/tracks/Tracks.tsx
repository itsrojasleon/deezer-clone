import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/tracks';
import TrackDetails from './TrackDetails';
import { Tracks as TrackTypes } from '../../types/Tracks';
import { StyledTracks } from '../../styles/tracks/Tracks';

interface Props {
  state: TrackTypes;
}

const Tracks = (): JSX.Element => {
  const { state }: Props = useContext(TracksContext);
  return (
    <StyledTracks>
      {state.tracks.map(track => (
        <TrackDetails key={track.id} {...track} />
      ))}
    </StyledTracks>
  );
};
export default Tracks;
