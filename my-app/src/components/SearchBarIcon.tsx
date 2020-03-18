import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import { StyledSearchBarIcon } from '../styles/SearchBarIcon';

interface Props {
  itHasText: string | boolean;
  cleanText: () => void;
}

const SearchBarIcon = ({ itHasText, cleanText }: Props) => {
  return (
    <StyledSearchBarIcon>
      {itHasText ? <FiX onClick={() => cleanText()} /> : <FiSearch />}
    </StyledSearchBarIcon>
  );
};
export default SearchBarIcon;
