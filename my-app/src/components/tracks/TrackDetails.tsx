import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack, Icon } from '../../styles/tracks/TrackDetails';
import { AiFillPlayCircle } from 'react-icons/ai';

interface Props {
  selectTrack: (track: any) => void;
  track: Track;
}

const TrackDetails = (props: Props): JSX.Element => {
  return (
    <StyledTrack onClick={() => props.selectTrack(props.track)}>
      <Icon image={props.track.album.cover_medium} />
      <AiFillPlayCircle />
      <p>{props.track.title}</p>
    </StyledTrack>
  );
};
export default TrackDetails;
