import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import ArtistDetails from '../components/artists/ArtistDetails';

const ArtistScreen = () => {
  const {
    fetchArtist,
    state: { artist, isLoading }
  } = useContext<State>(TracksContext);
  const { artistId } = useParams();

  useEffect(() => {
    fetchArtist({ value: artistId || '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading = Object.keys(artist).length === 0 && isLoading;

  return (
    <div>
      {loading && <div>Loading...</div>}
      <ArtistDetails artist={artist} hideLink />
    </div>
  );
};

export default ArtistScreen;
