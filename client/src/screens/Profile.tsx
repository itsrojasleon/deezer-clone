import React, { useEffect, useContext } from 'react';
import { Context as UserContext, State } from '../contexts/user';
import TextInput from '../components/TextInput';
import { useTextInput } from '../hooks/useTextInput';
import Button from '../components/Button';
import {
  StyledProfile,
  StyledWrapper,
  StyledInputContainer,
  StyledTitle
} from '../styles/Profile';

const ProfileScreen = () => {
  const { state, fetchUser, updateUser } = useContext<State>(UserContext);
  const email = useTextInput('', state.user?.email);
  const password = useTextInput('', '*****');

  console.log(state);

  useEffect(() => {
    fetchUser();
  }, []);

  const update = () => {
    updateUser({
      email: email.bind.value,
      _id: state.user?._id || '',
      password: password.bind.value
    });
  };

  return (
    <StyledProfile>
      <StyledTitle>Your personal data</StyledTitle>
      <StyledWrapper>
        <StyledInputContainer>
          <TextInput {...email} />
        </StyledInputContainer>
        <Button title="Update" />
      </StyledWrapper>
      <StyledWrapper>
        <StyledInputContainer>
          <TextInput {...password} />
        </StyledInputContainer>
        <Button title="Update" />
      </StyledWrapper>
      <button onClick={update}>Save changes</button>
    </StyledProfile>
  );
};

export default ProfileScreen;
