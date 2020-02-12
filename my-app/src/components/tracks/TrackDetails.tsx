import React from 'react';
import { Track } from '../../types/Tracks';

const TrackDetails = (props: Track): JSX.Element => {
  return (
    <div>
      <h2>{props.title}</h2>
      <img src={props.album.cover_medium} alt={props.album.title} />
    </div>
  );
};
export default TrackDetails;
