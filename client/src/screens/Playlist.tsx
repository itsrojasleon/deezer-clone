import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as SearchContext, State } from '../contexts/tracks';
import PlaylistDetails from '../components/playlists/PlaylistDetails';

const Playlist = () => {
  const {
    state: { playlist, isLoading },
    fetchPlaylist
  } = useContext<State>(SearchContext);
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist({ value: playlistId || '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading = Object.keys(playlist).length === 0 && isLoading;

  return (
    <div>
      {loading && <div>Loading...</div>}
      <PlaylistDetails playlist={playlist} />
    </div>
  );
};

export default Playlist;
