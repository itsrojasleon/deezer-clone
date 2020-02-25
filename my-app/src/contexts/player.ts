import { Reducer } from 'react';
import createDataContext from './createData';

enum ActionTypes {}

interface PlayerState {}
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

export const { Provider, Context } = createDataContext(playerReducer, {}, {});
