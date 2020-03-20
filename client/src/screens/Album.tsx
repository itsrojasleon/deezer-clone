import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import AlbumDetails from '../components/albums/AlbumDetails';

const AlbumScreen = () => {
  const {
    state: { album },
    fetchAlbum
  } = useContext<State>(TracksContext);
  const { albumId } = useParams();
  useEffect(() => {
    fetchAlbum({ value: albumId || '' });
  }, []);

  return (
    <div>
      <AlbumDetails album={album} hideLink />
    </div>
  );
};
export default AlbumScreen;
