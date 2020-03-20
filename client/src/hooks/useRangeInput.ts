import { useRef, MutableRefObject } from 'react';

interface Values {
  ref: MutableRefObject<HTMLInputElement | null>;
  onChange: () => void;
  min: number;
  max: number;
  type: string;
  step: number;
  value: number | undefined;
}

interface Props {
  maxValue: number;
  changeEvent: (value: number) => void;
  timeOrVolume?: number;
}

export const useRangeInput = ({
  maxValue,
  changeEvent,
  timeOrVolume
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
    value: timeOrVolume
  };
};
