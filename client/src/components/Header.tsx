import React, { useEffect, useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaUser } from 'react-icons/fa';

import {
  StyledHeader,
  StyledNav,
  StyledLeftSide,
  StyledRightSide,
  StyledIconUser
} from '../styles/Header';

const Header = () => {
  const { state, tryLocalSignin } = useContext<State>(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  const renderContent = () => {
    return !state.token ? (
      <Link to="/signup">Signup</Link>
    ) : (
      <Link to="/profile">
        <StyledIconUser>
          <FaUser />
        </StyledIconUser>
      </Link>
    );
  };

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLeftSide>
          <SearchBar />
        </StyledLeftSide>
        <StyledRightSide>{renderContent()}</StyledRightSide>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
