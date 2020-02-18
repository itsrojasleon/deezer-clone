import { Reducer } from 'react';
import createDataContext from './createData';
// import { roslenAPI } from '../api/deezer';

enum ActionTypes {}
// FetchedTracks = 'fetched_tracks',
// IsLoading = 'is_loading',
// IsError = 'is_error'

interface PlayerState {
  tracks: [];
  error: '';
}
interface PlayerActions {
  type: ActionTypes;
  payload?: any;
}

const playerReducer: Reducer<PlayerState, PlayerActions> = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const { Provider, Context } = createDataContext(
  playerReducer,
  {},
  { track: null, isError: '' }
);
