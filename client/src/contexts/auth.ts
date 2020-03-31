import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

enum ActionType {
  SIGNIN
}

interface AuthActions {
  type: ActionType;
  payload?: any;
}

interface AuthState {
  user: null;
}

const authReducer: Reducer<AuthState, AuthActions> = (state, action) => {
  switch (action.type) {
    case ActionType.SIGNIN:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const signin = (dispatch: Dispatch<AuthActions>) => async () => {
  try {
    const { data } = await roslenAPI.get(`/search/user`);
    dispatch({ type: ActionType.SIGNIN, payload: data });
  } catch (err) {
    console.log('Something went wrong');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin },
  {}
);
