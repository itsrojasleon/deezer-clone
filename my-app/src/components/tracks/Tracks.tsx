import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/tracks';
import { Context as PlayerContext } from '../../contexts/player';
import TrackDetails from './TrackDetails';
import Subtitle from '../Subtitile';
import { Tracks as TrackTypes } from '../../types/Tracks';
import { StyledTracks } from '../../styles/tracks/Tracks';

interface Props {
  state: TrackTypes;
}

const Tracks = (): JSX.Element => {
  const { state }: Props = useContext(TracksContext);
  const { selectTrack } = useContext(PlayerContext);

  return (
    <StyledTracks>
      {state.tracks.length ? <Subtitle title="Tracks" /> : null}
      {state.tracks.map(track => (
        <TrackDetails selectTrack={selectTrack} key={track.id} track={track} />
      ))}
    </StyledTracks>
  );
};
export default Tracks;
