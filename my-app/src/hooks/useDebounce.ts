import { useState, useEffect } from 'react';

interface Params {
  value: string;
  delay: number;
}

// wait 500 ms or any delay and then do the request!
export const useDebounce = ({ value, delay }: Params): string => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [value, delay]);

  return debouncedValue;
};
