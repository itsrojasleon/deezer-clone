import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack } from '../../styles/tracks/TrackDetails';
import { AiFillPlayCircle } from 'react-icons/ai';

interface Props {
  selectTrack: (track: any) => void;
  track: Track;
  index?: number;
}

const TrackDetails = ({ track, selectTrack, index }: Props): JSX.Element => {
  return (
    <StyledTrack onClick={() => selectTrack(track)}>
      {track.album ? (
        <img src={track.album.cover_medium} alt={track.album.title} />
      ) : (
        <span>{index}</span>
      )}
      <AiFillPlayCircle />
      <p>{track.title}</p>
    </StyledTrack>
  );
};
export default TrackDetails;
