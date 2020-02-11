import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Tracks from '../components/tracks/Tracks';
import { Context as TracksContext } from '../contexts/songs';

const Home: React.FC = (): JSX.Element => {
  const { state, fetchTracks } = useContext(TracksContext);

  return (
    <>
      <SearchBar fetchTracks={fetchTracks} />
      <Tracks tracks={state.tracks} />
    </>
  );
};
export default Home;
