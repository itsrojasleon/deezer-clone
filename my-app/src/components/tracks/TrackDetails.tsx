import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack, StyledImage } from '../../styles/tracks/TrackDetails';

interface Props {
  selectTrack: (track: any) => void;
  track: Track;
}

const TrackDetails = (props: Props): JSX.Element => {
  return (
    <StyledTrack onClick={() => props.selectTrack(props.track)}>
      <h2>{props.track.title}</h2>
      <StyledImage
        src={props.track.album.cover_medium}
        alt={props.track.album.title}
      />
    </StyledTrack>
  );
};
export default TrackDetails;
