import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import Artists from '../components/artists/Artists';

const ArtistsScreen = () => {
  const { something } = useParams();
  const { fetchArtists } = useContext<State>(TracksContext);

  useEffect(() => {
    fetchArtists({ value: something || '', limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Artists />;
};

export default ArtistsScreen;
