import React, { useEffect } from 'react';
import { useFormInput } from '../hooks/useFormInput';
import { useDebounce } from '../hooks/useDebounce';
import { InputProps } from '../types/Elements';
import Input from './Input';

interface Props {
  fetchTracks: Function;
}

const SearchBar = ({ fetchTracks }: Props): JSX.Element => {
  const input = useFormInput('');
  const debouncedSearchTerm = useDebounce(input.value, 500);

  useEffect(() => {
    // I don't need to execute this effect when the value changes useDebounce hook already has
    // as a dependency (input.value), so, useDebounce will run if the value change.
    // And also we shouldn't run this effect if fetchTracks changes (that will case an infinite loop),
    // only once
    if (debouncedSearchTerm) {
      fetchTracks(input.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  const inputData: InputProps = {
    ...input,
    placeholder: 'Search dude',
    type: 'text'
  };

  return (
    <form>
      <Input {...inputData} />
    </form>
  );
};
export default SearchBar;
