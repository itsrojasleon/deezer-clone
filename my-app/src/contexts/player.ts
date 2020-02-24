import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';

enum ActionTypes {
  TogglePlay = 'toggle_play',
  SetDuration = 'set_duration',
  SetCurrentTime = 'set_current_time'
}

interface PlayerState {
  duration: number;
  currentTime: number;
  isPlaying: boolean;
  nextTrack: any;
  previousTrack: any;
}
interface PlayerActions {
  type: ActionTypes;
  payload?: any;
}

const playerReducer: Reducer<PlayerState, PlayerActions> = (state, action) => {
  switch (action.type) {
    case ActionTypes.TogglePlay:
      return { ...state, isPlaying: !state.isPlaying };
    default:
      return state;
  }
};

const togglePlay = (dispatch: Dispatch<PlayerActions>) => () => {
  dispatch({ type: ActionTypes.TogglePlay });
};

export const { Provider, Context } = createDataContext(
  playerReducer,
  { togglePlay },
  { isPlaying: false, duration: 0, currentTime: 0 }
);
