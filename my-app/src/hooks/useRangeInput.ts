import { useRef, MutableRefObject } from 'react';

// type InputRangeElement = React.ChangeEvent<HTMLInputElement>;

interface Values {
  ref: MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
  min: number;
  max: number;
  type: string;
  step: number;
}

export const useRangeInput = (
  volume: number,
  changeVolume: (value: number) => void
): Values => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    const node = inputRef.current;
    if (node) {
      changeVolume(Number(node.value));
    }
  };

  return {
    ref: inputRef,
    onChange: handleChange,
    min: 0,
    max: volume,
    type: 'range',
    step: 0.1
  };
};
