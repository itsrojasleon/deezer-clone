import React, { useEffect, useContext } from 'react';
import { Context as SearchContext, State } from '../contexts/tracks';
import { useParams } from 'react-router-dom';

const Playlists = () => {
  const { something } = useParams();
  const { fetchPlaylists } = useContext<State>(SearchContext);

  useEffect(() => {
    fetchPlaylists({ value: something || '' });
  }, []);

  return (
    <div>
      <div>Hey Playlist</div>
    </div>
  );
};

export default Playlists;
