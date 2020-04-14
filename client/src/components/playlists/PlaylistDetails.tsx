import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to={`/playlist/${playlist.id}`}>
        <StyledImage src={playlist.picture_medium} alt={playlist.title} />
        <StyledTitle>{playlist.title}</StyledTitle>
      </Link>
      <StyledNB>
        {playlist.nb_tracks} track{isPlural(playlist.nb_tracks)}
      </StyledNB>
    </div>
  );
};

export default PlaylistDetails;
