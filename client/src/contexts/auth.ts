import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import deezerAPI from '../api/deezer';

enum ActionType {
  SIGNIN,
  ERROR
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
      return { ...state, token: action.payload };
    case ActionType.ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

interface Props {
  email: string;
  password: string;
}

const tryLocalSignin = (dispatch: Dispatch<AuthActions>) => async () => {
  const token = await window.localStorage.getItem('token');
  if (!token) {
    console.log('No user dude');
  }

  dispatch({ type: ActionType.SIGNIN, payload: token });
};

const signin = (dispatch: Dispatch<AuthActions>) => async ({
  email,
  password
}: Props) => {
  try {
    const {
      data: { token }
    } = await deezerAPI.post('/signin', {
      email,
      password
    });
    await window.localStorage.setItem('token', token);

    dispatch({ type: ActionType.SIGNIN, payload: token });
  } catch (err) {
    dispatch({ type: ActionType.ERROR, payload: err.message });
  }
};

const signup = (dispatch: Dispatch<AuthActions>) => async ({
  email,
  password
}: Props) => {
  console.log(email, password);
  try {
    const { data } = await deezerAPI.post('/signup', {
      email,
      password
    });

    await window.localStorage.setItem('token', data);

    dispatch({ type: ActionType.SIGNIN, payload: data });
  } catch (err) {
    dispatch({ type: ActionType.ERROR, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signin, signup },
  { token: null, errorMessage: '' }
);
