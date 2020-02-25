import React, { useEffect, useContext } from 'react';
import { Context as TracksContext } from '../contexts/tracks';
import { useFormInput } from '../hooks/useFormInput';
import { useDebounce } from '../hooks/useDebounce';
import { InputProps } from '../types/Elements';
import TextInput from './TextInput';
import Spinner from './Spinner';

import { StyledInputContainer } from '../styles/SearchBar';
import SearchIcon from './SearchIcon';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const SearchBar = (): JSX.Element => {
  const { state, fetchTracks } = useContext(TracksContext);
  const input = useFormInput('');
  useDocumentTitle(input.value);
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
    <StyledInputContainer>
      <TextInput {...inputData} />
      {state.isLoading ? <Spinner /> : <SearchIcon />}
      {state.isError && <div>Something went wrong</div>}
    </StyledInputContainer>
  );
};
export default SearchBar;
