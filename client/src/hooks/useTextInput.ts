import { useState } from 'react';
import { InputProps, InputElement } from '../types/Elements';

export const useTextInput = (
  defaultText: string,
  placeholder: string = 'Search'
): InputProps => {
  const [text, setText] = useState(defaultText);

  const handleChange = (e: InputElement): void => {
    setText(e.target.value);
  };

  const reset = (): void => {
    setText('');
  };

  return {
    bind: {
      value: text,
      onChange: handleChange,
      placeholder,
      type: 'text'
    },
    reset
  };
};
