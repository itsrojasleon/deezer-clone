import React, { useEffect, useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FaUser, FaHome, FaHeart } from 'react-icons/fa';

import {
  StyledHeader,
  StyledNav,
  StyledLeftSide,
  StyledRightSide,
  StyledIcon
} from '../styles/Header';

const Header = () => {
  const { state, tryLocalSignin } = useContext<State>(AuthContext);

  useEffect(() => {
    tryLocalSignin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContent = () => {
    return !state.token ? (
      <Link to="/signup">Signup</Link>
    ) : (
      <>
        <Link to="/">
          <StyledIcon>
            <FaHome />
          </StyledIcon>
        </Link>
        <Link to="/favorites">
          <StyledIcon>
            <FaHeart />
          </StyledIcon>
        </Link>
        <Link to="/profile">
          <StyledIcon>
            <FaUser />
          </StyledIcon>
        </Link>
      </>
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
