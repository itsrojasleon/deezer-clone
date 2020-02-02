import { useState } from 'react';

interface Values {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useTextInput = (defaultText: string): Values => {
  const [text, setText] = useState(defaultText);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return {
    value: text,
    onChange: handleChange
  };
};
