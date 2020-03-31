import React, { useContext, useEffect } from 'react';
import { Context as AuthContext } from '../contexts/auth';

const Home: React.FC = (): JSX.Element => {
  const { state, signin } = useContext(AuthContext);

  useEffect(() => {
    signin();
  }, []);

  console.log(state);

  return (
    <div>
      <div>hello there</div>
    </div>
  );
};
export default Home;
