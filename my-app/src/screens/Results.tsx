import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext } from '../contexts/tracks';
const Tracks = lazy(() => import('../components/tracks/Tracks'));
const Albums = lazy(() => import('../components/albums/Albums'));

const Results = () => {
  const { something } = useParams();
  const { fetchTracks, fetchAlbums } = useContext(TracksContext);

  useEffect(() => {
    fetchTracks({ value: something, limit: 6 });
    fetchAlbums({ value: something, limit: 6 });
  }, [something]);

  return (
    <Suspense fallback={<div>LOADING DUDE...</div>}>
      <Tracks />
      <Albums />
    </Suspense>
  );
};
export default Results;
