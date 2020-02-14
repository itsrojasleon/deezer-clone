import React, { Suspense, lazy } from 'react';
const Tracks = lazy(() => import('../components/tracks/Tracks'));

const Home: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div>LOADING DUDE...</div>}>
      <Tracks />
    </Suspense>
  );
};
export default Home;
