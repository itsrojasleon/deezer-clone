import React, { useContext } from 'react';
import { Context as AlbumsContext } from '../../contexts/albums';

const Albums = () => {
  const { state } = useContext(AlbumsContext);
  console.log(state.albums);
  return <div></div>;
};
export default Albums;
