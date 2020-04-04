import React, { useEffect, useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import { FiUser } from 'react-icons/fi';

import {
  StyledHeader,
  StyledNav,
  StyledLeftSide,
  StyledRightSide
} from '../styles/Header';

const Header = () => {
  const { state, tryLocalSignin } = useContext<State>(AuthContext);

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <StyledHeader>
      <StyledNav>
        <StyledLeftSide>
          <SearchBar />
        </StyledLeftSide>
        <StyledRightSide>
          <Link to="/">
            <FiUser />
          </Link>
          {state.token ? state.token : <a href="/signup">Signup</a>}
        </StyledRightSide>
      </StyledNav>
    </StyledHeader>
  );
};
export default Header;
