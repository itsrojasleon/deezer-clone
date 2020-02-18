import { useCallback, useState } from 'react';

export const usePlayer = () => {
  const [rect] = useState(null);

  const ref = useCallback((node: HTMLAudioElement) => {
    if (node !== null) {
      const load = () => {
        console.log(node.duration);
      };
      node.addEventListener('loadeddata', load);
    }
  }, []);
  return [rect, ref];
};
