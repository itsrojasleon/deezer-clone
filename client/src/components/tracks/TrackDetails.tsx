import React, { useState } from 'react';
import { Track } from '../../types/Tracks';
import {
  StyledTrack,
  StyledFirstElement
} from '../../styles/tracks/TrackDetails';
import Alert from '../Alert';
import { AiFillPlayCircle, AiFillHeart } from 'react-icons/ai';
import { FiHeart } from 'react-icons/fi';

interface Props {
  selectTrack: (track: any) => void;
  selectFavoriteTrack?: (trackId: string) => void;
  isFavorite: boolean;
  track: Track;
  index?: number;
}

const TrackDetails = ({
  track,
  selectTrack,
  isFavorite,
  selectFavoriteTrack,
  index
}: Props): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderHeart = () => {
    if (isFavorite) {
      return <AiFillHeart className="heart-filled" />;
    }

    if (selectFavoriteTrack) {
      return (
        <FiHeart
          onClick={() => {
            setIsOpen(true);
            selectFavoriteTrack(String(track.id));
          }}
          className="heart"
        />
      );
    }
  };

  return (
    <StyledTrack>
      <StyledFirstElement>
        {track.album ? (
          <img src={track.album.cover_medium} alt={track.album.title} />
        ) : (
          <span>{index}</span>
        )}
        <AiFillPlayCircle onClick={() => selectTrack(track)} className="play" />
        {renderHeart()}
        <p>{track.title}</p>
      </StyledFirstElement>
      <p>{track.artist?.name}</p>
      <p>{track.album?.title}</p>
      {isOpen && <Alert />}
    </StyledTrack>
  );
};

export default TrackDetails;
