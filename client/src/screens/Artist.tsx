import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import ArtistDetails from '../components/artists/ArtistDetails';

const ArtistScreen = () => {
  const {
    fetchArtist,
    state: { artist }
  } = useContext<State>(TracksContext);
  const { artistId } = useParams();

  useEffect(() => {
    fetchArtist({ value: artistId || '' });
  }, []);

  return (
    <div>
      <ArtistDetails artist={artist} hideLink />
    </div>
  );
};

export default ArtistScreen;
