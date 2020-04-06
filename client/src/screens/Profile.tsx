import React, { useEffect, useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';
import TextInput from '../components/TextInput';
import { useTextInput } from '../hooks/useTextInput';
import Button from '../components/Button';
import {
  StyledProfile,
  StyledWrapper,
  StyledInputContainer
} from '../styles/Profile';

const ProfileScreen = () => {
  const { state, fetchUser } = useContext<State>(AuthContext);
  const email = useTextInput('', state.user?.email);
  const password = useTextInput('', '*****');

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <StyledProfile>
      <StyledWrapper>
        <span>Your Email: </span>
        <StyledInputContainer>
          <TextInput {...email} />
        </StyledInputContainer>
        <Button title="Update" />
      </StyledWrapper>
      <StyledWrapper>
        <span>Your Password: </span>
        <StyledInputContainer>
          <TextInput {...password} />
        </StyledInputContainer>
        <Button title="Update" />
      </StyledWrapper>
      {/* <span>{state.user?.password}</span> */}
    </StyledProfile>
  );
};

export default ProfileScreen;
