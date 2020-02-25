import { useState } from 'react';

type InputRangeElement = React.ChangeEvent<HTMLInputElement>;

interface Data {
  value: number;
  onChange: (event: InputRangeElement) => void;
}

export const useRangeInput = (): Data => {
  const [time, setTime] = useState(0);

  // useEffect(() => {
  //   setTime(currentTime);
  // }, [currentTime]);

  const handleChange = (e: InputRangeElement) => {
    setTime(Number(e.target.value));
  };
  return {
    value: time,
    onChange: handleChange
  };
};