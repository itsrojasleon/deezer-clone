import { useCallback, useState } from 'react';

interface Data {
  ref: any;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
}

export const usePlayer = (): Data => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const ref = useCallback(
    (node: HTMLAudioElement) => {
      if (node) {
        const load = () => setDuration(node.duration);
        const timeUpdate = () => setCurrentTime(node.currentTime);
        const toggle = () => {
          if (isPlaying) {
            node.play();
          } else {
            node.pause();
          }
        };
        toggle();

        node.addEventListener('loadeddata', load);
        node.addEventListener('timeupdate', timeUpdate);

        return () => {
          node.removeEventListener('loadeddata', load);
          node.removeEventListener('timeupdate', timeUpdate);
        };
      }
    },
    [isPlaying]
  );
  return { ref, setIsPlaying, isPlaying, currentTime, duration };
};
