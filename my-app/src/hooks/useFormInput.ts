import { useState } from 'react';

type InputElement = React.ChangeEvent<HTMLInputElement>;

interface Values {
  value: string;
  onChange: (event: InputElement) => void;
}

export const useFormInput = (defaultText: string): Values => {
  const [text, setText] = useState(defaultText);

  const handleChange = (e: InputElement) => {
    setText(e.target.value);
  };

  return {
    value: text,
    onChange: handleChange
  };
};
