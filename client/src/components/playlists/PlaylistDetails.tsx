import React from 'react';
import {
  StyledImage,
  StyledTitle,
  StyledNB
} from '../../styles/playlists/PlaylistDetails';
import { Playlist } from '../../types/Playlist';
import { isPlural } from '../../utils/isPlural';

interface Props {
  playlist: Playlist;
}

const PlaylistDetails = ({ playlist }: Props) => {
  return (
    <div>
      <StyledImage src={playlist.picture_medium} alt={playlist.title} />
      <StyledTitle>{playlist.title}</StyledTitle>
      <StyledNB>
        {playlist.nb_tracks} track{isPlural(playlist.nb_tracks)}
      </StyledNB>
    </div>
  );
};

export default PlaylistDetails;
