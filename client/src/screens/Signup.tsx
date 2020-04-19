import React, { useContext } from 'react';
import { Context as AuthContext, State } from '../contexts/auth';
import AuthForm from '../components/AuthForm';

const SignupScreen = () => {
  const { signup } = useContext<State>(AuthContext);

  return (
    <div>
      <AuthForm onSubmit={signup} />
    </div>
  );
};

export default SignupScreen;
