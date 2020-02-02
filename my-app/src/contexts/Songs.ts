import createDataContext from './createData';
import { roslenAPI } from '../api/deezer';

const songsReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'fetch_song':
      return { ...action.payload };
  }
};

const fetchSongs = (dispatch: any) => async (value: string) => {
  try {
    const { data } = await roslenAPI.get(`/search?q=${value}`);
    dispatch({ type: 'fetch_song', payload: data });
  } catch (err) {
    console.log('Something went wrong');
    // dispatch({ type: '' });
  }
};

export const { Provider, Context } = createDataContext(
  songsReducer,
  { fetchSongs },
  { songs: [] }
);
