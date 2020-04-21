import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TracksState
} from '../../contexts/tracks';
import {
  Context as PlayerContext,
  State as PlayerState
} from '../../contexts/player';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../../contexts/favorites';
import TrackDetails from './TrackDetails';
import { Track as TrackTypes } from '../../types/Tracks';

const Tracks = (): JSX.Element => {
  const { state } = useContext<TracksState>(TracksContext);
  const { selectTrack } = useContext<PlayerState>(PlayerContext);
  const {
    state: { favorites },
    createFavorite
  } = useContext<FavoriteState>(FavoriteContext);

  // Get only the track id to see if is already marked as a favorite track
  let ids = favorites.map((fav) => fav.id);

  return (
    <>
      {state.tracks
        .filter((track: TrackTypes) => track.preview !== null)
        .map((track: TrackTypes) => (
          <TrackDetails
            selectTrack={selectTrack}
            selectFavoriteTrack={createFavorite}
            isFavorite={ids.includes(track.id)}
            key={track.id}
            track={track}
          />
        ))}
    </>
  );
};

export default Tracks;
