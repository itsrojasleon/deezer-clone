import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as SearchContext, State } from '../contexts/tracks';
import UserDetails from '../components/users/UserDetails';

const User = () => {
  const {
    state: { user, isLoading },
    fetchUser
  } = useContext<State>(SearchContext);
  const { userId } = useParams();

  useEffect(() => {
    fetchUser({ value: userId || '' });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading = Object.keys(user).length === 0 && isLoading;

  return (
    <div>
      {loading && <div>Loading...</div>}
      <UserDetails user={user} />
    </div>
  );
};

export default User;
