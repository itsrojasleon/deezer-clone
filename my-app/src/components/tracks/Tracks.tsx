import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/tracks';
import { Context as PlayerContext } from '../../contexts/player';
import TrackDetails from './TrackDetails';
import Subtitle from '../Subtitle';
import { Track as TrackTypes } from '../../types/Tracks';

const Tracks = (): JSX.Element => {
  const { state } = useContext(TracksContext);
  const { selectTrack } = useContext(PlayerContext);

  return (
    <>
      {state.tracks.length ? <Subtitle title="Tracks" type="tracks" /> : null}
      {state.tracks
        .filter((track: TrackTypes) => track.preview !== null)
        .map((track: TrackTypes) => (
          <TrackDetails
            selectTrack={selectTrack}
            key={track.id}
            track={track}
          />
        ))}
    </>
  );
};
export default Tracks;
