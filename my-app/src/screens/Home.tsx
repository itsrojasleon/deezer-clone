import React, { Suspense, lazy } from 'react';
const SearchBar = lazy(() => import('../components/SearchBar'));
const Tracks = lazy(() => import('../components/tracks/Tracks'));
const Albums = lazy(() => import('../components/albums/Albums'));

const Home: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>LOADING DUDE...</div>}>
      <SearchBar />
      <Tracks />
      <Albums />
    </Suspense>
  );
};
export default Home;
