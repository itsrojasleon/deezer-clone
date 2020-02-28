import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext } from '../contexts/tracks';
const Tracks = lazy(() => import('../components/tracks/Tracks'));

const Results = () => {
  const { something } = useParams();
  const { fetchTracks } = useContext(TracksContext);

  useEffect(() => {
    fetchTracks({ value: something, limit: 6 });
  }, [something]);

  return (
    <Suspense fallback={<div>LOADING DUDE...</div>}>
      <Tracks />
    </Suspense>
  );
};
export default Results;
