import { useCallback, useState } from 'react';

export const usePlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState();

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const setRef = useCallback(
    (node: HTMLAudioElement) => {
      if (node) {
        const load = () => setDuration(node.duration);
        const toggle = () => {
          if (isPlaying) {
            node.play();
          } else {
            node.pause();
          }
        };
        toggle();

        const timeUpdate = () => setCurrentTime(String(node.currentTime));

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
  return [setRef, setIsPlaying, isPlaying, currentTime, duration];
};
