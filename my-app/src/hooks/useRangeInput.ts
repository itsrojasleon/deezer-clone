import { useRef, MutableRefObject } from 'react';

// type InputRangeElement = React.ChangeEvent<HTMLInputElement>;

interface Values {
  ref: MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
  min: number;
  max: number;
  type: string;
  step: number;
  value: number | undefined;
}
// maxValue: number,
// changeEvent: (value: number) => void,
// time?: number

interface Props {
  maxValue: number;
  changeEvent: (value: number) => void;
  time?: number;
}

export const useRangeInput = ({
  maxValue,
  changeEvent,
  time
}: Props): Values => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    const node = inputRef.current;
    if (node) changeEvent(Number(node.value));
  };

  return {
    ref: inputRef,
    onChange: handleChange,
    min: 0,
    max: maxValue,
    type: 'range',
    step: 0.5,
    value: time
  };
};
