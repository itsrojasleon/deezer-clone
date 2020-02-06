import React, { useEffect, useContext } from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { Context as SongsContext } from '../contexts/songs';

const SearchBar: React.FC = (): JSX.Element => {
  const { fetchTracks } = useContext(SongsContext);
  const input = useTextInput('');
  useEffect(() => {
    let ignore = false;

    const fetch = (): void => {
      if (input.value && !ignore) {
        fetchTracks(input.value);
      }
    };
    fetch();

    return () => {
      ignore = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

  return (
    <form>
      <input {...input} type="text" placeholder="Search..." />
    </form>
  );
};
export default SearchBar;
