import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {
  Context as TracksContext,
  State as TrackState
} from '../contexts/tracks';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../contexts/favorites';
import Tracks from '../components/tracks/Tracks';
import { isPlural } from '../utils/isPlural';
import { StyledLength } from '../styles/shared/components/StyledLength';

const TracksScreen = () => {
  const { something } = useParams();
  const {
    state: { tracks },
    fetchTracks
  } = useContext<TrackState>(TracksContext);
  const { fetchFavorites } = useContext<FavoriteState>(FavoriteContext);

  useEffect(() => {
    fetchTracks({ value: something || '', limit: 20 });
    fetchFavorites();
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
