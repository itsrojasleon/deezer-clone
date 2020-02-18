import React, { useContext } from 'react';
import { Context as TracksContext } from '../../contexts/tracks';
import TrackDetails from './TrackDetails';
import { Tracks as TrackTypes } from '../../types/Tracks';

interface Props {
  state: TrackTypes;
}

const Tracks = (): JSX.Element => {
  const { state }: Props = useContext(TracksContext);
  return (
    <>
      {state.tracks.map(track => (
        <TrackDetails key={track.id} {...track} />
      ))}
    </>
  );
};
export default Tracks;
