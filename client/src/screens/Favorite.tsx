import React, { useEffect, useContext } from 'react';
import { Context as FavoriteContext, State } from '../contexts/favorites';

const FavoriteScreen: React.FC = (): JSX.Element => {
  const {
    state: { favorties },
    fetchFavorites
  } = useContext<State>(FavoriteContext);

  useEffect(() => {
    fetchFavorites();
  }, []);

  console.log(favorties);

  return (
    <div>
      <div>Favorites</div>
    </div>
  );
};

export default FavoriteScreen;
