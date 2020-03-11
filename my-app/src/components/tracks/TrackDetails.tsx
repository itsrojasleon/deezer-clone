import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack, Icon } from '../../styles/tracks/TrackDetails';
import { AiFillPlayCircle } from 'react-icons/ai';

interface Props {
  selectTrack: (track: any) => void;
  track: Track;
}

const TrackDetails = ({ track, selectTrack }: Props): JSX.Element => {
  return (
    <StyledTrack onClick={() => selectTrack(track)}>
      {track.album ? <Icon image={track.album.cover_medium} /> : null}
      <AiFillPlayCircle />
      <p>{track.title}</p>
    </StyledTrack>
  );
};
export default TrackDetails;
