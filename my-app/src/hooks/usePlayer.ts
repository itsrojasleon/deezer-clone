import { useCallback, useState } from 'react';

interface Data {
  ref: any;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  isPlaying: boolean;
  currentTime: number;
  setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  duration: number;
  setClickedTime: React.Dispatch<React.SetStateAction<number>>;
}

export const usePlayer = (): Data => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // Someone pressed the duration bar/icon/button
  const [clickedTime, setClickedTime] = useState(0);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const ref = useCallback(
    (node: HTMLAudioElement) => {
      if (node) {
        const load = () => {
          setDuration(node.duration);
        };
        const timeUpdate = () => {
          setCurrentTime(node.currentTime);
        };
        const toggle = () => {
          isPlaying ? node.play() : node.pause();
        };
        toggle();

        if (clickedTime) {
          node.currentTime = clickedTime;
        }

        node.addEventListener('loadeddata', load);
        node.addEventListener('timeupdate', timeUpdate);

        return () => {
          node.removeEventListener('loadeddata', load);
          node.removeEventListener('timeupdate', timeUpdate);
        };
      }
    },
    [isPlaying, clickedTime]
  );
  return {
    ref,
    setIsPlaying,
    isPlaying,
    currentTime,
    setCurrentTime,
    duration,
    setClickedTime
  };
};
