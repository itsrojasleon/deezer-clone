import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import UserDetails from './UserDetails';
import Subtitle from '../Subtitle';
import { StyledContainer } from '../../styles/users/Users';

const User = (): JSX.Element => {
  const { state } = useContext<TrackState>(TracksContext);

  return (
    <>
      {state.users.length ? <Subtitle title="Users" type="users" /> : null}

      <StyledContainer>
        {state.users.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </StyledContainer>
    </>
  );
};

export default User;
