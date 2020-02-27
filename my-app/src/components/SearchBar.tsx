import React, { useEffect, useContext } from 'react';
import { Context as TracksContext } from '../contexts/tracks';
import { useTextInput } from '../hooks/useTextInput';
import { useDebounce } from '../hooks/useDebounce';
import { useDocumentTitle } from '../hooks/useDocumentTitle';
import TextInput from './TextInput';
import Spinner from './Spinner';
import SearchIcon from './SearchIcon';
import { StyledInputContainer } from '../styles/SearchBar';

const SearchBar = (): JSX.Element => {
  const { state, fetchTracks } = useContext(TracksContext);
  const input = useTextInput('');
  useDocumentTitle(input.value);
  const debouncedSearchTerm = useDebounce(input.value, 500);

  useEffect(() => {
    // I don't need to execute this effect when the value changes useDebounce hook already has
    // as a dependency (input.value), so, useDebounce will run if the value change.
    // And also we shouldn't run this effect if fetchTracks changes (that will case an infinite loop),
    // only once
    if (debouncedSearchTerm) {
      fetchTracks(input.value, 6);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearchTerm]);

  return (
    <StyledInputContainer>
      <TextInput {...input} />
      {state.isLoading ? <Spinner /> : <SearchIcon />}
      {state.isError && <div>Something went wrong</div>}
    </StyledInputContainer>
  );
};
export default SearchBar;
