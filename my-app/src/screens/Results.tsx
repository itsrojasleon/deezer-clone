import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext } from '../contexts/tracks';
const Tracks = lazy(() => import('../components/tracks/Tracks'));
const Albums = lazy(() => import('../components/albums/Albums'));
const Artists = lazy(() => import('../components/artists/Artists'));

const Results = () => {
  const { something } = useParams();
  const { fetchTracks, fetchAlbums, fetchArtists } = useContext(TracksContext);

  useEffect(() => {
    fetchTracks({ value: something, limit: 6 });
    fetchAlbums({ value: something, limit: 6 });
    fetchArtists({ value: something, limit: 6 });
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
