import React, { useEffect, useContext } from 'react';
import { Context as TracksContext } from '../contexts/tracks';
import { Context as AlbumsContext } from '../contexts/albums';
import { useFormInput } from '../hooks/useFormInput';
import { useDebounce } from '../hooks/useDebounce';
import { InputProps } from '../types/Elements';
import Input from './Input';

const SearchBar = (): JSX.Element => {
  const { fetchTracks } = useContext(TracksContext);
  const { fetchAlbums } = useContext(AlbumsContext);
  const input = useFormInput('');
  const debouncedSearchTerm = useDebounce(input.value, 500);

  useEffect(() => {
    // I don't need to execute this effect when the value changes useDebounce hook already has
    // as a dependency (input.value), so, useDebounce will run if the value change.
    // And also we shouldn't run this effect if fetchTracks changes (that will case an infinite loop),
    // only once
    if (debouncedSearchTerm) {
      fetchTracks(input.value);
      fetchAlbums(input.value);
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
