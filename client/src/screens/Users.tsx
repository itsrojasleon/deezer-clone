import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Context as TracksContext, State } from '../contexts/tracks';

const UsersScreen = () => {
  const { something } = useParams();
  const { fetchUsers } = useContext<State>(TracksContext);

  useEffect(() => {
    fetchUsers({ value: something || '', limit: 20 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>Users</div>
    </div>
  );
};
export default UsersScreen;
