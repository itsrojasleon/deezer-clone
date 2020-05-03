import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import deezerAPI from '../api/deezer';
import { Track } from '../types/Tracks';
import { Album } from '../types/Albums';
import { Artist } from '../types/Artist';
import { Playlist } from '../types/Playlist';
import { User } from '../types/User';
import { Podcast } from '../types/Podcast';

interface Params {
  value: string;
  limit?: number;
}

interface TracksState {
  tracks: Track[];
  albums: Album[];
  artists: Artist[];
  playlists: Playlist[];
  users: User[];
  podcasts: Podcast[];
  artist: Artist;
  album: Album;
  playlist: Playlist;
  user: User;
  podcast: Podcast;
  isLoading: boolean;
  isError: string;
}

export interface State {
  state: TracksState;
  fetchTracks: (params: Params) => void;
  fetchAlbums: (params: Params) => void;
  fetchArtists: (params: Params) => void;
  fetchPlaylists: (params: Params) => void;
  fetchUsers: (params: Params) => void;
  fetchPodcasts: (params: Params) => void;
  fetchArtist: (params: Params) => void;
  fetchAlbum: (params: Params) => void;
  fetchPlaylist: (params: Params) => void;
  fetchUser: (params: Params) => void;
  fetchPodcast: (params: Params) => void;
}

enum ActionType {
  FETCH_TRACKS,
  FETCH_ALBUMS,
  FETCH_ARTISTS,
  FETCH_PLAYLISTS,
  FETCH_USERS,
  FETCH_PODCASTS,
  FETCH_ARTIST,
  FETCH_ALBUM,
  FETCH_PLAYLIST,
  FETCH_USER,
  FETCH_PODCAST,
  LOADING,
  IS_ERROR
}

interface TrackActions {
  type: ActionType;
  payload?: any;
}

const songsReducer: Reducer<TracksState, TrackActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FETCH_TRACKS:
      return { ...state, tracks: action.payload, isLoading: false };
    case ActionType.FETCH_ALBUMS:
      return { ...state, albums: action.payload, isLoading: false };
    case ActionType.FETCH_ARTISTS:
      return { ...state, artists: action.payload, isLoading: false };
    case ActionType.FETCH_PLAYLISTS:
      return { ...state, playlists: action.payload, isLoading: false };
    case ActionType.FETCH_USERS:
      return { ...state, users: action.payload, isLoading: false };
    case ActionType.FETCH_PODCASTS:
      return { ...state, podcasts: action.payload, isLoading: false };
    case ActionType.FETCH_ARTIST:
      return { ...state, artist: { ...action.payload }, isLoading: false };
    case ActionType.FETCH_ALBUM:
      return { ...state, album: { ...action.payload }, isLoading: false };
    case ActionType.FETCH_PLAYLIST:
      return { ...state, playlist: { ...action.payload }, isLoading: false };
    case ActionType.FETCH_USER:
      return { ...state, user: { ...action.payload }, isLoading: false };
    case ActionType.FETCH_PODCAST:
      return { ...state, podcast: { ...action.payload }, isLoading: false };
    case ActionType.LOADING:
      return { ...state, isLoading: true };
    case ActionType.IS_ERROR:
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

const fetchTracks = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { tracks }
    } = await deezerAPI.get(`/search/tracks/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_TRACKS, payload: tracks });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchAlbums = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { albums }
    } = await deezerAPI.get(`/search/albums/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_ALBUMS, payload: albums });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchArtists = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { artists }
    } = await deezerAPI.get(`/search/artists/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_ARTISTS, payload: artists });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchPlaylists = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { playlists }
    } = await deezerAPI.get(`/search/playlists/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_PLAYLISTS, payload: playlists });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchUsers = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { users }
    } = await deezerAPI.get(`/search/users/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_USERS, payload: users });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchPodcasts = (dispatch: Dispatch<TrackActions>) => async ({
  value,
  limit
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const {
      data: { podcasts }
    } = await deezerAPI.get(`/search/podcasts/${value}/${limit}`);
    dispatch({ type: ActionType.FETCH_PODCASTS, payload: podcasts });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchArtist = (dispatch: Dispatch<TrackActions>) => async ({
  value
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const { data: artist } = await deezerAPI.get(`/artist/${value}`);
    dispatch({ type: ActionType.FETCH_ARTIST, payload: artist });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchAlbum = (dispatch: Dispatch<TrackActions>) => async ({
  value
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const { data: album } = await deezerAPI.get(`/album/${value}`);
    dispatch({ type: ActionType.FETCH_ALBUM, payload: album });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchPlaylist = (dispatch: Dispatch<TrackActions>) => async ({
  value
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const { data: playlist } = await deezerAPI.get(`/playlist/${value}`);
    dispatch({ type: ActionType.FETCH_PLAYLIST, payload: playlist });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchUser = (dispatch: Dispatch<TrackActions>) => async ({
  value
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const { data: user } = await deezerAPI.get(`/user/${value}`);
    dispatch({ type: ActionType.FETCH_USER, payload: user });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

const fetchPodcast = (dispatch: Dispatch<TrackActions>) => async ({
  value
}: Params) => {
  dispatch({ type: ActionType.LOADING });

  try {
    const { data: podcast } = await deezerAPI.get(`/podcast/${value}`);
    dispatch({ type: ActionType.FETCH_PODCAST, payload: podcast });
  } catch (err) {
    dispatch({ type: ActionType.IS_ERROR, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  {
    fetchTracks,
    fetchAlbums,
    fetchArtists,
    fetchPlaylists,
    fetchUsers,
    fetchPodcasts,
    fetchArtist,
    fetchAlbum,
    fetchPlaylist,
    fetchUser,
    fetchPodcast
  },
  {
    tracks: [],
    albums: [],
    artists: [],
    playlists: [],
    users: [],
    podcasts: [],
    album: {},
    artist: {},
    playlist: {},
    user: {},
    podcast: {},
    isLoading: false,
    isError: ''
  }
);
