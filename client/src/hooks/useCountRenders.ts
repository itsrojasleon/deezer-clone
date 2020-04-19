// Count how many times is rendering your component
// It is only used for testing
import { useRef } from 'react';

export const useCountRenders = (): void => {
  const renders = useRef(0);
  console.log('Render: ', renders.current++);
};
