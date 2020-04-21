import React, { useEffect, useContext } from 'react';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../contexts/favorites';
import {
  Context as PlayerContext,
  State as PlayerState
} from '../contexts/player';

import TrackDetails from '../components/tracks/TrackDetails';

const FavoriteScreen = () => {
  const {
    state: { favorites },
    fetchFavorites
  } = useContext<FavoriteState>(FavoriteContext);
  const { selectTrack } = useContext<PlayerState>(PlayerContext);

  useEffect(() => {
    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {favorites.map((track, idx: number) => (
        <TrackDetails
          key={track.id}
          track={track}
          isFavorite
          selectTrack={selectTrack}
          index={idx}
        />
      ))}
    </div>
  );
};

export default FavoriteScreen;
