import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as SearchContext, State } from '../contexts/tracks';

const Playlist = () => {
  const { fetchPlaylist } = useContext<State>(SearchContext);
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist({ value: playlistId || '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div>Personal playlist</div>;
};

export default Playlist;
