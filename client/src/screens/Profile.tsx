import React, { useEffect, useContext } from 'react';
import { Context as UserContext, State } from '../contexts/user';
import TextInput from '../components/TextInput';
import { useTextInput } from '../hooks/useTextInput';
import {
  StyledProfile,
  StyledWrapper,
  StyledInputContainer,
  StyledTitle,
  StyledButton
} from '../styles/Profile';

const ProfileScreen = () => {
  const { state, fetchUser, updateUser } = useContext<State>(UserContext);
  const email = useTextInput('', state.user?.email);
  const password = useTextInput('', '*****');

  useEffect(() => {
    fetchUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const update = () => {
    updateUser({
      email: email.bind.value,
      _id: state.user?._id || '',
      password: password.bind.value
    });
  };

  const isDisabled = !email.bind.value && !password.bind.value;

  return (
    <StyledProfile>
      <StyledTitle>Your personal data</StyledTitle>
      <StyledWrapper>
        <label>Email</label>
        <StyledInputContainer>
          <TextInput {...email} />
        </StyledInputContainer>
      </StyledWrapper>
      <StyledWrapper>
        <label>Password</label>
        <StyledInputContainer>
          <TextInput {...password} />
        </StyledInputContainer>
      </StyledWrapper>
      <StyledButton disabled={isDisabled} onClick={update}>
        Save changes
      </StyledButton>
    </StyledProfile>
  );
};

export default ProfileScreen;
