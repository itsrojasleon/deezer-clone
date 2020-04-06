import { Reducer, Dispatch } from 'react';
import createDataContext from './createData';
import deezerAPI from '../api/deezer';
import { User } from '../types/User';

export interface Params {
  email: string;
  password: string;
}

interface UserState {
  user: null | User;
  errorMessage: string;
}

export interface State {
  state: UserState;
  fetchUser: () => void;
}

enum ActionType {
  ERROR,
  FETCH_USER
}

interface UserActions {
  type: ActionType;
  payload?: any;
}

const userReducer: Reducer<UserState, UserActions> = (state, action) => {
  switch (action.type) {
    case ActionType.FETCH_USER:
      return { ...state, user: action.payload };
    case ActionType.ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export const fetchUser = (dispatch: Dispatch<UserActions>) => async () => {
  try {
    const { data } = await deezerAPI.get('/');
    dispatch({ type: ActionType.FETCH_USER, payload: data });
  } catch (err) {
    dispatch({ type: ActionType.ERROR, payload: err.message });
  }
};

export const { Provider, Context } = createDataContext(
  userReducer,
  { fetchUser },
  { errorMessage: '', user: null }
);
