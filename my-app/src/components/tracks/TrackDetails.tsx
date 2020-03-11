import React from 'react';
import { Track } from '../../types/Tracks';
import { StyledTrack } from '../../styles/tracks/TrackDetails';
import { AiFillPlayCircle, AiFillHeart } from 'react-icons/ai';

interface Props {
  selectTrack: (track: any) => void;
  track: Track;
  index?: number;
}

const TrackDetails = ({ track, selectTrack, index }: Props): JSX.Element => {
  return (
    <StyledTrack onClick={() => selectTrack(track)}>
      <div>
        {track.album ? (
          <img src={track.album.cover_medium} alt={track.album.title} />
        ) : (
          <span>{index}</span>
        )}
        <AiFillPlayCircle />
        <i>
          <AiFillHeart />
        </i>
      </div>
      <p>{track.title}</p>
    </StyledTrack>
  );
};
export default TrackDetails;
