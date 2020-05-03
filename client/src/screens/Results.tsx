import React, { useEffect, useContext, Suspense, lazy } from 'react';
import { useParams } from 'react-router-dom';
import {
  Context as TracksContext,
  State as TrackState
} from '../contexts/tracks';
import {
  Context as FavoriteContext,
  State as FavoriteState
} from '../contexts/favorites';
import Subtitle from '../components/Subtitle';
const Tracks = lazy(() => import('../components/tracks/Tracks'));
const Albums = lazy(() => import('../components/albums/Albums'));
const Artists = lazy(() => import('../components/artists/Artists'));
const Playlists = lazy(() => import('../components/playlists/Playlists'));
const Users = lazy(() => import('../components/users/User'));
const Podcasts = lazy(() => import('../components/podcasts/Podcasts'));

const Results = () => {
  const { something } = useParams();
  const {
    fetchTracks,
    fetchAlbums,
    fetchArtists,
    fetchPlaylists,
    fetchUsers,
    fetchPodcasts
  } = useContext<TrackState>(TracksContext);
  const { fetchFavorites } = useContext<FavoriteState>(FavoriteContext);

  useEffect(() => {
    fetchTracks({ value: something || '', limit: 6 });
    fetchAlbums({ value: something || '', limit: 5 });
    fetchArtists({ value: something || '', limit: 5 });
    fetchPlaylists({ value: something || '', limit: 5 });
    fetchUsers({ value: something || '', limit: 5 });
    fetchPodcasts({value: something || '', limit: 5})

    fetchFavorites();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [something]);

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <Subtitle title="Tracks" />
      <Tracks />
      <Subtitle title="Albums" />
      <Albums />
      <Subtitle title="Artists" />
      <Artists />
      <Subtitle title="Playlists" />
      <Playlists />
      <Subtitle title="Users" />
      <Users />
      <Subtitle title="Podcasts" />
      <Podcasts />
    </Suspense>
  );
};

export default Results;
