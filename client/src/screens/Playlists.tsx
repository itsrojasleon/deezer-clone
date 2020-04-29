import React, { useEffect, useContext } from 'react';
import { Context as SearchContext, State } from '../contexts/tracks';
import { useParams } from 'react-router-dom';
import Playlists from '../components/playlists/Playlists';

const PlaylistsScreen = () => {
  const { something } = useParams();
  const { fetchPlaylists } = useContext<State>(SearchContext);

  useEffect(() => {
    fetchPlaylists({ value: something || '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Playlists />
    </div>
  );
};

export default PlaylistsScreen;
