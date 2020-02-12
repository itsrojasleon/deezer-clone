import React from 'react';
import SearchBar from '../components/SearchBar';
import Tracks from '../components/tracks/Tracks';

const Home: React.FC = (): JSX.Element => {
  return (
    <>
      <SearchBar />
      <Tracks />
    </>
  );
};
export default Home;
