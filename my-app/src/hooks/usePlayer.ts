import { useCallback } from 'react';

interface Data {
  ref: any;
  // setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  // isPlaying: boolean;
  // currentTime: number;
  // setCurrentTime: React.Dispatch<React.SetStateAction<number>>;
  // duration: number;
}

export const usePlayer = (isPlaying: boolean): Data => {
  // const [isPlaying, setIsPlaying] = useState(false);
  // const [duration, setDuration] = useState(0);
  // const [currentTime, setCurrentTime] = useState(0);
  // Someone pressed the duration bar/icon/button
  // const [clickedTime, setClickedTime] = useState(0);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  const ref = useCallback(
    (node: HTMLAudioElement) => {
      if (node) {
        const load = () => {
          // setDuration(node.duration);
          console.log('Loaded');
        };
        const timeUpdate = () => {
          // setCurrentTime(node.currentTime);
          console.log('time dude');
        };
        // const toggle = () => {
        //   isPlaying ? node.play() : node.pause();
        // };
        // toggle();
        isPlaying ? node.play() : node.pause();

        // if (rangeInputProgress) {
        //   console.log(rangeInputProgress);
        //   node.currentTime = rangeInputProgress;
        // }

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
  return {
    ref
    // setIsPlaying,
    // isPlaying,
    // currentTime,
    // setCurrentTime,
    // duration
  };
};
