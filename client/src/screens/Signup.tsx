import React, { useContext } from 'react';
import { Context as AuthContext } from '../contexts/auth';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  console.log(state);

  return (
    <div>
      <AuthForm onSubmit={signup} />
    </div>
  );
};

export default SignupScreen;
