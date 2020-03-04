import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
const Tracks = lazy(() => import('../components/tracks/Tracks'));
const Albums = lazy(() => import('../components/albums/Albums'));
const Artists = lazy(() => import('../components/artists/Artists'));

const Results = () => {
  const { something } = useParams();
  const { fetchTracks, fetchAlbums, fetchArtists } = useContext<State>(
    TracksContext
  );

  useEffect(() => {
    fetchTracks({ value: something || '', limit: 6 });
    fetchAlbums({ value: something || '', limit: 5 });
    fetchArtists({ value: something || '', limit: 5 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [something]);

  return (
    <Suspense fallback={<div>LOADING DUDE...</div>}>
      <Tracks />
      <Albums />
      <Artists />
    </Suspense>
  );
};
export default Results;
