import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';

enum ActionTypes {
  SELECT_TRACK,
  IS_ERROR
}

interface PlayerState {
  track: any;
  isError: string;
}
interface PlayerActions {
  type: ActionTypes;
  payload?: any;
}

const playerReducer: Reducer<PlayerState, PlayerActions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.SELECT_TRACK:
      return { ...state, track: action.payload };
    case ActionTypes.IS_ERROR:
      return { ...state, isError: action.payload };
    default:
      return state;
  }
};

const selectTrack = (dispatch: Dispatch<PlayerActions>) => (track: any) => {
  try {
    dispatch({ type: ActionTypes.SELECT_TRACK, payload: track });
  } catch (err) {
    dispatch({ type: ActionTypes.IS_ERROR, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  playerReducer,
  { selectTrack },
  { track: null, isError: '' }
);
