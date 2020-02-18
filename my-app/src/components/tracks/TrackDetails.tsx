import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack, StyledImage } from '../../styles/tracks/TrackDetails';

const TrackDetails = (props: Track): JSX.Element => {
  return (
    <StyledTrack>
      <h2>{props.title}</h2>
      <StyledImage src={props.album.cover_medium} alt={props.album.title} />
    </StyledTrack>
  );
};
export default TrackDetails;
