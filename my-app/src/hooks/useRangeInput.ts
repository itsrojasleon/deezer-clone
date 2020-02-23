import { useState, useEffect } from 'react';

type InputRangeElement = React.ChangeEvent<HTMLInputElement>;

interface Data {
  value: number;
  onChange: (event: InputRangeElement) => void;
}

// This hook has to receive two params:
// First: the current progress of the track/song
// Second: a function to say: "someone selected/pressed/touched the duration bar" we need to handle that point
export const useRangeInput = (
  currentTime: number,
  setClickedTime: React.Dispatch<React.SetStateAction<number>>
): Data => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTime(currentTime);
  }, [currentTime]);

  const handleChange = (e: InputRangeElement) => {
    setTime(Number(e.target.value));
    setClickedTime(Number(e.target.value));
  };
  return {
    value: time,
    onChange: handleChange
  };
};
