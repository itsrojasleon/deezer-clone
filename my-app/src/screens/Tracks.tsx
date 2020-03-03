import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext } from '../contexts/tracks';
import Tracks from '../components/tracks/Tracks';

const TracksScreen = () => {
  const { something } = useParams();
  const { fetchTracks } = useContext(TracksContext);

  useEffect(() => {
    fetchTracks({ value: something, limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <Tracks />
    </div>
  );
};
export default TracksScreen;
