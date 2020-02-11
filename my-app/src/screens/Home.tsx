import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import Tracks from '../components/tracks/Tracks';
import { Context as TracksContext } from '../contexts/songs';

const Home: React.FC = (): JSX.Element => {
  const { state, fetchTracks } = useContext(TracksContext);
  console.log(state.songs);
  return (
    <>
      <SearchBar fetchTracks={fetchTracks} />
      <Tracks tracks={state.songs} />
    </>
  );
};
export default Home;
