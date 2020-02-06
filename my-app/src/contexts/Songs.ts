import React from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

enum ActionType {
  FetchSongs = 'fetch_song',
  Error = 'error'
}

interface SongsState {
  songs: [];
  error: '';
}
interface SongActions {
  type: ActionType;
  payload: any;
}

const songsReducer: React.Reducer<SongsState, SongActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchSongs:
      return { ...state, songs: action.payload };
    case ActionType.Error:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const fetchTracks = (dispatch: any) => async (value: string) => {
  try {
    const {
      data: { tracks }
    } = await roslenAPI.get(`/search/${value}`);
    dispatch({ type: 'fetch_song', payload: tracks });
  } catch (err) {
    console.log('Something went wrong');
    dispatch({ type: 'error', payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  { fetchTracks },
  { songs: [], error: '' }
);
