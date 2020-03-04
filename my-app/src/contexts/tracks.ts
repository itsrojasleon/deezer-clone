import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';
import { Track } from '../types/Tracks';
import { Album } from '../types/Albums';

interface Params {
  value: string;
  limit: number;
}

export interface State {
  tracks: Track[];
  albums: Album[];
  isLoading: boolean;
  isError: string;
  fetchTracks: (params: Params) => void;
  fetchAlbums: (params: Params) => void;
  fetchArtists: (params: Params) => void;
}

enum ActionType {
  FetchedTracks,
  FetchedAlbums,
  FetchedArtists,
  IsLoading,
  IsError
}

interface TracksState {
  tracks: Track[];
  albums: Album[];
  isLoading: boolean;
  isError: string;
}
interface TrackActions {
  type: ActionType;
  payload?: any;
}

const songsReducer: Reducer<TracksState, TrackActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FetchedTracks:
      return { ...state, tracks: action.payload, isLoading: false };
    case ActionType.FetchedAlbums:
      return { ...state, albums: action.payload, isLoading: false };
    case ActionType.FetchedArtists:
      return { ...state, artists: action.payload, isLoading: false };
    case ActionType.IsLoading:
      return { ...state, isLoading: true };
    case ActionType.IsError:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const fetchTracks = (dispatch: Dispatch<TrackActions>) => async ({
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
    dispatch({ type: ActionType.IsError, payload: err.message });
  }
};

const fetchAlbums = (dispatch: Dispatch<TrackActions>) => async ({
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

const fetchArtists = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.IsLoading });
  try {
    const {
      data: { artists }
    } = await roslenAPI.get(`/search/artists/${value}/${limit}`);
    dispatch({ type: ActionType.FetchedArtists, payload: artists });
  } catch (err) {
    dispatch({ type: ActionType.IsError, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  { fetchTracks, fetchAlbums, fetchArtists },
  { tracks: [], albums: [], artists: [], isLoading: false, isError: '' }
);
