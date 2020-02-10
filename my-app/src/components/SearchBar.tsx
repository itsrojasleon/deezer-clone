import React, { useEffect } from 'react';
import { useTextInput } from '../hooks/useTextInput';
import { InputProps } from '../types/Elements';
import TextInput from './TextInput';

interface Props {
  fetchTracks: Function;
}

const SearchBar = ({ fetchTracks }: Props): JSX.Element => {
  const input = useTextInput('');

  useEffect(() => {
    if (input.value) {
      fetchTracks(input.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input.value]);

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
