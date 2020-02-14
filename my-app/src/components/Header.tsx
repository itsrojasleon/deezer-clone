import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <SearchBar />
        </div>
        <div>
          <a href="#">Tracks</a>
        </div>
      </nav>
    </header>
  );
};
export default Header;
