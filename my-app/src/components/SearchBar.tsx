import React, { useEffect, useContext } from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { Context as SongsContext } from '../contexts/songs';
import { InputProps } from '../types/Elements';
import TextInput from './TextInput';

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

  // const inputData = { ...input, placeholder: 'Search Dude', type: 'text' };
  const inputData: InputProps = {
    ...input,
    placeholder: 'Search dude',
    type: 'text'
  };

  return (
    <form>
      <TextInput {...inputData} />
    </form>
  );
};
export default SearchBar;
