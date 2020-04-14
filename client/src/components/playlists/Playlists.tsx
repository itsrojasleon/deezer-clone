import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import { Context as PlayerContext } from '../../contexts/player';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../../contexts/favorites';
// import PlaylistDetails from './PlaylistDetails';
import Subtitle from '../Subtitle';

const Tracks = (): JSX.Element => {
  const { state } = useContext<TrackState>(TracksContext);
  const { selectTrack } = useContext(PlayerContext);
  const { createFavorite } = useContext<FavoriteState>(FavoriteContext);

  return (
    <>
      {state.playlists.length ? (
        <Subtitle title="Playlists" type="playlists" />
      ) : null}

      {state.playlists.map((playlist) => (
        <div key={playlist.id}>{playlist.title}</div>
      ))}
    </>
  );
};

export default Tracks;
