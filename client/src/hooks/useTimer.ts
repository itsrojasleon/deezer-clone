import { useState, useEffect } from 'react';

export const useTimer = (defaultTime: number = 3000): boolean => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => setIsOpen(false), defaultTime);

    return (): void => {
      clearInterval(timer);
    };
  }, []);

  return isOpen;
};
