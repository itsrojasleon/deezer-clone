import React from 'react';
import { StyledPlaylist } from '../../styles/playlists/PlaylistDetails';
import { Playlist } from '../../types/Playlist';

interface Props {
  playlist: Playlist;
}

const PlaylistDetails = ({ playlist }: Props) => {
  return (
    <StyledPlaylist>
      <img src={playlist.picture_medium} alt={playlist.title} />
    </StyledPlaylist>
  );
};

export default PlaylistDetails;
