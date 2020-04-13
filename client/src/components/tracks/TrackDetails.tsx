import React from 'react';
import { Track } from '../../types/Tracks';
import {
  StyledTrack,
  StyledFirstElement
} from '../../styles/tracks/TrackDetails';
import { AiFillPlayCircle } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

interface Props {
  selectTrack: (track: any) => void;
  selectFavoriteTrack?: (trackId: string) => void;
  track: Track;
  index?: number;
}

const TrackDetails = ({
  track,
  selectTrack,
  selectFavoriteTrack,
  index
}: Props): JSX.Element => {
  return (
    <StyledTrack>
      <StyledFirstElement>
        {track.album ? (
          <img src={track.album.cover_medium} alt={track.album.title} />
        ) : (
          <span>{index}</span>
        )}
        <AiFillPlayCircle onClick={() => selectTrack(track)} className="play" />
        {selectFavoriteTrack && (
          <FiHeart
            onClick={() => selectFavoriteTrack(String(track.id))}
            className="heart"
          />
        )}
        <p>{track.title}</p>
      </StyledFirstElement>
      <p>{track.artist?.name}</p>
      <p>{track.album?.title}</p>
    </StyledTrack>
  );
};

export default TrackDetails;
