import React, { useContext } from 'react';
import {
  Context as TracksContext,
  State as TrackState
} from '../../contexts/tracks';
import UserDetails from './UserDetails';
import { StyledContainer } from '../../styles/users/Users';

const User = (): JSX.Element => {
  const {
    state: { users, isLoading }
  } = useContext<TrackState>(TracksContext);

  const loading = users.length === 0 && isLoading;

  return (
    <>
      {loading && <div>Loading...</div>}
      <StyledContainer>
        {users.map((user) => (
          <UserDetails key={user.id} user={user} />
        ))}
      </StyledContainer>
    </>
  );
};

export default User;
