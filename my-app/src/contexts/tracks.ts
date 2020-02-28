import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';
import { Track } from '../types/Tracks';
import { Album } from '../types/Albums';

enum ActionType {
  FetchedTracks,
  FetchedAlbums,
  IsLoading,
  IsError
}

interface TracksState {
  tracks: Track[];
  albums: Album[];
  isLoading: boolean;
  isError: string;
}
interface SongActions {
  type: ActionType;
  payload?: any;
}

const songsReducer: Reducer<TracksState, SongActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchedTracks:
      return { ...state, tracks: action.payload, isLoading: false };
    case ActionType.FetchedAlbums:
      return { ...state, albums: action.payload, isLoading: false };
    case ActionType.IsLoading:
      return { ...state, isLoading: true };
    case ActionType.IsError:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

interface Params {
  value: number;
  limit: number;
}

const fetchTracks = (dispatch: Dispatch<SongActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.IsLoading });
  try {
    const {
      data: { tracks }
    } = await roslenAPI.get(`/search/tracks/${value}/${limit}`);
    dispatch({ type: ActionType.FetchedTracks, payload: tracks });
  } catch (err) {
    console.log('Something went wrong');
    dispatch({ type: ActionType.IsError, payload: err.message });
  }
};

const fetchAlbums = (dispatch: Dispatch<SongActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.IsLoading });
  try {
    const {
      data: { albums }
    } = await roslenAPI.get(`/search/albums/${value}/${limit}`);
    dispatch({ type: ActionType.FetchedAlbums, payload: albums });
  } catch (err) {
    dispatch({ type: ActionType.IsError, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  { fetchTracks, fetchAlbums },
  { tracks: [], albums: [], isLoading: false, isError: '' }
);
