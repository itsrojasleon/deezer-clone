import React from 'react';
import TextInput from './TextInput';
import { useTextInput } from '../hooks/useTextInput';
import { FormElement } from '../types/Elements';

const AuthForm = ({ onSubmit }: any) => {
  const email = useTextInput('', 'Email');
  const password = useTextInput('', 'Password');

  const handleSubmit = (e: FormElement) => {
    e.preventDefault();
    onSubmit({ email: email.bind.value, password: password.bind.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput {...email} />
      <TextInput {...password} />
      <button>Submit</button>
    </form>
  );
};

export default AuthForm;
