import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

enum ActionType {
  SIGNED_UP
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
    case ActionType.SIGNED_UP:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch: Dispatch<AuthActions>) => async () => {
  try {
    await roslenAPI.post(`/auth/signup`, { id: 'hey', username: 'hey' });
    dispatch({ type: ActionType.SIGNED_UP, payload: 'hey' });
  } catch (err) {
    console.log('Something went wrong');
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup },
  {}
);
