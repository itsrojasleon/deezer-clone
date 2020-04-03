import React, { useContext, useEffect } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';

const Home: React.FC = (): JSX.Element => {
  const { state, signup } = useContext<State>(AuthContext);

  useEffect(() => {
    // signup({ email: 'rojasleon', password: 'hey' });
    console.log('rendering');
  }, []);

  // console.log(state);

  return (
    <div>
      <div>hello there</div>
    </div>
  );
};
export default Home;
