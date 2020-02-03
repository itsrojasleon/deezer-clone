import React, { useContext } from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { Context as SongsContext } from '../contexts/songs';

const SearchBar: React.FC = (): JSX.Element => {
  const input = useTextInput('');
  const { state, fetchSongs } = useContext(SongsContext);

  console.log(state);

  React.useEffect(() => {
    fetchSongs('eminem');
  }, []);

  return (
    <form>
      <input {...input} type="text" placeholder="Search..." />
    </form>
  );
};
export default SearchBar;
