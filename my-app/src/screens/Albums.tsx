import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import Albums from '../components/albums/Albums';

const AlbumsScreen = () => {
  const { something } = useParams();
  const { fetchAlbums } = useContext<State>(TracksContext);

  useEffect(() => {
    fetchAlbums({ value: something || '', limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Albums />;
};
export default AlbumsScreen;
