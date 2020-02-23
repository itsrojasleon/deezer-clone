import { useState, useEffect } from 'react';

type InputRangeElement = React.ChangeEvent<HTMLInputElement>;

interface Data {
  value: string;
  onChange: (event: InputRangeElement) => void;
}

export const useRangeInput = (currentTime: number, setClickedTimeFn: any) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(currentTime);
  }, [currentTime]);

  const handleChange = (e: InputRangeElement) => {
    setTime(Number(e.target.value));
    setClickedTimeFn(Number(e.target.value));
  };
  return {
    value: time,
    onChange: handleChange
  };
};
