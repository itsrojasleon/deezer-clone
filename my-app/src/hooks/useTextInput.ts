import { useState } from 'react';
import { InputProps, InputElement } from '../types/Elements';

export const useTextInput = (defaultText: string): InputProps => {
  const [text, setText] = useState(defaultText);

  const handleChange = (e: InputElement) => {
    setText(e.target.value);
  };

  return {
    value: text,
    onChange: handleChange,
    placeholder: 'Search',
    type: 'text'
  };
};
