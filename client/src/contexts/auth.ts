import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import deezerAPI from '../api/deezer';

export interface Params {
  email: string;
  password: string;
}

interface AuthState {
  token: string | null;
  user: null;
  errorMessage: string;
}

export interface State {
  state: AuthState;
  tryLocalSignin: () => void;
  signin: (props: Params) => void;
  signup: (props: Params) => void;
  fetchUser: () => void;
}

enum ActionType {
  SIGNIN,
  ERROR,
  FETCH_USER
}

interface AuthActions {
  type: ActionType;
  payload?: any;
}

const authReducer: Reducer<AuthState, AuthActions> = (state, action) => {
  switch (action.type) {
    case ActionType.SIGNIN:
      return { ...state, token: action.payload };
    case ActionType.FETCH_USER:
      return { ...state, user: action.payload };
    case ActionType.ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

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
}: Params) => {
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
}: Params) => {
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

export const fetchUser = (dispatch: Dispatch<AuthActions>) => async () => {
  try {
    const { data } = await deezerAPI.get('/current_user');
    dispatch({ type: ActionType.FETCH_USER, payload: data });
  } catch (err) {
    dispatch({ type: ActionType.ERROR, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { tryLocalSignin, signin, signup, fetchUser },
  { token: null, errorMessage: '', user: null }
);
