import React, { useEffect, useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';

const ProfileScreen = () => {
  const { state, fetchUser } = useContext<State>(AuthContext);

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(state);

  return (
    <div>
      <div>hey</div>
    </div>
  );
};

export default ProfileScreen;
