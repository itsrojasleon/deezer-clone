import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <nav>
        <>
          <SearchBar />
        </>
        <div>
          <Link to="/"></Link>
        </div>
      </nav>
    </header>
  );
};
export default Header;
