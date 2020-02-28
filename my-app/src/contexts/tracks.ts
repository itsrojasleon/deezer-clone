import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

enum ActionType {
  FetchedTracks = 'fetched_tracks',
  IsLoading = 'is_loading',
  IsError = 'is_error'
}

interface SongsState {
  tracks: [];
  error: '';
}
interface SongActions {
  type: ActionType;
  payload?: any;
}

const songsReducer: Reducer<SongsState, SongActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchedTracks:
      return { ...state, tracks: action.payload, isLoading: false };
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
  callback: () => void;
}

const fetchTracks = (dispatch: Dispatch<SongActions>) => async ({
  value,
  limit,
  callback
}: Params) => {
  dispatch({ type: ActionType.IsLoading });
  try {
    const {
      data: { tracks }
    } = await roslenAPI.get(`/search/tracks/${value}/${limit}`);
    dispatch({ type: ActionType.FetchedTracks, payload: tracks });
    if (callback) callback();
  } catch (err) {
    console.log('Something went wrong');
    dispatch({ type: ActionType.IsError, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  { fetchTracks },
  { tracks: [], isLoading: false, isError: '' }
);
