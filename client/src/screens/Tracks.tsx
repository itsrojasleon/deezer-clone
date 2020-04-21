import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import Tracks from '../components/tracks/Tracks';
import { isPlural } from '../utils/isPlural';
import { StyledLength } from '../styles/shared/components/StyledLength';

const TracksScreen = () => {
  const { something } = useParams();
  const {
    state: { tracks },
    fetchTracks
  } = useContext<State>(TracksContext);

  useEffect(() => {
    fetchTracks({ value: something || '', limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledLength>
        {tracks.length} track{isPlural(tracks.length)}
      </StyledLength>
      <Tracks />
    </>
  );
};

export default TracksScreen;
