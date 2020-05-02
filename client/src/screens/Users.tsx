import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';
import Users from '../components/users/User';
import { StyledLength } from '../styles/shared/components/StyledLength';
import { isPlural } from '../utils/isPlural';

const UsersScreen = () => {
  const { something } = useParams();
  const {
    state: { users },
    fetchUsers
  } = useContext<State>(TracksContext);

  useEffect(() => {
    fetchUsers({ value: something || '', limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <StyledLength>
        {users.length} user{isPlural(users.length)}
      </StyledLength>
      <Users />
    </>
  );
};

export default UsersScreen;
