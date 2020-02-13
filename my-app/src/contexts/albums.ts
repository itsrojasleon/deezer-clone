import React from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

enum ActionType {
  FetchAlbums = 'fetch_album',
  Error = 'error'
}

interface AlbumState {
  albums: [];
  error: '';
}
interface AlbumActions {
  type: ActionType;
  payload: any;
}

const albumsReducer: React.Reducer<AlbumState, AlbumActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchAlbums:
      return { ...state, albums: action.payload };
    case ActionType.Error:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const fetchAlbums = (dispatch: any) => async (value: string) => {
  try {
    const {
      data: { albums }
    } = await roslenAPI.get(`/search/albums/${value}`);
    console.log(albums);
    dispatch({ type: ActionType.FetchAlbums, payload: albums });
  } catch (err) {
    console.log('Something went wrong');
    dispatch({ type: ActionType.Error, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  albumsReducer,
  { fetchAlbums },
  { albums: [], error: '' }
);
