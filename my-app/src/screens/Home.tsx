import React, { useContext } from 'react';
import SearchBar from '../components/SearchBar';
import { Context as TracksContext } from '../contexts/songs';

const Home: React.FC = (): JSX.Element => {
  const { state, fetchTracks } = useContext(TracksContext);
  console.log(state);
  return <SearchBar fetchTracks={fetchTracks} />;
};
export default Home;
